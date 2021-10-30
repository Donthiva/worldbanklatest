import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { countries } from 'src/app/models/countries';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { AddressEndpoint } from 'src/app/services/masterdataservice/addressService';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countryModel:countries;
  deleteModel:countries;
  columns: any[] = [];
  rows: any[] = [];
  update :boolean =false;
  loadingIndicator: boolean;

  @ViewChild('indexTemplatecountry', { static: true })
  indexTemplatecountry: TemplateRef<any>;

  @ViewChild('actionsTemplatecountry', { static: true })
  actionsTemplatecountry: TemplateRef<any>;

  constructor(private addressEndpoint:AddressEndpoint,private translationService: AppTranslationService,private alertService: AlertService) {
    this.countryModel = new countries();
   }

  ngOnInit(): void {

    const gT = (key: string) => this.translationService.getTranslation(key);

    this.columns = [
      { prop: 'Country_ID', name: '#', width: 50, cellTemplate: this.indexTemplatecountry, canAutoResize: false },
      { prop: 'Country_Name', name: gT('APs.Countries.list.Country_Name'), width: 320 },   
      { name: '', width: 250, cellTemplate: this.actionsTemplatecountry, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];


    this.getAllCountries();
  }

  
  addNewCountry(){
    if(this.countryModel.Country_Name!=null){
    this.addressEndpoint.AddnewCountry(this.countryModel).subscribe(
      reponse=>{
        this.getAllCountries();
        this.Clear();
        this.alertService.showMessage('Successfully saved', '',MessageSeverity.success);
      }
    )
    }
    else
    this.alertService.showMessage('Please Add the Country Name', '',MessageSeverity.warn);

  }
  editedCountrymodel =new countries();
  updateCountry(){    
    if(JSON.stringify(this.countryModel)!=JSON.stringify(this.originaleditcountry)){
    if(this.countryModel.Country_Name!=""){
    this.addressEndpoint.UpdateCountry(this.countryModel).subscribe(
      reponse=>{
        this.getAllCountries();
        this.Clear();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
    }
    else
    this.alertService.showMessage('Please Add the Country Name', '',MessageSeverity.warn);
  }
  else
    this.alertService.showMessage('Nothing to Update', '',MessageSeverity.warn);

  }


  deleteCountry(){
    this.addressEndpoint.DeleteCountry(this.deleteModel).subscribe(
      reponse=>{
        this.getAllCountries();
        this.deleteModel = new countries();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }

  countrytablearray:Array<countries>=[]
  countryarray:any=[]
  getAllCountries(){
    this.addressEndpoint.GetAllCountries<Array<countries>>().subscribe(
      reponse=>{
        console.log("log countries",reponse);
        this.countryarray=reponse;
        this.countryarray.forEach(element => {
          var data =new countries();
          data.Country_ID=element.country_ID;
          data.Country_Name=element.country_Name;
          this.countrytablearray.push(data);
        });
        this.rows = this.countrytablearray;
        this.countrytablearray=[];
        
        
      }
    )

  }
  originaleditcountry =new countries();
  view(view){
    this.update  =true;
    this.countryModel.Country_Name = view.Country_Name;
    this.countryModel.Country_ID = view.Country_ID;
    this.originaleditcountry=JSON.parse(JSON.stringify(this.countryModel));
    console.log("original",this.originaleditcountry);
    
    console.log("View",view)
  }


  delete(view){
    this.deleteModel= new countries();
    this.deleteModel.Country_Name = view.Country_Name;
    this.deleteModel.Country_ID = view.Country_ID;
    
    this.deleteCountry()
  }


  Clear(){
    console.log("clear data")
    this.countryModel = new countries();
    this.update  =false;

  }

}
