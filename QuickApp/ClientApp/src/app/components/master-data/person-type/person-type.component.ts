import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { persontypes } from 'src/app/models/person_types';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { PersonEndpoint2 } from 'src/app/services/masterdataservice/personService2';


@Component({
  selector: 'app-person-type',
  templateUrl: './person-type.component.html',
  styleUrls: ['./person-type.component.scss']
})
export class PersonTypeComponent implements OnInit {

  persontypeModel:persontypes;
  deleteModel:persontypes;
  columns: any[] = [];
  rows: any[] = [];
  update :boolean =false;
  loadingIndicator: boolean;

  @ViewChild('indexTemplatepersontype', { static: true })
  indexTemplatepersontype: TemplateRef<any>;

  @ViewChild('actionsTemplatepersontype', { static: true })
  actionsTemplatepersontype: TemplateRef<any>;

  constructor(private personEndpoint:PersonEndpoint2,private translationService: AppTranslationService,private alertService: AlertService) {
    this.persontypeModel = new persontypes(); }

  ngOnInit(): void {

    const gT = (key: string) => this.translationService.getTranslation(key);

    this.columns = [
      { prop: 'persontype_ID', name: '#', width: 50, cellTemplate: this.indexTemplatepersontype, canAutoResize: false },
      { prop: 'persontype_Name', name: gT('APs.persontypes.list.persontype_Name'), width: 320 },   
      { name: '', width: 250, cellTemplate: this.actionsTemplatepersontype, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];


    this.getAllpersontypes();
  }

  addNewpersontype(){
    if(this.persontypeModel.Person_Type_Description!=null&&this.persontypeModel.Type!=null){
    this.personEndpoint.AddnewPersonType(this.persontypeModel).subscribe(
      reponse=>{
        this.getAllpersontypes();
        this.Clear();
        this.alertService.showMessage('Successfully saved', '',MessageSeverity.success);
      }
    )
  }
  else
  this.alertService.showMessage('Please fill the detail', '',MessageSeverity.warn);

  }

  updatepersontype(){
    if(this.persontypeModel.Person_Type_Description!=""&&this.persontypeModel.Type!=null){
    this.personEndpoint.UpdatePersonType(this.persontypeModel).subscribe(
      reponse=>{
        this.getAllpersontypes();
        this.Clear();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }
  else
  this.alertService.showMessage('Please fill the detail', '',MessageSeverity.warn);
  }


  deletepersontype(){
    this.personEndpoint.DeletePersonType(this.deleteModel).subscribe(
      reponse=>{
        this.getAllpersontypes();
        this.deleteModel = new persontypes();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }

  persontypetablearray:Array<persontypes>=[]
  persontypearray:any=[]
  getAllpersontypes(){
    this.personEndpoint.GetPersonTypes<Array<persontypes>>().subscribe(
      reponse=>{
        console.log("log persontype",reponse);
        this.persontypearray=reponse;
        this.persontypearray.forEach(element => {
          var data =new persontypes();
          data.Person_Type_ID=element.persontype_ID;
          data.Person_Type_Description=element.person_Type_Description;
          this.persontypetablearray.push(data);
        });
        this.rows = this.persontypetablearray;
        
        
      }
    )

  }

  view(view){
    this.update  =true;
    this.persontypeModel.Person_Type_ID = view.erson_Type_ID;
    this.persontypeModel.Person_Type_Description = view.person_Type_Description;
    console.log("View",view)
  }


  delete(view){
    this.deleteModel= new persontypes();
    this.deleteModel.Person_Type_Description = view.person_Type_Description;
    this.deleteModel.Person_Type_ID = view.person_Type_ID;
    
    this.deletepersontype()
  }


  Clear(){
    console.log("clear data")
    this.persontypeModel = new persontypes();
    this.update  =false;

  }

}
