// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { employmenttypes } from 'src/app/models/employment_types';
import { fadeInOut } from 'src/app/services/animations';
import { EmploymentEndpoint } from 'src/app/services/masterdataservice/employmentService';
import { PersonEndpoint } from 'src/app/services/masterdataservice/personService';
import { MonitorEndpoint } from 'src/app/services/monitor/monitorService';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  animations: [fadeInOut]
})
export class OrdersComponent implements OnInit {



  constructor(private monitorservice: MonitorEndpoint,private Personservice: PersonEndpoint,private employmentEndpoint:EmploymentEndpoint) {

  }

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


  businessTypes = [
    { id: 1, name: 'Business Types 1' },
    { id: 2, name: 'Business Types 2' },
    { id: 3, name: 'Business Types 3' },


  ];


  IsList = [
    { id: -1, name: 'N/A' },
    { id: true, name: 'Yes' },
    { id: false, name: 'No' },
  ]

  SalaryStatus = [
    { id: '-1', name: 'N/A' },
    { id: 'Same', name: 'Same' },
    { id: 'Low', name: 'Low' },
    { id: 'High', name: 'High' },
  ]

  jobEngagementList: any = [];

  EmployementStatus: any =[];
  gender:any =[];

  employmenttypearray:any=[];


  reportServer: string = 'http://lkcontsaranat01//ReportServer';
  reportUrl: string = 'Report Project1/Report1';
  showParameters: string = "false";
  parameters: any = {
  };
  language: string = "en-us";
  width: number = 500;
  height: number = 500;
  toolbar: string = "true";



  reportView: boolean = false;

  ngOnInit(): void {
    this.GetAllJobEngagementTypes();
    this.GetAllEmployementStatus();
    this.GetAllPersonGenderData();
    this.getAllEmploymentTypes();
  }

  reportId: number;
  selectedReportType(event) {

    this.reportView = false;
    console.log("selectedReportType", event);
    this.reportUrl = event.report_name;

    this.reportId = event.id;

    if (this.reportId == 8) {
      this.reportView = false;
    } else {
      this.parameters = {}
      this.reportView = true;
    }



  }

  


  obj_Engagement ={
    engagement : 'N/A',
    id :-1
  }


  employement_status ={
    status : 'N/A',
    employment_Status_ID :-1
  }


 

  GetAllJobEngagementTypes() {
    this.monitorservice.GetAllJobEngagement().subscribe(
      reponse => {
        this.jobEngagementList = reponse;
        this.jobEngagementList.push(this.obj_Engagement);
        console.log("Test GetAllJobEngagementTypes", reponse);
      }
    )
  }

  
  GetAllEmployementStatus() {
    this.monitorservice.GetAllEmployementStatus().subscribe(
      reponse => {
        this.EmployementStatus = reponse;
        this.EmployementStatus.push(this.employement_status);
        console.log("Test GetAllEmployementStatus", reponse);
      }
    )
  }




  genderdata ={
    user_Gender:'N/A',
    user_Gender_ID:-1
  }                              

  GetAllPersonGenderData(){
    this.Personservice.GetGender().subscribe(
      reponse => {
        this.gender = reponse;
        this.gender.push(
          this.genderdata
        )
        console.log('gender', this.gender);
      }
    )
  }
 

  emptypes = {
    employment_Type_ID: -1,
     employment_Type_Description: 'N/A',
     employment_Type_Name: 'N/A'
  }

  getAllEmploymentTypes(){
    this.employmentEndpoint.GetAllEmploymentTypes<Array<employmenttypes>>().subscribe(
      reponse=>{
        
        this.employmenttypearray=reponse;
        this.employmenttypearray.push(this.emptypes);
        
        console.log("log data",reponse);

        
      }
    )

  }


  IsSameEmployee:number=-1;
  IsSimilarCapasity:number=-1;
  SameEmployeeSelected:number=-1;
  SalaryStatusSelected:string="-1";
  JobEngagementSelected:number=-1;
  EmployementStatusSelected:number=-1;
  GenderSelected:number=-1;
  EmployementTypeSelected:number=-1;


  params: any = {};
  selectedSimilarCapasity(event) {
    console.log('selected addtion param', event)
    this.reportView = false;

    if(event.id == -1){
      this.IsSimilarCapasity =-1;
    }else{
      this.IsSimilarCapasity = event.id ? 1 : 0;
    }



  }


  selectedSameEmployee(event) {
    this.reportView = false;
    if(event.id == -1){
      this.IsSameEmployee =-1;
    }else{
      this.IsSameEmployee = event.id ? 1 : 0;
    }
  }

  selectedSalaryStatus(event) {
    this.reportView = false;
    if(event.id == '-1'){
      this.SalaryStatusSelected ='-1';
    }else{
      this.SalaryStatusSelected = event.id;
    }
  }

  selectedJobEnagagement(event){
    this.reportView = false;
    if(event.id == -1){
      this.JobEngagementSelected =-1;
    }else{
      this.JobEngagementSelected = event.id;
    }
  }


  selectedEmployementStatus(event){
    this.reportView = false;
    if(event.id == -1){
      this.EmployementStatusSelected =-1;
    }else{
      this.EmployementStatusSelected = event.id;
    }
  }

  selectedPersonGender(event){
    this.reportView = false;
    if(event.id == -1){
      this.GenderSelected =-1;
    }else{
      this.GenderSelected = event.id;
    }
  }

  selectedEmployementType(event){
    this.reportView = false;
    if(event.id == -1){
      this.EmployementTypeSelected =-1;
    }else{
      this.EmployementTypeSelected = event.id;
    }
  }

  Search() {
    this.reportView = true;
    this.reportUrl = 'Report Project1/Report8';
    this.params = {
      'IsSimilarCapacity': this.IsSimilarCapasity,
      'IsSameEmployer' : this.IsSameEmployee,
      'SalaryStatus': this.SalaryStatusSelected,
      'JobengagementID': this.JobEngagementSelected,
      'Employment_Status':this.EmployementStatusSelected,
      'Person_Gender' :  this.GenderSelected,
      'Employment_Type' :  this.EmployementTypeSelected

    }

    this.parameters = this.params;
  }



}
