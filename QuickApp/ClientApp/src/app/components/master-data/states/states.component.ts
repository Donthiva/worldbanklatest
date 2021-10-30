import { Component, OnChanges, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { states } from 'src/app/models/states';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { AddressEndpoint } from 'src/app/services/masterdataservice/addressService';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit,OnChanges {


  stateModel:states;
  deleteModel:states;
  columns: any[] = [];
  rows: any[] = [];
  update :boolean =false;
  loadingIndicator: boolean;

  @ViewChild('indexTemplatestate', { static: true })
  indexTemplatestate: TemplateRef<any>;

  @ViewChild('actionsTemplatestate', { static: true })
  actionsTemplatestate: TemplateRef<any>;

  constructor(private addressEndpoint:AddressEndpoint,private translationService: AppTranslationService,private alertService: AlertService) {
    this.stateModel = new states();
  }
    ngOnInit(): void {

      const gT = (key: string) => this.translationService.getTranslation(key);
  
      this.columns = [
        { prop: 'State_ID', name: '#', width: 50, cellTemplate: this.indexTemplatestate, canAutoResize: false },
        { prop: 'States_Name', name: gT('APs.States.list.States_Name'), width: 320 },
        { prop: 'Country_Name', name: gT('APs.States.list.Country_Name'), width: 320 },    
        { name: '', width: 250, cellTemplate: this.actionsTemplatestate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
      ];
  
  
      
      this.getAllCounties();
      
    }
    ngOnChanges(){
      this.getAllCounties();
      this.loadgetAllStates(this.stateModel.States_Country_ID);
    }
    countries:any=[] 
    getAllCounties(){

      this.addressEndpoint.GetAllCountries().subscribe(

        response =>{
          console.log("country response", response)
          this.countries=response
         // this.loadgetAllStates();
        }
        
      )
    
    }
    
    addNewState(){
      this.stateModel.districtId=0;
      if(this.stateModel.States_Country_ID!=null&&this.stateModel.States_Name!=null){
      this.addressEndpoint.AddnewState(this.stateModel).subscribe(
        reponse=>{
          this.loadgetAllStates(this.stateModel.States_Country_ID);
          this.Clear();
          this.alertService.showMessage('Successfully saved', '',MessageSeverity.success);
        }
      )
      }
      else
      this.alertService.showMessage('Please Fill the all the fields', '',MessageSeverity.warn);
  
    }
  
    updateState(){
      console.log("update State",this.stateModel);
      if(JSON.stringify(this.stateModel)!=JSON.stringify(this.originaleditstate)){
      if(this.stateModel.States_Country_ID!=null&&this.stateModel.States_Name!=""){
      this.addressEndpoint.UpdateState(this.stateModel).subscribe(
        reponse=>{
          this.loadgetAllStates(this.stateModel.States_Country_ID);
          this.Clear();
          this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
        }
      )
      }
      else
      this.alertService.showMessage('Please Fill the all the fields', '',MessageSeverity.warn);
    }
    else
      this.alertService.showMessage('Nothing to Update', '',MessageSeverity.warn);

    }
  
  
    deleteState(){
      console.log("delete state",this.deleteModel);
      
      this.addressEndpoint.DeleteState(this.deleteModel).subscribe(
        reponse=>{
          this.loadgetAllStates(this.deleteModel.States_Country_ID);
          this.deleteModel = new states();
          this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
        }
      )
    }
    statetablearray:Array<states>=[]
     statearray:any=[]
    loadgetAllStates(countryId: number){

      this.addressEndpoint.GetAllStates<Array<states>>(countryId).subscribe(
        reponse=>{
          console.log("log data",reponse);
          this.statearray=reponse;
          this.statearray.forEach(element => {
            var data =new states();
            data.Country_Name=this.countries.find(x=>x.country_ID==element.states_Country_ID).country_Name;
            data.States_ID=element.states_ID;
            data.States_Name=element.states_Name;
            data.States_Country_ID=element.states_Country_ID;
            data.districtId=element.districtId;
            this.statetablearray.push(data);
          });
          this.rows = this.statetablearray;
          console.log("test array",this.statetablearray);
          this.statetablearray=[];
        }
      )
  
    }

    selectedCountry(data) {
      console.log("selected data",data);
      if (data != undefined) {
        this.stateModel.States_Country_ID = data.country_ID;
  
        this.loadgetAllStates(data.country_ID);
  
      }
  
  
    }
    originaleditstate=new states();
    view(view){
      console.log("View",view)
      this.update  =true;
      this.stateModel.States_Name = view.States_Name;
      this.stateModel.States_ID = view.States_ID;
      this.stateModel.States_Country_ID=view.States_Country_ID;
      this.originaleditstate=JSON.parse(JSON.stringify(this.stateModel));
      
    }
  
  
    delete(view){
      console.log("delete view",view);
      
      this.deleteModel= new states();
      this.deleteModel.States_Name = view.States_Name;
      this.deleteModel.States_ID = view.States_ID;
      this.deleteModel.States_Country_ID = view.States_Country_ID;
      this.deleteModel.districtId = view.districtId
      this.deleteState()
    }
  
  
    Clear(){
      console.log("clear data")
      this.stateModel = new states();
      this.update  =false;
  
    }
    
    

      
    

}
