import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { vulnerabilitylevels } from 'src/app/models/valnerability_levels';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { PersonEndpoint2 } from 'src/app/services/masterdataservice/personService2';

@Component({
  selector: 'app-valnerability-level',
  templateUrl: './valnerability-level.component.html',
  styleUrls: ['./valnerability-level.component.scss']
})
export class ValnerabilityLevelComponent implements OnInit {

  vulnerabilityLevelModel:vulnerabilitylevels;
  deleteModel:vulnerabilitylevels;
  columns: any[] = [];
  rows: any[] = [];
  update :boolean =false;
  loadingIndicator: boolean;

  @ViewChild('indexTemplatevulnerabilityLevel', { static: true })
  indexTemplatevulnerabilityLevel: TemplateRef<any>;

  @ViewChild('actionsTemplatevulnerabilityLevel', { static: true })
  actionsTemplatevulnerabilityLevel: TemplateRef<any>;

  constructor(private personEndPoint:PersonEndpoint2,private translationService: AppTranslationService,private alertService: AlertService) {
    this.vulnerabilityLevelModel = new vulnerabilitylevels(); }

  ngOnInit(): void {
    const gT = (key: string) => this.translationService.getTranslation(key);

    this.columns = [
      { prop: 'Vulnerability_Level_ID', name: '#', width: 50, cellTemplate: this.indexTemplatevulnerabilityLevel, canAutoResize: false },
      { prop: 'Vulnerability_Level_Name', name: gT('APs.VulnerabilityLevels.list.VulnerabilityLevel_Name'), width: 320 },
      { prop: 'Vulnerability_Level_Description', name: gT('APs.VulnerabilityLevels.list.Vulnerability_Level_Description'), width: 320 },   
      { name: '', width: 250, cellTemplate: this.actionsTemplatevulnerabilityLevel, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];


    this.getAllVulnerabilityLevels();
  }

  addNewVulnerabilityLevel(){
    if(this.vulnerabilityLevelModel.Vulnerability_Level_Description!=null){
    this.personEndPoint.AddnewVulnerabilityLevel(this.vulnerabilityLevelModel).subscribe(
      reponse=>{
        this.getAllVulnerabilityLevels();
        this.Clear();
        this.alertService.showMessage('Successfully saved', '',MessageSeverity.success);
      }
    )
  }
  else
  this.alertService.showMessage('Please fill the detail', '',MessageSeverity.warn);

  }

  updateVulnerabilityLevel(){
    if(JSON.stringify(this.vulnerabilityLevelModel)!=JSON.stringify(this.originaleditvulnerabilitylevels)){
    if(this.vulnerabilityLevelModel.Vulnerability_Level_Description!=""){
    this.personEndPoint.UpdateVulnerabilityLevel(this.vulnerabilityLevelModel).subscribe(
      reponse=>{
        this.getAllVulnerabilityLevels();
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


  deleteVulnerabilityLevel(){
    this.personEndPoint.DeleteVulnerabilityLevel(this.deleteModel).subscribe(
      reponse=>{
        this.getAllVulnerabilityLevels();
        this.deleteModel = new vulnerabilitylevels();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }

  vulnerabilityLeveltablearray:Array<vulnerabilitylevels>=[]
  vulnerabilityLevelarray:any=[]
  getAllVulnerabilityLevels(){
    this.personEndPoint.GetAllVulnerabilityLevels<Array<vulnerabilitylevels>>().subscribe(
      reponse=>{
        console.log("log vulnerabilityLevels",reponse);
        this.vulnerabilityLevelarray=reponse;
        this.vulnerabilityLevelarray.forEach(element => {
          var data =new vulnerabilitylevels();
          data.Vulnerability_Level_ID=element.vulnerability_Level_ID;
          data.Vulnerability_Level_Description=element.vulnerability_Level_Description;
          data.Vulnerability_Level_Name=element.vulnerability_Level_Name;
          this.vulnerabilityLeveltablearray.push(data);
        });
        this.rows = this.vulnerabilityLeveltablearray;
        this.vulnerabilityLeveltablearray=[];
        
      }
    )

  }
  originaleditvulnerabilitylevels=new vulnerabilitylevels();
  view(view){
    this.update  =true;
    this.vulnerabilityLevelModel.Vulnerability_Level_Description = view.Vulnerability_Level_Description;
    this.vulnerabilityLevelModel.Vulnerability_Level_Name = view.Vulnerability_Level_Name;
    this.vulnerabilityLevelModel.Vulnerability_Level_ID = view.Vulnerability_Level_ID;
    console.log("View",view)
    this.originaleditvulnerabilitylevels=JSON.parse(JSON.stringify(this.vulnerabilityLevelModel));
  }


  delete(view){
    this.deleteModel= new vulnerabilitylevels();
    this.deleteModel.Vulnerability_Level_Description = view.Vulnerability_Level_Description;
    this.deleteModel.Vulnerability_Level_Name = view.Vulnerability_Level_Name;
    this.deleteModel.Vulnerability_Level_ID = view.Vulnerability_Level_ID;
    
    this.deleteVulnerabilityLevel()
  }


  Clear(){
    console.log("clear data")
    this.vulnerabilityLevelModel = new vulnerabilitylevels();
    this.update  =false;

  }

}
