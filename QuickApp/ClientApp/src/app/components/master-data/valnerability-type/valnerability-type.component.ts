import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { vulnerabilitytypes } from 'src/app/models/valnerability_types';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { PersonEndpoint2 } from 'src/app/services/masterdataservice/personService2';

@Component({
  selector: 'app-valnerability-type',
  templateUrl: './valnerability-type.component.html',
  styleUrls: ['./valnerability-type.component.scss']
})
export class ValnerabilityTypeComponent implements OnInit {

  vulnerabilityTypeModel:vulnerabilitytypes;
  deleteModel:vulnerabilitytypes;
  columns: any[] = [];
  rows: any[] = [];
  update :boolean =false;
  loadingIndicator: boolean;

  @ViewChild('indexTemplatevulnerabilityType', { static: true })
  indexTemplatevulnerabilityType: TemplateRef<any>;

  @ViewChild('actionsTemplatevulnerabilityType', { static: true })
  actionsTemplatevulnerabilityType: TemplateRef<any>;

  constructor(private personEndPoint:PersonEndpoint2,private translationService: AppTranslationService,private alertService: AlertService) {
    this.vulnerabilityTypeModel = new vulnerabilitytypes();}

  ngOnInit(): void {
    const gT = (key: string) => this.translationService.getTranslation(key);

    this.columns = [
      { prop: 'Vulnerability_Type_ID', name: '#', width: 50, cellTemplate: this.indexTemplatevulnerabilityType, canAutoResize: false },
      { prop: 'Vulnerability_Type_Name', name: gT('APs.VulnerabilityTypes.list.VulnerabilityType_Name'), width: 320 },  
      { prop: 'Vulnerability_Type_Description', name: gT('APs.VulnerabilityTypes.list.Vulnerability_Type_Description'), width: 320 },  
      { name: '', width: 250, cellTemplate: this.actionsTemplatevulnerabilityType, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];


    this.getAllVulnerabilityTypes();
  }

  addNewVulnerabilityType(){
    if(this.vulnerabilityTypeModel.Vulnerability_Type_Description!=null){
    this.personEndPoint.AddnewVulnerabilityType(this.vulnerabilityTypeModel).subscribe(
      reponse=>{
        this.getAllVulnerabilityTypes();
        this.Clear();
        this.alertService.showMessage('Successfully saved', '',MessageSeverity.success);
      }
    )
  }
  else
  this.alertService.showMessage('Please fill the detail', '',MessageSeverity.warn);

  }

  updateVulnerabilityType(){
    if(JSON.stringify(this.vulnerabilityTypeModel)!=JSON.stringify(this.originaleditvulnerabilitytypes)){
    if(this.vulnerabilityTypeModel.Vulnerability_Type_Description!=""){
    this.personEndPoint.UpdateVulnerabilityType(this.vulnerabilityTypeModel).subscribe(
      reponse=>{
        this.getAllVulnerabilityTypes();
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


  deleteVulnerabilityType(){
    this.personEndPoint.DeleteVulnerabilityType(this.deleteModel).subscribe(
      reponse=>{
        this.getAllVulnerabilityTypes();
        this.deleteModel = new vulnerabilitytypes();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }

  vulnerabilityTypetablearray:Array<vulnerabilitytypes>=[]
  vulnerabilityTypearray:any=[]
  getAllVulnerabilityTypes(){
    this.personEndPoint.GetAllVulnerabilityTypes<Array<vulnerabilitytypes>>().subscribe(
      reponse=>{
        console.log("log vulnerabilityTypes",reponse);
        this.vulnerabilityTypearray=reponse;
        this.vulnerabilityTypearray.forEach(element => {
          var data =new vulnerabilitytypes();
          data.Vulnerability_Type_ID=element.vulnerability_Type_ID;
          data.Vulnerability_Type_Description=element.vulnerability_Type_Description;
          data.Vulnerability_Type_Name=element.vulnerability_Type_Name;
          this.vulnerabilityTypetablearray.push(data);
        });
        this.rows = this.vulnerabilityTypetablearray;
        this.vulnerabilityTypetablearray=[];
        
        
      }
    )

  }
  originaleditvulnerabilitytypes=new vulnerabilitytypes();
  view(view){
    this.update  =true;
    this.vulnerabilityTypeModel.Vulnerability_Type_Description = view.Vulnerability_Type_Description;
    this.vulnerabilityTypeModel.Vulnerability_Type_ID = view.Vulnerability_Type_ID;
    this.vulnerabilityTypeModel.Vulnerability_Type_Name = view.Vulnerability_Type_Name;
    console.log("View",view)
    this.originaleditvulnerabilitytypes=JSON.parse(JSON.stringify(this.vulnerabilityTypeModel));
  }


  delete(view){
    this.deleteModel= new vulnerabilitytypes();
    this.deleteModel.Vulnerability_Type_Description = view.Vulnerability_Type_Description;
    this.deleteModel.Vulnerability_Type_ID = view.Vulnerability_Type_ID;
    this.deleteModel.Vulnerability_Type_Name = view.Vulnerability_Type_Name;
    
    this.deleteVulnerabilityType()
  }


  Clear(){
    console.log("clear data")
    this.vulnerabilityTypeModel = new vulnerabilitytypes();
    this.update  =false;

  }

}
