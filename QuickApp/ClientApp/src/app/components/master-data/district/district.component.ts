import { Component, OnChanges, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { districts } from 'src/app/models/districts';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { AddressEndpoint } from 'src/app/services/masterdataservice/addressService';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit,OnChanges {
  
  districtModel:districts;
  deleteModel:districts;
  columns: any[] = [];
  rows: any[] = [];
  update :boolean =false;
  loadingIndicator: boolean;

  @ViewChild('indexTemplatedistrict', { static: true })
  indexTemplatedistrict: TemplateRef<any>;

  @ViewChild('actionsTemplatedistrict', { static: true })
  actionsTemplatedistrict: TemplateRef<any>;

  constructor(private addressEndpoint:AddressEndpoint,private translationService: AppTranslationService,private alertService: AlertService) { 
    this.districtModel = new districts();
  }

  ngOnInit(): void {
    const gT = (key: string) => this.translationService.getTranslation(key);
    
      this.columns = [
        { prop: 'district_id', name: '#', width: 50, cellTemplate: this.indexTemplatedistrict, canAutoResize: false },
        { prop: 'District_Name', name: gT('APs.Districts.list.District_Name'), width: 320 }, 
        { prop: 'State_Name', name: gT('APs.Districts.list.State_Name'), width: 320 },   
        { prop: 'Country_Name', name: gT('APs.Districts.list.Country_Name'), width: 320 },  
        { name: '', width: 250, cellTemplate: this.actionsTemplatedistrict, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
      ];
  
      //this.loadgetAllStates();
      this.getAllCounties();

      
  }
  ngOnChanges(){

    this.getAllCounties();
    this.loadgetAllStates(this.districtModel.District_Country_ID);
    this.loadgetAllDistricts(this.districtModel.District_Country_ID,this.districtModel.District_States_ID);


  }

  selectedCountry(data) {
    this.Clear();
    console.log("country selcted",data);

    if (data != undefined) {
      this.districtModel.District_Country_ID = data.country_ID;

      this.loadgetAllStates(data.country_ID);

    }


  }

  selectedState(data) {
console.log("selcted state",data);

    if (data != undefined) {
      this.districtModel.District_States_ID = data.states_ID;

     this.loadgetAllDistricts(this.districtModel.District_Country_ID, data.states_ID);

    }


  }

  countries:any=[] 
    getAllCounties(){

      this.addressEndpoint.GetAllCountries().subscribe(

        response =>{
          console.log("country responce", response)
          this.countries=response
          
         // this.getAllDistricts();
        }
        
      )
    
    }

    states:any=[] 
    loadgetAllStates(countryId: number){

      this.addressEndpoint.GetAllStates(countryId).subscribe(

        response =>{
          console.log("state response", response)
          this.states=response
          
        }
        
      )
    
    }

  addNewDistrict(){
    if(this.districtModel.District_Country_ID!=null&&this.districtModel.District_States_ID!=null&&this.districtModel.District_Name!=null){
      console.log("add district",this.districtModel);
      
    this.addressEndpoint.AddnewDistrict(this.districtModel).subscribe(
      reponse=>{
        this.loadgetAllDistricts(this.districtModel.District_Country_ID,this.districtModel.District_States_ID);
        this.Clear();
        this.alertService.showMessage('Successfully saved', '',MessageSeverity.success);
      }
    )
    }
    else
    this.alertService.showMessage('Please Fill the required Fields', '',MessageSeverity.warn);

  }

  updateDistrict(){
    if(JSON.stringify(this.districtModel)!=JSON.stringify(this.originaleditdistrict)){
    if(this.districtModel.District_Country_ID!=null&&this.districtModel.District_States_ID!=null&&this.districtModel.District_Name!=""){
    this.addressEndpoint.UpdateDistrict(this.districtModel).subscribe(
      reponse=>{
        this.loadgetAllDistricts(this.districtModel.District_Country_ID,this.districtModel.District_States_ID);
        this.Clear();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
    }
    else
    this.alertService.showMessage('Please Fill the required Fields', '',MessageSeverity.warn);
  }
  else
    this.alertService.showMessage('Nothing to Update', '',MessageSeverity.warn);

  }


  deleteDistrict(){
    this.addressEndpoint.DeleteDistrict(this.deleteModel).subscribe(
      reponse=>{
        this.loadgetAllDistricts(this.deleteModel.District_Country_ID,this.deleteModel.District_States_ID);
        this.deleteModel = new districts();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }

  districttablearray:Array<districts>=[]
  districtarray:any=[]
  loadgetAllDistricts(coutryId: number, stateId: number){
    console.log("ids",coutryId,stateId);
    
    this.addressEndpoint.GetAllDistricts<Array<districts>>(coutryId,stateId).subscribe(
      reponse=>{
        console.log("log data",reponse);
          this.districtarray=reponse;
          this.districtarray.forEach(element => {
            var data =new districts();
            data.Country_Name=this.countries.find(x=>x.country_ID==element.district_Country_ID).country_Name;
            data.State_Name=this.states.find(x=>x.states_ID==element.district_States_ID).states_Name;
            data.District_Name=element.district_Name;
            data.District_ID=element.district_ID;
            data.District_Country_ID=element.district_Country_ID;
            data.District_States_ID=element.district_States_ID;
            this.districttablearray.push(data);
          });
          this.rows = this.districttablearray;
          console.log("test array",this.districttablearray);
          this.districttablearray=[];
        
      }
    )

  }
  originaleditdistrict=new districts();
  view(view){
    this.update  =true;
    this.districtModel.District_Name = view.District_Name;
    this.districtModel.District_ID = view.District_ID;
    this.districtModel.District_States_ID = view.District_States_ID;
    this.districtModel.District_Country_ID = view.District_Country_ID;
    console.log("View",view)
    this.originaleditdistrict=JSON.parse(JSON.stringify(this.districtModel));
  }


  delete(view){
    console.log("delete district",view);
    this.deleteModel= new districts();
    this.deleteModel.District_Country_ID=view.District_Country_ID;
    this.deleteModel.District_States_ID=view.District_States_ID;
    this.deleteModel.District_Name = view.District_Name;
    this.deleteModel.District_ID = view.District_ID;
    
    this.deleteDistrict()
  }


  Clear(){
    console.log("clear data")
    this.districtModel = new districts();
    this.update  =false;

  }

  

}
