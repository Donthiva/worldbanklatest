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
          array.push(reponsecame[i].nature_of_previous_livelihood);
          array.push(reponsecame[i].new_business_established);
          array.push(reponsecame[i].operating_with_stable_profit);
      

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

  getDeliverableOutPut3Data(){
    this.Title = "Deliverable Output 3"
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

        this.chartLabels = ['Nature_of_previous_livelihood', 'New_business_established', 'Operating_with_stable_profit'];
      }
    )
  }

  getDeliverableOutPut4Data(){
    this.Title = "Deliverable Output 4"
    this.chartData = [];
    var chartDatalocal: any = [];
    this.graphEndpoint.GetDeliverableOutput4().subscribe(
      response=>{
        console.log(response);

        var reponsecame = response as any;

        console.log('before data in home',this.chartData)

        for(let i =0 ;i<reponsecame.length;i++){



          var array = [];
          array.push(reponsecame[i].number_of_employees_at_GSBS);
          array.push(reponsecame[i].employed_with_the_same_employer);
          array.push(reponsecame[i].employed_with_the_new_employer);
          array.push(reponsecame[i].similar_or_higher_wages);
          array.push(reponsecame[i].lower_wages);
          array.push(reponsecame[i].engage_in_a_job);
          array.push(reponsecame[i].job_seeking);
          array.push(reponsecame[i].cannot_engage_in_a_job);
      

          chartDatalocal.push({
          data:array,label:'Hide Data'
          })
        }

        this.chartData =chartDatalocal; 
        
        console.log("data in home",chartDatalocal);

        this.chartLabels = ['Number_of_employees_at_GSBS', 'Employed_with_the_same_employer', 'Employed_with_the_new_employer','Similar_or_higher_wages','Lower_wages','Engage_in_a_job','Job_seeking','Cannot_engage_in_a_job'];
      }
    )
  }

  getDeliverableOutPut5Data(){
    this.Title = "Deliverable Output 5"
    this.chartData = [];
    var chartDatalocal: any = [];
    this.graphEndpoint.GetDeliverableOutput5().subscribe(
      response=>{
        console.log(response);

        var reponsecame = response as any;

        console.log('before data in home',this.chartData)

        for(let i =0 ;i<reponsecame.length;i++){



          var array = [];
          array.push(reponsecame[i].number_of_total_employments);
          array.push(reponsecame[i].employees_completed_vocational_trainings);
          array.push(reponsecame[i].family_members_of_the_employees_who_have_completed_the_vocational_trainings);
          array.push(reponsecame[i].employed_in_a_sector_related_to_their_training);
          array.push(reponsecame[i].higher_wages);
          array.push(reponsecame[i].social_recognition);
          
      

          chartDatalocal.push({
          data:array,label:'Hide Data'
          })
        }

        this.chartData =chartDatalocal; 
        
        console.log("data in home",chartDatalocal);

        this.chartLabels = ['Number_of_total_employments', 'Employees_completed_vocational_trainings', 'Family_members_of_the_employees_who_have_completed_the_vocational_trainings','Employed_in_a_sector_related_to_their_training','Higher_wages','Social_recognition'];
      }
    )
  }

  getDeliverableOutPut6Data(){
    this.Title = "Deliverable Output 6"
    this.chartData = [];
    var chartDatalocal: any = [];
    this.graphEndpoint.GetDeliverableOutput6().subscribe(
      response=>{
        console.log(response);

        var reponsecame = response as any;

        console.log('before data in home',this.chartData)

        for(let i =0 ;i<reponsecame.length;i++){



          var array = [];
          array.push(reponsecame[i].number_of_businesses);
          array.push(reponsecame[i].diversified_businesses);
          array.push(reponsecame[i].scaled_up_businesses);
     
      

          chartDatalocal.push({
          data:array,label:'Hide Data'
          })
        }

        this.chartData =chartDatalocal; 
        
        console.log("data in home",chartDatalocal);

        this.chartLabels = ['Number_of_businesses', 'Diversified_businesses', 'Scaled_up_businesses'];
      }
    )
  }

  getDeliverableOutPut8Data(){
    this.Title = "Deliverable Output 8"
    this.chartData = [];
    var chartDatalocal: any = [];
    this.graphEndpoint.GetDeliverableOutput8().subscribe(
      response=>{
        console.log(response);

        var reponsecame = response as any;

        console.log('before data in home',this.chartData)

        for(let i =0 ;i<reponsecame.length;i++){



          var array = [];
          array.push(reponsecame[i].number_of_vulnerable_APs);
          array.push(reponsecame[i].family_social_support);
          array.push(reponsecame[i].improved_living_conditions);
          array.push(reponsecame[i].no_improvement_or_stability);
     
      

          chartDatalocal.push({
          data:array,label:'Hide Data'
          })
        }

        this.chartData =chartDatalocal; 
        
        console.log("data in home",chartDatalocal);

        this.chartLabels = ['Number_of_vulnerable_APs', 'Family_social_support', 'Improved_living_conditions','No_improvement_or_stability'];
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
    }else if(this.selectedReport == 3){
      this.getDeliverableOutPut3Data()
    }else if(this.selectedReport == 4){
      this.getDeliverableOutPut4Data()
    }else if(this.selectedReport == 5){
      this.getDeliverableOutPut5Data()
    }else if(this.selectedReport == 6){
      this.getDeliverableOutPut6Data()
    }else if(this.selectedReport == 8){
      this.getDeliverableOutPut8Data()
    }


  }
  
}
