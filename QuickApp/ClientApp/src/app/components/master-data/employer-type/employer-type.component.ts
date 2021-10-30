import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { employertypes } from 'src/app/models/employer_types';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { EmploymentEndpoint } from 'src/app/services/masterdataservice/employmentService';

@Component({
  selector: 'app-employer-type',
  templateUrl: './employer-type.component.html',
  styleUrls: ['./employer-type.component.scss']
})
export class EmployerTypeComponent implements OnInit {

  employertypeModel:employertypes;
  deleteModel:employertypes;
  columns: any[] = [];
  rows: any[] = [];
  update :boolean =false;
  loadingIndicator: boolean;

  @ViewChild('indexTemplateemployertype', { static: true })
  indexTemplateemployertype: TemplateRef<any>;

  @ViewChild('actionsTemplateemployertype', { static: true })
  actionsTemplateemployertype: TemplateRef<any>;

  constructor(private employmentEndpoint:EmploymentEndpoint,private translationService: AppTranslationService,private alertService: AlertService) {
    this.employertypeModel = new employertypes(); }

  ngOnInit(): void {

    const gT = (key: string) => this.translationService.getTranslation(key);

    this.columns = [
      { prop: 'Employer_Type_ID', name: '#', width: 50, cellTemplate: this.indexTemplateemployertype, canAutoResize: false },
      { prop: 'Employer_Type_Name', name: gT('APs.EmployerTypes.list.Employer_Type_Name'), width: 320 }, 
      { prop: 'Employer_Type_Description', name: gT('APs.EmployerTypes.list.EmployerType_Des'), width: 320 },   
      { name: '', width: 250, cellTemplate: this.actionsTemplateemployertype, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];


    this.getAllEmployerTypes();
    
  }

  addNewEmployerType(){
    if(this.employertypeModel.Employer_Type_Description!=null){
    console.log("model test",this.employertypeModel)
    this.employmentEndpoint.AddnewEmployerType(this.employertypeModel).subscribe(
      reponse=>{
        this.getAllEmployerTypes();
        this.Clear();
        this.alertService.showMessage('Successfully saved', '',MessageSeverity.success);
      }
    )
    }
    else
    this.alertService.showMessage('Please fill the detail', '',MessageSeverity.warn);

  }

  updateEmployerType(){
    if(JSON.stringify(this.employertypeModel)!=JSON.stringify(this.originaleditemployertypes)){
    if(this.employertypeModel.Employer_Type_Description!=""){
    this.employmentEndpoint.UpdateEmployerType(this.employertypeModel).subscribe(
      reponse=>{
        this.getAllEmployerTypes();
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


  deleteEmployerType(){
    this.employmentEndpoint.DeleteEmployerType(this.deleteModel).subscribe(
      reponse=>{
        this.getAllEmployerTypes();
        this.deleteModel = new employertypes();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }

  employertypetablearray:Array<employertypes>=[]
  employertypearray:any=[]
  getAllEmployerTypes(){
    this.employmentEndpoint.GetAllEmployerTypes<Array<employertypes>>().subscribe(
      reponse=>{
        console.log("log employertypes",reponse);
        this.employertypearray=reponse;
        this.employertypearray.forEach(element => {
          var data =new employertypes();
          data.Employer_Type_ID=element.employer_Type_ID;
          data.Employer_Type_Description=element.employer_Type_Description;
          data.Employer_Type_Name=element.employer_Type_Name;
          this.employertypetablearray.push(data);
        });
        this.rows = this.employertypetablearray;
        this.employertypetablearray=[];
        
        
      }
    )

  }
  originaleditemployertypes=new employertypes();
  view(view){
    this.update  =true;
    this.employertypeModel.Employer_Type_Description = view.Employer_Type_Description;
    this.employertypeModel.Employer_Type_Name = view.Employer_Type_Name;
    this.employertypeModel.Employer_Type_ID = view.Employer_Type_ID;
    console.log("View",view)
    this.originaleditemployertypes=JSON.parse(JSON.stringify(this.employertypeModel));
  }


  delete(view){
    this.deleteModel= new employertypes();
    this.deleteModel.Employer_Type_Description = view.Employer_Type_Description;
    this.deleteModel.Employer_Type_Name = view.Employer_Type_Name;
    this.deleteModel.Employer_Type_ID = view.Employer_Type_ID;
    
    this.deleteEmployerType()
  }


  Clear(){
    console.log("clear data")
    this.employertypeModel = new employertypes();
    this.update  =false;

  }

}
