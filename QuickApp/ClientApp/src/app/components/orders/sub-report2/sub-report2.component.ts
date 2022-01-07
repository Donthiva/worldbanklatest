import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-report2',
  templateUrl: './sub-report2.component.html',
  styleUrls: ['./sub-report2.component.scss']
})
export class SubReport2Component implements OnInit {

  constructor() { }


  reportServer: string = 'http://lkcontsaranat01//ReportServer';
  reportUrl: string = 'Report Project1/TotalPopMainRep';
  showParameters: string = "false";
  parameters: any = {
  };
  language: string = "en-us";
  width: number = 500;
  height: number = 500;
  toolbar: string = "true";
  reportView: boolean = false;
  params: any = {};


  ShowNandPofAPsbelongtoeachcategory:boolean = false;
  ShowNandPofAPsbelongtoeachGender:boolean = false;
  ShowNandPofAPsbelongtoeachGenderGroupBy:boolean = false;
  ShowNandPVulnerableofAllAps:boolean = false;
  NandPVulnerableofAllAps:boolean = false;
  APUndergonetoaTraining:boolean = false;
  CompensationAPCategorization:boolean = false;
  ShowCompensationAPCategorizationHigh:boolean = false;
  ShowCompensationAPCategorizationMedium:boolean = false;
  ShowCompensationAPCategorizationLow:boolean = false;
  ShowCompensationAPCategorizationDisabilityGrant:boolean = false;
  
  ngOnInit(): void {
  }

  firstQuestion(event){
    this.reportView = false;
    this.ShowNandPofAPsbelongtoeachcategory = event.target.checked ? true : false;
  
  }

  secondQuestion(event){
    this.reportView = false;
    this.ShowNandPofAPsbelongtoeachGender = event.target.checked ?  true : false;
    
  }

  thirdQuestion(event){
    this.reportView = false;
    this.ShowNandPofAPsbelongtoeachGenderGroupBy = event.target.checked ? true : false;
  }

  fourthQuestion(event){
    this.reportView = false;
    this.ShowNandPVulnerableofAllAps = event.target.checked ?  true : false;
  }

  fifthQuestion(event){
    this.reportView = false;
    this.APUndergonetoaTraining =  event.target.checked ?  true : false;
  }

  sixthQuestion(event){
    this.reportView = false;
    this.CompensationAPCategorization =  event.target.checked ?  true : false;
  }

  seventhQuestion(event){
    this.reportView = false;
    this.ShowCompensationAPCategorizationHigh   =  event.target.checked ?  true : false;
  }

  eightQuestion(event){
    this.reportView = false;
    this.ShowCompensationAPCategorizationMedium = event.target.checked ?  true : false;
  }

  ninthQuestion(event){
    this.reportView = false;
    this.ShowCompensationAPCategorizationLow = event.target.checked ?  true : false;
  }

  tenthQuestion(event){
    this.reportView = false;
    this.ShowCompensationAPCategorizationDisabilityGrant = event.target.checked ?  true : false;
  }


  Search() {
    
    this.reportUrl = 'Report Project1/TotalPopMainRep';
    this.params = {
      "ShowNandPofAPsbelongtoeachcategory": this.ShowNandPofAPsbelongtoeachcategory ,
      "ShowNandPofAPsbelongtoeachGender": this.ShowNandPofAPsbelongtoeachGender,
      "ShowNandPofAPsbelongtoeachGenderGroupBy": this.ShowNandPofAPsbelongtoeachGenderGroupBy ,
      "NandPVulnerableofAllAps":this.NandPVulnerableofAllAps,
      "ShowNandPVulnerableofAllAps":this.ShowNandPVulnerableofAllAps ,
      "APUndergonetoaTraining": this.APUndergonetoaTraining ,
      "CompensationAPCategorization": this.CompensationAPCategorization ,
      "ShowCompensationAPCategorizationHigh": this.ShowCompensationAPCategorizationHigh ,
      "ShowCompensationAPCategorizationMedium": this.ShowCompensationAPCategorizationMedium ,
      "ShowCompensationAPCategorizationLow": this.ShowCompensationAPCategorizationLow ,
      "ShowCompensationAPCategorizationDisabilityGrant" : this.ShowCompensationAPCategorizationDisabilityGrant
    }

    this.parameters = this.params;
    this.reportView = true;
  }

}
