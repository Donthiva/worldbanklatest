import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { employmentstatuses } from 'src/app/models/employment_statuses';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { EmploymentEndpoint } from 'src/app/services/masterdataservice/employmentService';

@Component({
  selector: 'app-employement-status',
  templateUrl: './employement-status.component.html',
  styleUrls: ['./employement-status.component.scss']
})
export class EmployementStatusComponent implements OnInit {

  employmentstatusModel:employmentstatuses;
  deleteModel:employmentstatuses;
  columns: any[] = [];
  rows: any[] = [];
  update :boolean =false;
  loadingIndicator: boolean;

  
  @ViewChild('indexTemplateemploymentStatus', { static: true })
  indexTemplateemploymentStatus: TemplateRef<any>;

  @ViewChild('actionsTemplateemploymentStatus', { static: true })
  actionsTemplateemploymentStatus: TemplateRef<any>;

  constructor(private employmentEndpoint:EmploymentEndpoint,private translationService: AppTranslationService,private alertService: AlertService) {
    this.employmentstatusModel = new employmentstatuses();
   }

  ngOnInit(): void {

    const gT = (key: string) => this.translationService.getTranslation(key);

    this.columns = [
      { prop: 'Employment_Status_ID', name: '#', width: 50, cellTemplate: this.indexTemplateemploymentStatus, canAutoResize: false },
      { prop: 'Status', name: gT('APs.EmploymentStatuses.list.Status'), width: 320 },
      { prop: 'Status_Description', name: gT('APs.EmploymentStatuses.list.Status_Description'), width: 320 },
      { name: '', width: 250, cellTemplate: this.actionsTemplateemploymentStatus, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];

    this.getAllEmploymentStatuses();
  }

  addNewemploymentStatus(){
    if(this.employmentstatusModel.Status!=null){
    this.employmentEndpoint.AddnewEmploymentStatus(this.employmentstatusModel).subscribe(
      reponse=>{
        this.getAllEmploymentStatuses();
        this.Clear();
        this.alertService.showMessage('Successfully saved', '',MessageSeverity.success);
      }
    )
  }
  else
  this.alertService.showMessage('Please fill the detail', '',MessageSeverity.warn);

  }

  updateEmploymentStatus(){
    if(JSON.stringify(this.employmentstatusModel)!=JSON.stringify(this.originaleditemploymentstatuses)){
    if(this.employmentstatusModel.Status!=""){
    this.employmentEndpoint.UpdateEmploymentStatus(this.employmentstatusModel).subscribe(
      reponse=>{
        this.getAllEmploymentStatuses();
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


  deleteEmploymentStatuses(){
    this.employmentEndpoint.DeleteEmploymentStatus(this.deleteModel).subscribe(
      reponse=>{
        this.getAllEmploymentStatuses();
        this.deleteModel = new employmentstatuses();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }
  employmentstatustablearray:Array<employmentstatuses>=[]
  employmentstatusarray:any=[]
  getAllEmploymentStatuses(){
    this.employmentEndpoint.GetAllEmploymentStatuses<Array<employmentstatuses>>().subscribe(
      reponse=>{
        console.log("log data",reponse);
        this.employmentstatusarray=reponse;
        this.employmentstatusarray.forEach(element => {
          var data=new employmentstatuses();
          data.Employment_Status_ID=element.employment_Status_ID;
          data.Status=element.status;
          data.Status_Description=element.status_Description;
          this.employmentstatustablearray.push(data);
        });

        this.rows = this.employmentstatustablearray;
        this.employmentstatustablearray=[];
        
      }
    )

  }
  originaleditemploymentstatuses=new employmentstatuses();
  view(view){
    this.update  =true;
    this.employmentstatusModel.Employment_Status_ID = view.Employment_Status_ID;
    this.employmentstatusModel.Status = view.Status;
    this.employmentstatusModel.Status_Description = view.Status_Description;
    this.originaleditemploymentstatuses=JSON.parse(JSON.stringify(this.employmentstatusModel));
   
    console.log("View",view)
  }


  delete(view){
    this.deleteModel= new employmentstatuses();

    this.deleteModel.Employment_Status_ID = view.Employment_Status_ID;
    this.deleteModel.Status = view.Status;
    this.deleteModel.Status_Description = view.Status_Description;
    this.deleteEmploymentStatuses()
  }


  Clear(){
    console.log("clear data")
    this.employmentstatusModel = new employmentstatuses();
    this.update  =false;

  }

}
