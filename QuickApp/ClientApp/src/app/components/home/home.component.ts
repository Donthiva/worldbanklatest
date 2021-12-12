// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { Component, OnInit } from '@angular/core';
import { GraphEndpoint } from 'src/app/services/masterdataservice/graphService';
import { fadeInOut } from '../../services/animations';
import { ConfigurationService } from '../../services/configuration.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInOut]
})
export class HomeComponent implements OnInit {
  constructor(public configurations: ConfigurationService,public graphEndpoint:GraphEndpoint) {
  }
  chartData = [
 
    
  ];
  chartLabels = [];

  selectedReport: number;
  reports = [
    { id: 1, name: 'Deliverable_Output 1', report_name: "Report Project1/Report1" },
    { id: 2, name: 'Deliverable_Output 2', report_name: "Report Project1/Report2" },
    { id: 3, name: 'Deliverable_Output 3', report_name: "Report Project1/Report3" },
    { id: 4, name: 'Deliverable_Output 4', report_name: "Report Project1/Report4" },
    { id: 5, name: 'Deliverable_Output 5', report_name: "Report Project1/Report5" },
    { id: 6, name: 'Deliverable_Output 6', report_name: "Report Project1/Report6" },
    { id: 7, name: 'Deliverable_Output 7', report_name: "Report Project1/Report7" },
    { id: 8, name: 'Deliverable_Output 8', report_name: "Report Project1/Report8" },

  ];

  Title = "";


  ngOnInit(){
    this.getDeliverableOutPut1Data()
  }

  getDeliverableOutPut1Data(){
    this.Title = "Deliverable Output 1"
    this.chartData = [];
    var chartDatalocal: any = [];
    this.graphEndpoint.GetDeliverableOutput1().subscribe(
      response=>{
        console.log(response);

        var reponsecame = response as any;

        console.log('before data in home',this.chartData)

        for(let i =0 ;i<reponsecame.length;i++){



          var array = [];
          array.push(reponsecame[i].equal);
          array.push(reponsecame[i].higher);
          array.push(reponsecame[i].lower_income);
          array.push(reponsecame[i].number_of_APs);
          array.push(reponsecame[i].relocated_currently_not_operating);

          chartDatalocal.push({
          data:array,label:reponsecame[i].nature_of_previous_business
          })
        }

        this.chartData =chartDatalocal; 
        
        console.log("data in home",chartDatalocal);

        this.chartLabels = ['Equal', 'Higher', 'Lower income', 'Number of APs', 'Not operating'];
      }
    )
  }

  getDeliverableOutPut2Data(){
    this.Title = "Deliverable Output 2"
    this.chartData = [];
    var chartDatalocal: any = [];
    this.graphEndpoint.GetDeliverableOutput2().subscribe(
      response=>{
        console.log(response);

        var reponsecame = response as any;

        console.log('before data in home',this.chartData)

        for(let i =0 ;i<reponsecame.length;i++){



          var array = [];
          array.push(reponsecame[i].total_number_of_businesses);
          array.push(reponsecame[i].improved_businesses);
          array.push(reponsecame[i].non_improved_business);
      

          chartDatalocal.push({
          data:array,label:'Hide Data'
          })
        }

        this.chartData =chartDatalocal; 
        
        console.log("data in home",chartDatalocal);

        this.chartLabels = ['Total_number_of_businesses', 'Improved_businesses', 'Non_improved_business'];
      }
    )
  }


  reportId: number;
  selectedReportType(event) {


    this.selectedReport = event.id;

    if(this.selectedReport == 1){
      this.getDeliverableOutPut1Data();
    }else if(this.selectedReport == 2){
      this.getDeliverableOutPut2Data()
    }


  }
  
}
