import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { gender } from 'src/app/models/gender';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { PersonEndpoint2 } from 'src/app/services/masterdataservice/personService2';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {

  genderModel:gender;
  deleteModel:gender;
  columns: any[] = [];
  rows: any[] = [];
  update :boolean =false;
  loadingIndicator: boolean;

  @ViewChild('indexTemplategender', { static: true })
  indexTemplategender: TemplateRef<any>;

  @ViewChild('actionsTemplategender', { static: true })
  actionsTemplategender: TemplateRef<any>;

  constructor(private personEndpoint:PersonEndpoint2,private translationService: AppTranslationService,private alertService: AlertService) {
    this.genderModel = new gender(); }

  ngOnInit(): void {
    const gT = (key: string) => this.translationService.getTranslation(key);

    this.columns = [
      { prop: 'Gender_ID', name: '#', width: 50, cellTemplate: this.indexTemplategender, canAutoResize: false },
      { prop: 'Gender_Name', name: gT('APs.Genderies.list.Gender_Name'), width: 320 },   
      { name: '', width: 250, cellTemplate: this.actionsTemplategender, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];


    this.getAllGenders();
  }

  addNewGender(){
    if(this.genderModel.User_Gender_Name!=null){
    this.personEndpoint.AddnewGender(this.genderModel).subscribe(
      reponse=>{
        this.getAllGenders();
        this.Clear();
        this.alertService.showMessage('Successfully saved', '',MessageSeverity.success);
      }
    )
  }
  else
  this.alertService.showMessage('Please fill the detail', '',MessageSeverity.warn);

  }

  updateGender(){
    if(this.genderModel.User_Gender_Name!=null){
    this.personEndpoint.UpdateGender(this.genderModel).subscribe(
      reponse=>{
        this.getAllGenders();
        this.Clear();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }
  else
  this.alertService.showMessage('Please fill the detail', '',MessageSeverity.warn);
  }


  deleteGender(){
    this.personEndpoint.DeleteGender(this.deleteModel).subscribe(
      reponse=>{
        this.getAllGenders();
        this.deleteModel = new gender();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }

  gendertablearray:Array<gender>=[]
  genderarray:any=[]
  getAllGenders(){
    this.personEndpoint.GetGender<Array<gender>>().subscribe(
      reponse=>{
        console.log("log gender",reponse);
        this.genderarray=reponse;
        this.genderarray.forEach(element => {
          var data =new gender();
          data.User_Gender_ID=element.user_Gender_ID;
          data.User_Gender_Name=element.user_Gender_Name;
          this.gendertablearray.push(data);
        });
        this.rows = this.gendertablearray;
        
        
      }
    )

  }

  view(view){
    this.update  =true;
    this.genderModel.User_Gender_Name = view.user_Gender_Name;
    this.genderModel.User_Gender_ID = view.user_Gender_ID;
    console.log("View",view)
  }


  delete(view){
    this.deleteModel= new gender();
    this.deleteModel.User_Gender_Name = view.user_Gender_Name;
    this.deleteModel.User_Gender_ID = view.user_Gender_ID;
    
    this.deleteGender()
  }


  Clear(){
    console.log("clear data")
    this.genderModel = new gender();
    this.update  =false;

  }

}
