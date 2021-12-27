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

  chartsModel:any={
    Del1show : false,
    Del2show: false,
    Del3show: false,
    Del4show: false,
    Del5show: false,
    Del6show: false,
    Del8show: false,
    Cross1Show: false,
    Cross2Show: false,
    Cross3Show: false,
    Cross4Show: false
  };

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
    this.getDeliverableOutPut1Data();
    this.getDeliverableOutPut2Data();
    this.getDeliverableOutPut3Data();
    this.getDeliverableOutPut4Data();
    this.getDeliverableOutPut5Data();
    this.getDeliverableOutPut6Data();
    this.getDeliverableOutPut8Data();
    //cross tabulations
    this.GetAPCategoryWisePercentage();
    this.GetGenderWiseDataPercentage();
    this.GetAgeWiseAPsCategories();
    this.GetVulnerabilitiesAPPercentage();
  }

  getDeliverableOutPut1Data(){
    this.Title = "Deliverable Output 1"
    this.chartData = [];
    var chartDatalocal: any = [];
    var chartLabelLocal : any = [];
    this.graphEndpoint.GetDeliverableOutput1().subscribe(
      response=>{
        console.log(response);
        this.chartsModel.Del1show = false;

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

        chartLabelLocal = ['Equal', 'Higher', 'Lower income', 'Number of APs', 'Not operating'];
        this.chartsModel.Del1show = true;
        var data = {
          chartData : chartDatalocal,
          chartLabels : chartLabelLocal,
          chartName: "Deliverable Output 1"
        }
        this.chartsModel.Del1 = data;
        console.log("Del1",this.chartsModel);
      }

   
    )
  }

  getDeliverableOutPut2Data(){
    this.Title = "Deliverable Output 2"
    this.chartData = [];
    var chartDatalocal: any = [];
    var chartLabelLocal: any =[];
    this.graphEndpoint.GetDeliverableOutput2().subscribe(
      response=>{
        console.log(response);
        this.chartsModel.Del2show = false;
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
        this.chartsModel.Del2show = true;
        chartLabelLocal = ['Total_number_of_businesses', 'Improved_businesses', 'Non_improved_business'];
        var data = {
          chartData : chartDatalocal,
          chartLabels : chartLabelLocal,
          chartName: "Deliverable Output 2"
        }

        this.chartsModel.Del2 = data;
      }
    )
  }

  getDeliverableOutPut3Data(){
    this.Title = "Deliverable Output 3"
    this.chartData = [];
    var chartDatalocal: any = [];
    var chartLabelLocal:any = [];
    this.graphEndpoint.GetDeliverableOutput2().subscribe(
      response=>{
        console.log(response);
        this.chartsModel.Del3show = false;
        var reponsecame = response as any;3

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
        this.chartsModel.Del3show = true;
        this.chartLabels = ['Nature_of_previous_livelihood', 'New_business_established', 'Operating_with_stable_profit'];

        var data = {
          chartData : chartDatalocal,
          chartLabels : chartLabelLocal,
          chartName: "Deliverable Output 3"
        }

        this.chartsModel.Del3 = data;

      }
    )
  }

  getDeliverableOutPut4Data(){
    this.Title = "Deliverable Output 4"
    this.chartData = [];
    var chartDatalocal: any = [];
    var chartLabelLocal:any = [];
    this.graphEndpoint.GetDeliverableOutput4().subscribe(
      response=>{
        console.log(response);
        this.chartsModel.Del4show = false;
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

        chartLabelLocal = ['Number_of_employees_at_GSBS', 'Employed_with_the_same_employer', 'Employed_with_the_new_employer','Similar_or_higher_wages','Lower_wages','Engage_in_a_job','Job_seeking','Cannot_engage_in_a_job'];
        this.chartsModel.Del4show = true;
        var data = {
          chartData : chartDatalocal,
          chartLabels : chartLabelLocal,
          chartName: "Deliverable Output 4"
        }

        this.chartsModel.Del4 = data;
      }
    )
  }

  getDeliverableOutPut5Data(){
    this.Title = "Deliverable Output 5"
    this.chartData = [];
    var chartDatalocal: any = [];
    var chartLabelLocal:any = [];
    this.graphEndpoint.GetDeliverableOutput5().subscribe(
      response=>{
        console.log(response);

        var reponsecame = response as any;
        this.chartsModel.Del5show = false;
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
        this.chartsModel.Del5show = true;
        chartLabelLocal = ['Number_of_total_employments', 'Employees_completed_vocational_trainings', 'Family_members_of_the_employees_who_have_completed_the_vocational_trainings','Employed_in_a_sector_related_to_their_training','Higher_wages','Social_recognition'];

        var data = {
          chartData : chartDatalocal,
          chartLabels : chartLabelLocal,
          chartName: "Deliverable Output 5"
        }

        this.chartsModel.Del5 = data;
      }
    )
  }

  getDeliverableOutPut6Data(){
    this.Title = "Deliverable Output 6"
    this.chartData = [];
    var chartDatalocal: any = [];
    var chartLabelLocal:any = [];
    this.graphEndpoint.GetDeliverableOutput6().subscribe(
      response=>{
        console.log(response);
        this.chartsModel.Del6show = false;
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
        this.chartsModel.Del6show = true;
        console.log("data in home",chartDatalocal);

        chartLabelLocal = ['Number_of_businesses', 'Diversified_businesses', 'Scaled_up_businesses'];

        
        var data = {
          chartData : chartDatalocal,
          chartLabels : chartLabelLocal,
          chartName: "Deliverable Output 6"
        }

        this.chartsModel.Del6 = data;
      }
    )
  }

  getDeliverableOutPut8Data(){
    this.Title = "Deliverable Output 8"
    this.chartData = [];
    var chartDatalocal: any = [];
    var chartLabelLocal:any = [];
    this.graphEndpoint.GetDeliverableOutput8().subscribe(
      response=>{
        console.log(response);
        this.chartsModel.Del8show = false;
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
        this.chartsModel.Del8show = true;
        chartLabelLocal = ['Number_of_vulnerable_APs', 'Family_social_support', 'Improved_living_conditions','No_improvement_or_stability'];
        var data = {
          chartData : chartDatalocal,
          chartLabels : chartLabelLocal,
          chartName: "Deliverable Output 8"
        }

        this.chartsModel.Del8 = data;
      }
    )
  }

  showDeliverables:boolean = false;
  showOtherDeliverables(event){
    console.log("checkboxevent",event.target.checked);
    this.showDeliverables = event.target.checked;
  }


  showCrossTabulations:boolean = false;
  showOtherCrossTabulations(event){
    console.log("checkboxevent",event.target.checked);
    this.showCrossTabulations = event.target.checked;
  }


  hideOtherDeliverables(event){
    console.log("checkboxevent",event)
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


  GetAPCategoryWisePercentage(){
    this.Title = "AP CategoryWise Percentage"
    this.chartData = [];
    var chartDatalocal: any = [];
    var chartLabelLocal:any = [];
    this.graphEndpoint.GetAPCategoryWisePercentage().subscribe(
      response=>{
        console.log(response);
        this.chartsModel.Del8show = false;
        var reponsecame = response as any;

      
        console.log("GetAPCategoryWisePercentage before",chartDatalocal);
        for(let i =0 ;i<reponsecame.length;i++){



          var array = [];
          array.push(reponsecame[i].business);
          array.push(reponsecame[i].employee);
          array.push(reponsecame[i].mobileVendor);
          array.push(reponsecame[i].threeWheel);
     
      

          chartDatalocal.push({
          data:array,label:reponsecame[i].fieldname
          })
        }

        this.chartData =chartDatalocal; 
        
        console.log("GetAPCategoryWisePercentage",chartDatalocal);
        this.chartsModel.Cross1Show = true;
        chartLabelLocal = ['business', 'employee', 'mobileVendor','threeWheel'];
        var data = {
          chartData : chartDatalocal,
          chartLabels : chartLabelLocal,
          chartName: "AP CategoryWise Percentage"
        }

        this.chartsModel.cross1 = data;
      }
    )
  }


  GetGenderWiseDataPercentage(){
    this.Title = "AP CategoryWise Percentage"
    this.chartData = [];
    var chartDatalocal: any = [];
    var chartLabelLocal:any = [];
    this.graphEndpoint.GetGenderWiseDataPercentage().subscribe(
      response=>{
        console.log(response);
        this.chartsModel.Cross2Show = false;
        var reponsecame = response as any;

      
        console.log("GetGenderWiseDataPercentage before",reponsecame);
        for(let i =0 ;i<reponsecame.length;i++){



          var array = [];
          array.push(reponsecame[i].female);
          array.push(reponsecame[i].male);
   
     
      

          chartDatalocal.push({
          data:array,label:reponsecame[i].fieldname
          })
        }

        this.chartData =chartDatalocal; 
        
        console.log("GetAPCategoryWisePercentage",chartDatalocal);
        this.chartsModel.Cross2Show = true;
        chartLabelLocal = ['female', 'male'];
        var data = {
          chartData : chartDatalocal,
          chartLabels : chartLabelLocal,
          chartName: "AP GenderWise Percentage"
        }

        this.chartsModel.cross2 = data;
      }
    )
  }



  GetAgeWiseAPsCategories(){
    this.Title = "Get GenderWise Age Categories"
    this.chartData = [];
    var chartDatalocal: any = [];
    var chartLabelLocal:any = [];
    this.graphEndpoint.GetAgeWiseAPsCategories().subscribe(
      response=>{
        console.log(response);
        this.chartsModel.Cross3Show = false;
        var reponsecame = response as any;

      
        console.log("GetGenderWiseDataPercentage before",reponsecame);
        for(let i =0 ;i<reponsecame.length;i++){



          var array = [];
          array.push(reponsecame[i].maleBelow35);
          array.push(reponsecame[i].femaleBelow35);
          array.push(reponsecame[i].maleBetween35to65);
          array.push(reponsecame[i].femaleBetween35to65);
          array.push(reponsecame[i].maleGreater65);
          array.push(reponsecame[i].femaleGreater65);

          chartDatalocal.push({
          data:array,label:reponsecame[i].fieldname
          })
        }

        this.chartData =chartDatalocal; 
        
        console.log("GetAPCategoryWisePercentage",chartDatalocal);
        this.chartsModel.Cross3Show = true;
        chartLabelLocal = ['maleBelow35', 'femaleBelow35','maleBetween35to65','femaleBetween35to65','maleGreater65','femaleGreater65'];
        var data = {
          chartData : chartDatalocal,
          chartLabels : chartLabelLocal,
          chartName: "Get GenderWise Age Categories"
        }

        this.chartsModel.cross3 = data;
      }
    )
  }


  GetVulnerabilitiesAPPercentage(){
    this.Title = "Get GenderWise Age Categories"
    this.chartData = [];
    var chartDatalocal: any = [];
    var chartLabelLocal:any = [];
    this.graphEndpoint.GetVulnerabilitiesAPPercentage().subscribe(
      response=>{
        console.log(response);
        this.chartsModel.Cross4Show = false;
        var reponsecame = response as any;

      
        console.log("GetVulnerabilitiesAPPercentage before",reponsecame);
        for(let i =0 ;i<reponsecame.length;i++){



          var array = [];
          array.push(reponsecame[i].percentage);
          array.push(reponsecame[i].number);
        

          chartDatalocal.push({
          data:array,label:reponsecame[i].fieldname
          })
        }

        this.chartData =chartDatalocal; 
        
        console.log("GetAPCategoryWisePercentage",chartDatalocal);
        this.chartsModel.Cross4Show = true;
        chartLabelLocal = ['percentage', 'number'];
        var data = {
          chartData : chartDatalocal,
          chartLabels : chartLabelLocal,
          chartName: "Get GenderWise Age Categories"
        }

        this.chartsModel.cross4 = data;
      }
    )
  }
  
}
