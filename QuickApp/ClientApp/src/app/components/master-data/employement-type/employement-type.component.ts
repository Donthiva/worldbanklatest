import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { employmenttypes } from 'src/app/models/employment_types';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { EmploymentEndpoint } from 'src/app/services/masterdataservice/employmentService';

@Component({
  selector: 'app-employement-type',
  templateUrl: './employement-type.component.html',
  styleUrls: ['./employement-type.component.scss']
})
export class EmployementTypeComponent implements OnInit {

  employmenttypeModel:employmenttypes;
  deleteModel:employmenttypes;
  columns: any[] = [];
  rows: any[] = [];
  update :boolean =false;
  loadingIndicator: boolean;

  
  @ViewChild('indexTemplateemploymentType', { static: true })
  indexTemplateemploymentType: TemplateRef<any>;

  @ViewChild('actionsTemplateemploymentType', { static: true })
  actionsTemplateemploymentType: TemplateRef<any>;

  constructor(private employmentEndpoint:EmploymentEndpoint,private translationService: AppTranslationService,private alertService: AlertService) {
    this.employmenttypeModel = new employmenttypes();

   }

  ngOnInit(): void {
    const gT = (key: string) => this.translationService.getTranslation(key);

    this.columns = [
      { prop: 'Employment_Type_ID', name: '#', width: 50, cellTemplate: this.indexTemplateemploymentType, canAutoResize: false },
      { prop: 'Employment_Type_Name', name: gT('APs.EmploymentTypes.list.Employment_Type_Name'), width: 320 },
      { prop: 'Employment_Type_Description', name: gT('APs.EmploymentTypes.list.Description'), width: 320 },
      { name: '', width: 250, cellTemplate: this.actionsTemplateemploymentType, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];


    this.getAllEmploymentTypes()
  }

  addNewemploymentType(){
    if(this.employmenttypeModel.Employment_Type_Description!=null){
    this.employmentEndpoint.AddnewEmploymentType(this.employmenttypeModel).subscribe(
      reponse=>{
        this.getAllEmploymentTypes();
        this.Clear();
        this.alertService.showMessage('Successfully saved', '',MessageSeverity.success);
      }
    )
  }
  else
  this.alertService.showMessage('Please fill the detail', '',MessageSeverity.warn);

  }

  updateEmploymentType(){
    if(JSON.stringify(this.employmenttypeModel)!=JSON.stringify(this.originaleditemploymenttypes)){
    if(this.employmenttypeModel.Employment_Type_Description!=""){
    this.employmentEndpoint.UpdateEmploymentType(this.employmenttypeModel).subscribe(
      reponse=>{
        this.getAllEmploymentTypes();
        this.Clear();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }
  else
  this.alertService.showMessage('Please fill the detail', '',MessageSeverity.warn);
  }
  else
  this.alertService.showMessage('Nothing to Update', '',MessageSeverity.warn);

}


  deleteEmploymentTypes(){
    this.employmentEndpoint.DeleteEmploymentType(this.deleteModel).subscribe(
      reponse=>{
        this.getAllEmploymentTypes();
        this.deleteModel = new employmenttypes();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }
  employmenttypetablearray:Array<employmenttypes>=[]
  employmenttypearray:any=[]
  getAllEmploymentTypes(){
    this.employmentEndpoint.GetAllEmploymentTypes<Array<employmenttypes>>().subscribe(
      reponse=>{
        console.log("log data",reponse);
        this.employmenttypearray=reponse;
        this.employmenttypearray.forEach(element => {
          var data = new employmenttypes();
          data.Employment_Type_Description=element.employment_Type_Description;
          data.Employment_Type_Name=element.employment_Type_Name;
          data.Employment_Type_ID=element.employment_Type_ID;
          this.employmenttypetablearray.push(data);
        });

        this.rows = this.employmenttypetablearray;
        this.employmenttypetablearray=[];
        
      }
    )

  }
  originaleditemploymenttypes=new employmenttypes();
  view(view){
    this.update  =true;
    this.employmenttypeModel.Employment_Type_Description = view.Employment_Type_Description;
    this.employmenttypeModel.Employment_Type_Name = view.Employment_Type_Name;
    this.employmenttypeModel.Employment_Type_ID = view.Employment_Type_ID;
    console.log("View",view)
    this.originaleditemploymenttypes=JSON.parse(JSON.stringify(this.employmenttypeModel));
  }


  delete(view){
    this.deleteModel= new employmenttypes();
    this.deleteModel.Employment_Type_Description = view.Employment_Type_Description;
    this.deleteModel.Employment_Type_Name = view.Employment_Type_Name;
    this.deleteModel.Employment_Type_ID = view.Employment_Type_ID;

    this.deleteEmploymentTypes()
  }


  Clear(){
    console.log("clear data")
    this.employmenttypeModel = new employmenttypes();
    this.update  =false;

  }

}
