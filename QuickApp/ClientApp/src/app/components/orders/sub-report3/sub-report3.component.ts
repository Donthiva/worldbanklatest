import { Component, OnInit } from '@angular/core';
import { PersonEndpoint } from 'src/app/services/masterdataservice/personService';

@Component({
  selector: 'app-sub-report3',
  templateUrl: './sub-report3.component.html',
  styleUrls: ['./sub-report3.component.scss']
})
export class SubReport3Component implements OnInit {

  constructor(private personservice:PersonEndpoint) { }

  reportServer: string = 'http://lkcontsaranat01//ReportServer';
  reportUrl: string = 'Report Project1/SpecificPopMainRep';
  showParameters: string = "false";
  parameters: any = {
  };
  language: string = "en-us";
  width: number = 500;
  height: number = 500;
  toolbar: string = "true";
  reportView: boolean = false;
  params: any = {};

  selectedPeriodId:number = 0;


  ShowNandPofBusinessPersonUndergoneTrainig:boolean = false;
  ShowNandPofBusinessPersonDiversifiedBusiness:boolean =false;
  ShowParticularCategoryBusinessPersonGreen:boolean =false;
  ShowParticularCategoryBusinessPersonYellow: boolean = false;
 
  ngOnInit(): void {
    this.LoadMonitorPeriods()
  }

  MonitorPeriod: any = [];
  LoadMonitorPeriods() {

    this.personservice.GetMonitorPeriod().subscribe(
      reponse => {
        console.log("LoadMonitorPeriods", reponse);
        this.MonitorPeriod = reponse as any;
      }
    )

  }

  firstQuestion(event){
    this.reportView = false;
    this.ShowNandPofBusinessPersonUndergoneTrainig = event.target.checked ? true : false;
  
  }

  secondQuestion(event){
    this.reportView = false;
    this.ShowNandPofBusinessPersonDiversifiedBusiness = event.target.checked ? true : false;
  }

  thirdQuestion(event){
    this.reportView = false;
    this.ShowParticularCategoryBusinessPersonGreen  = event.target.checked ? true : false;
  
  }

  fourthQuestion(event){
    this.reportView = false;
    this.ShowParticularCategoryBusinessPersonYellow  = event.target.checked ? true : false;
  
  }

  fifthQuestion(event){
    this.reportView = false;
 
  }

  sixthQuestion(event){
    this.reportView = false;

  }

  seventhQuestion(event){
    this.reportView = false;
   
  }

  eightQuestion(event){
    this.reportView = false;

  }

  ninthQuestion(event){
    this.reportView = false;
  
  }

  tenthQuestion(event){
    this.reportView = false;

  }

  selectedPeriod(event) {
    this.reportView = false;
    this.selectedPeriodId = event.id

  }


  Search() {
    
    this.reportUrl = 'Report Project1/SpecificPopMainRep';
    this.params = {
      "ShowNandPofBusinessPersonUndergoneTrainig": this.ShowNandPofBusinessPersonUndergoneTrainig ,
      "BusinessPersonUndergoneTrainigPeriod" :this.selectedPeriodId,
      "ShowNandPofBusinessPersonDiversifiedBusiness":this.ShowNandPofBusinessPersonDiversifiedBusiness,
      "ShowParticularCategoryBusinessPersonGreen" : this.ShowParticularCategoryBusinessPersonGreen
    }

    this.parameters = this.params;
    this.reportView = true;
  }

}
