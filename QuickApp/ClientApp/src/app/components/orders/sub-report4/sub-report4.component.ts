import { Component, OnInit } from '@angular/core';
import { PersonEndpoint } from 'src/app/services/masterdataservice/personService';

@Component({
  selector: 'app-sub-report4',
  templateUrl: './sub-report4.component.html',
  styleUrls: ['./sub-report4.component.scss']
})
export class SubReport4Component implements OnInit {

  constructor(private personservice:PersonEndpoint) { }


  reportServer: string = 'http://lkconrbandara02//ReportServer';
  reportUrl: string = 'Report Project1/Report1';
  showParameters: string = "false";
  parameters: any = {
  };
  language: string = "en-us";
  width: number = 500;
  height: number = 500;
  toolbar: string = "true";
  params: any = {};


  reportView: boolean = false;

  ngOnInit(): void {
     this.LoadMonitorPeriods();
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

  reportId: number;
  selectedPeriod(event) {
    this.reportView = false;
    this.reportUrl = 'Report Project1/EventsReport';
    this.params = {
      "MonitorPeriod": event.id
      
    };
     this.parameters = this.params;
    

   



  }

  Search(){
    this.reportView = true;
  }

}
