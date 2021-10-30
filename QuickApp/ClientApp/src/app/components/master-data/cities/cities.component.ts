import { Component, OnChanges, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { cities } from 'src/app/models/cities';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { AddressEndpoint } from 'src/app/services/masterdataservice/addressService';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit,OnChanges {

  cityModel:cities;
  deleteModel:cities;
  columns: any[] = [];
  rows: any[] = [];
  update :boolean =false;
  loadingIndicator: boolean;

  @ViewChild('indexTemplatecity', { static: true })
  indexTemplatecity: TemplateRef<any>;

  @ViewChild('actionsTemplatecity', { static: true })
  actionsTemplatecity: TemplateRef<any>;

  constructor(private addressEndpoint:AddressEndpoint,private translationService: AppTranslationService,private alertService: AlertService) { 
    this.cityModel = new cities();
  }

  ngOnInit(): void {
    const gT = (key: string) => this.translationService.getTranslation(key);

    this.columns = [
      { prop: 'city_id', name: '#', width: 50, cellTemplate: this.indexTemplatecity, canAutoResize: false },
      { prop: 'City_Name', name: gT('APs.Cities.list.City_Name'), width: 320 }, 
      { prop: 'City_District_Name', name: gT('APs.Cities.list.City_District_Name'), width: 320 },  
      { prop: 'City_States_Name', name: gT('APs.Cities.list.City_States_Name'), width: 320 },  
      { prop: 'City_Country_Name', name: gT('APs.Cities.list.City_Country_Name'), width: 320 },    
      { name: '', width: 250, cellTemplate: this.actionsTemplatecity, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];


    this.getAllCounties();
    //this.loadgetAllStates();
    //this.loadgetAllDistricts();
  }
  ngOnChanges(){
    this.getAllCounties();
    this.loadgetAllStates(this.cityModel.City_Country_ID);
    this.loadgetAllDistricts(this.cityModel.City_Country_ID,this.cityModel.City_States_ID);
    this.loadgetAllCities(this.cityModel.City_Country_ID,this.cityModel.City_States_ID,this.cityModel.City_District_ID);


  }

  selectedCountry(data) {
    this.Clear();
console.log("selectedCountry",data);

    if (data != undefined) {
      this.cityModel.City_Country_ID = data.country_ID;

      this.loadgetAllStates(data.country_ID);

    }


  }

  selectedState(data) {
    console.log("selectedState",data);
    if (data != undefined) {
      this.cityModel.City_States_ID = data.states_ID;

    this.loadgetAllDistricts(this.cityModel.City_Country_ID,this.cityModel.City_States_ID);

    }


  }

  selectedDistrict(data) {
    console.log("selectedDistrict",data);
    if (data != undefined) {
      this.cityModel.City_District_ID = data.district_ID ;

     this.loadgetAllCities(this.cityModel.City_Country_ID,this.cityModel.City_States_ID,this.cityModel.City_District_ID);
    }


  }


  countries:any=[] 
    getAllCounties(){

      this.addressEndpoint.GetAllCountries().subscribe(

        response =>{
          console.log("country responce", response)
          this.countries=response
          
         // this.loadgetAllCities();
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

    districts:any=[] 
    loadgetAllDistricts(coutryId: number, stateId: number){

      this.addressEndpoint.GetAllDistricts(coutryId,stateId).subscribe(

        response =>{
          console.log("district response", response)
          this.districts=response
          
        }
        
      )
    
      }

    

  addNewCity(){
    if(this.cityModel.City_Country_ID!=null&&this.cityModel.City_States_ID!=null&&this.cityModel.City_District_ID!=null&&this.cityModel.City_Name!=null){
    this.addressEndpoint.AddnewCity(this.cityModel).subscribe(
      reponse=>{
        this.loadgetAllCities(this.cityModel.City_Country_ID,this.cityModel.City_States_ID,this.cityModel.City_District_ID);
        this.Clear();
        this.alertService.showMessage('Successfully saved', '',MessageSeverity.success);
      }
    )
    }
    else
    this.alertService.showMessage('Please Fill the required fields', '',MessageSeverity.warn);

  }

  updateCity(){
    if(JSON.stringify(this.cityModel)!=JSON.stringify(this.originaleditcities)){
    if(this.cityModel.City_Country_ID!=null&&this.cityModel.City_States_ID!=null&&this.cityModel.City_District_ID!=null&&this.cityModel.City_Name!=""){
    this.addressEndpoint.UpdateCity(this.cityModel).subscribe(
      reponse=>{
        this.loadgetAllCities(this.cityModel.City_Country_ID,this.cityModel.City_States_ID,this.cityModel.City_District_ID);
        this.Clear();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
    }
    else
    this.alertService.showMessage('Please Fill the required fields', '',MessageSeverity.warn);
  }
  else
  this.alertService.showMessage('Nothing to Update', '',MessageSeverity.warn);
  }


  deleteCity(){
    this.addressEndpoint.DeleteCity(this.deleteModel).subscribe(
      reponse=>{
        this.loadgetAllCities(this.cityModel.City_Country_ID,this.cityModel.City_States_ID,this.cityModel.City_District_ID);
        this.deleteModel = new cities();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }

  citytablearray:Array<cities>=[]
  cityarray:any=[]
  loadgetAllCities(countrId: number, stateId: number, districtID: number){
    this.addressEndpoint.GetAllCities<Array<cities>>(countrId,stateId,districtID).subscribe(
      reponse=>{
        console.log("log data",reponse);
        this.cityarray=reponse;
        this.cityarray.forEach(element => {
          var data=new cities();
        data.City_Country_Name=this.countries.find(x=>x.country_ID==element.city_Country_ID).country_Name;
        data.City_States_Name=this.states.find(x=>x.states_ID==element.city_States_ID).states_Name;
        data.City_District_Name=this.districts.find(x=>x.district_ID==element.city_District_ID).district_Name;
        data.City_Name=element.city_Name;
        data.City_ID=element.city_ID
        data.City_District_ID=element.city_District_ID;
        data.City_States_ID=element.city_States_ID;
        data.City_Country_ID=element.city_Country_ID;
        this.citytablearray.push(data);
        });
        this.rows = this.citytablearray;
        console.log("pushed city array",this.citytablearray);
        this.citytablearray=[];
        
      }
    )

  }
  originaleditcities=new cities();
  view(view){
    this.update  =true;
    this.cityModel.City_Name = view.City_Name;
    this.cityModel.City_District_Name = view.City_District_Name;
    this.cityModel.City_States_Name = view.City_States_Name;
    this.cityModel.City_Country_Name = view.City_Country_Name;
    this.cityModel.City_ID = view.City_ID;
    this.cityModel.City_Country_ID=view.City_Country_ID;
    this.cityModel.City_States_ID=view.City_States_ID;
    this.cityModel.City_District_ID=view.City_District_ID;
    console.log("View",view)
    this.originaleditcities=JSON.parse(JSON.stringify(this.cityModel));
  }


  delete(view){
    this.deleteModel= new cities();
    this.deleteModel.City_Name = view.City_Name;
    this.deleteModel.City_ID = view.City_ID;
    this.cityModel.City_Country_ID=view.City_Country_ID;
    this.cityModel.City_States_ID=view.City_States_ID;
    this.cityModel.City_District_ID=view.City_District_ID;
    
    this.deleteCity()
  }


  Clear(){
    console.log("clear data")
    this.cityModel = new cities();
    this.update  =false;

  }

}
