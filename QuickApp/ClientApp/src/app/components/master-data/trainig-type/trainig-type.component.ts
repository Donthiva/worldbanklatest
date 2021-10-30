import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { trainingtypes } from 'src/app/models/training_types';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { PersonEndpoint2 } from 'src/app/services/masterdataservice/personService2';

@Component({
  selector: 'app-trainig-type',
  templateUrl: './trainig-type.component.html',
  styleUrls: ['./trainig-type.component.scss']
})
export class TrainigTypeComponent implements OnInit {

  trainingTypeModel:trainingtypes;
  deleteModel:trainingtypes;
  columns: any[] = [];
  rows: any[] = [];
  update :boolean =false;
  loadingIndicator: boolean;

  @ViewChild('indexTemplatetrainingType', { static: true })
  indexTemplatetrainingType: TemplateRef<any>;

  @ViewChild('actionsTemplatetrainingType', { static: true })
  actionsTemplatetrainingType: TemplateRef<any>;

  constructor(private personEndPoint:PersonEndpoint2,private translationService: AppTranslationService,private alertService: AlertService) {
    this.trainingTypeModel = new trainingtypes(); }

  ngOnInit(): void {
    const gT = (key: string) => this.translationService.getTranslation(key);

    this.columns = [
      { prop: 'Training_Type_ID', name: '#', width: 50, cellTemplate: this.indexTemplatetrainingType, canAutoResize: false },
      { prop: 'Training_Type_Name', name: gT('APs.TrainingTypes.list.TrainingType_Name'), width: 320 },
      { prop: 'Training_Type_Description', name: gT('APs.TrainingTypes.list.TrainingType_Description'), width: 320 },   
      { name: '', width: 250, cellTemplate: this.actionsTemplatetrainingType, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];


    this.getAllTrainingTypes();
  }

  addNewTrainingType(){
    if(this.trainingTypeModel.Training_Type_Description!=null){
    this.personEndPoint.AddnewTrainingType(this.trainingTypeModel).subscribe(
      reponse=>{
        this.getAllTrainingTypes();
        this.Clear();
        this.alertService.showMessage('Successfully saved', '',MessageSeverity.success);
      }
    )
  }
  else
  this.alertService.showMessage('Please fill the detail', '',MessageSeverity.warn);

  }

  updateTrainingType(){
    if(JSON.stringify(this.trainingTypeModel)!=JSON.stringify(this.originaledittrainingtypes)){
    if(this.trainingTypeModel.Training_Type_Description!=""){
    this.personEndPoint.UpdateTrainingType(this.trainingTypeModel).subscribe(
      reponse=>{
        this.getAllTrainingTypes();
        this.Clear();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }
  else
  this.alertService.showMessage('Please fill the detail', '',MessageSeverity.warn);
  }
  else
  this.alertService.showMessage('Nothing to update', '',MessageSeverity.warn);
}

  deleteTrainingType(){
    this.personEndPoint.DeleteTrainingType(this.deleteModel).subscribe(
      reponse=>{
        this.getAllTrainingTypes();
        this.deleteModel = new trainingtypes();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }

  trainingTypetablearray:Array<trainingtypes>=[]
  trainingTypearray:any=[]
  getAllTrainingTypes(){
    this.personEndPoint.GetAllTrainingTypes<Array<trainingtypes>>().subscribe(
      reponse=>{
        console.log("log trainingTypes",reponse);
        this.trainingTypearray=reponse;
        this.trainingTypearray.forEach(element => {
          var data =new trainingtypes();
          data.Training_Type_ID=element.training_Type_ID;
          data.Training_Type_Description=element.training_Type_Description;
          data.Training_Type_Name=element.training_Type_Name;
          this.trainingTypetablearray.push(data);
        });
        this.rows = this.trainingTypetablearray;
        this.trainingTypetablearray=[];
        
        
      }
    )

  }
  originaledittrainingtypes=new trainingtypes();
  view(view){
    this.update  =true;
    this.trainingTypeModel.Training_Type_Description = view.Training_Type_Description;
    this.trainingTypeModel.Training_Type_Name = view.Training_Type_Name;
    this.trainingTypeModel.Training_Type_ID = view.Training_Type_ID;
    console.log("View",view)
    this.originaledittrainingtypes=JSON.parse(JSON.stringify(this.trainingTypeModel));
  }


  delete(view){
    this.deleteModel= new trainingtypes();
    this.deleteModel.Training_Type_Description = view.Training_Type_Description;
    this.deleteModel.Training_Type_Name = view.Training_Type_Name;
    this.deleteModel.Training_Type_ID = view.Training_Type_ID;
    
    this.deleteTrainingType()
  }


  Clear(){
    console.log("clear data")
    this.trainingTypeModel = new trainingtypes();
    this.update  =false;

  }

}
