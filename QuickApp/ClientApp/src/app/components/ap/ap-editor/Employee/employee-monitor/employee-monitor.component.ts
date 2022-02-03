import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { PersonalData } from 'src/app/models/app-add/personalData';
import { address } from 'src/app/models/MoniorModels/businessMonitorModel';
import { EmployeeMonitor } from 'src/app/models/MoniorModels/employeeMonitorModel';
import { SelectPersonTypes } from 'src/app/models/selectPersonType';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AddressService } from 'src/app/services/ap-services.ts/addressService';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { PersonEndpoint } from 'src/app/services/masterdataservice/personService';
import { MonitorEndpoint } from 'src/app/services/monitor/monitorService';

@Component({
  selector: 'app-employee-monitor',
  templateUrl: './employee-monitor.component.html',
  styleUrls: ['./employee-monitor.component.scss']
})
export class EmployeeMonitorComponent implements OnInit {
  personModel: PersonalData;
  constructor(private translationService: AppTranslationService, private addressService: AddressService, private monitorservice: MonitorEndpoint, private alertService: AlertService, private configurations: ConfigurationService, private personservice: PersonEndpoint, public datepipe: DatePipe) {
    this.personModel = new PersonalData();
    this.employeeMonitor = new EmployeeMonitor();
  }
  @Input() personData: PersonalData;
  @Input() monitorEditmode: EmployeeMonitor;
  @Input() editMode: boolean;

  @Output() updatedevent: EventEmitter<boolean> = new EventEmitter();



  @ViewChild('indexTemplate', { static: true })
  indexTemplate: TemplateRef<any>;
  @ViewChild('actionsTemplate', { static: true })
  actionsTemplate: TemplateRef<any>;


  personTypes: SelectPersonTypes;

  imageUrl: boolean = false;

  employeeMonitor: EmployeeMonitor = new EmployeeMonitor();
  monitoredit: EmployeeMonitor;

  IsList = [
    { id: true, name: 'Yes' },
    { id: false, name: 'No' },
  ]

  SalaryStatus = [
    { id: 'Same', name: 'Same' },
    { id: 'Low', name: 'Low' },
    { id: 'High', name: 'High' },
  ]

  CurrentJob = [
    { id: 'Businessman', name: 'Businessman' },
    { id: 'Cashier', name: 'Cashier' },
    { id: 'Driver', name: 'Driver' },
    { id: 'Electrician', name: 'Electrician' },
    { id: 'Labour', name: 'Labour' },
    { id: 'Shop Assistant', name: 'Shop Assistant' },
    { id: 'Other', name: 'Other' },
  ]


  

  Purchasedvalues = [
    { id: 'Purchased', name: 'Purchased' },
    { id: 'Sold', name: 'Sold' },
    { id: 'Same', name: 'Same' },
  ]

  Situation = [
    { id: 'Red', name: 'Red' },
    { id: 'Yellow', name: 'Yellow' },
    { id: 'Green', name: 'Green' },
  ]

  columns: any[] = [];
  rows: any[] = [];
  CurrentType: number;

  jobEngagementList: any = [];
  EmployementStatus: any = [];
  EmployementType: any = [];
  ngOnInit(): void {




    this.GetAllJobEngagementTypes();
    this.GetAllEmployementStatus();
    this.GetAllEmployerTypes();
    this.LoadMonitorPeriods();
  
  }





  openDoc(doc) {
    window.open(this.configurations.baseUrl + '/' + doc.path, "_blank");
  }

  deleteDoc(doc, index) {
    console.log("delete", doc);
    this.employeeMonitor.employeeMonitorDocuments.splice(index, 1)
    console.log("after delete", this.employeeMonitor);

    this.monitorservice.DeleteImagesMonitor(doc.id, 1).subscribe(
      reponse => {

      }
    )


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



  deleteVideo(doc, index) {
    console.log("delete", doc);
    this.employeeMonitor.employeeMonitorVideos.splice(index, 1)
    console.log("after delete", this.employeeMonitor);

    this.monitorservice.DeleteImagesMonitor(doc.id, 2).subscribe(
      reponse => {

      }
    )

  }

  deleteImg(doc, index) {
    console.log("delete", doc);
    this.employeeMonitor.employeeMonitorImages.splice(index, 1)
    console.log("after delete", this.employeeMonitor);

    this.monitorservice.DeleteImagesMonitor(doc.id, 3).subscribe(
      reponse => {

      }
    )

  }

  employeeMonitorOrginal: EmployeeMonitor = new EmployeeMonitor();
  personTypeId: number;
  ngOnChanges() {

    this.loadAddressRelatedData();

    console.log("employee monitor data", this.personData);
    this.personModel = this.personData;
    if (this.personData != undefined) {
      this.CurrentType = this.personData.PersonType;
      this.personTypeId = this.personData.Person_ID;

    }

    if (this.editMode) {
      // console.log("came to monitor edit")
      this.employeeMonitor = this.monitorEditmode;

      console.log("edit came json", JSON.stringify(this.monitorEditmode));
      // this.employeeMonitor.monitor.monitorDuration.monitor_Duration_Start_date = this.datepipe.transform(this.monitorEditmode.monitor.monitorDuration.monitor_Duration_Start_date, 'yyyy-MM-dd');
      // this.employeeMonitor.monitor.monitorDuration.monitor_Duration_End_date = this.datepipe.transform(this.monitorEditmode.monitor.monitorDuration.monitor_Duration_End_date, 'yyyy-MM-dd');

      this.employeeMonitorOrginal = JSON.parse(JSON.stringify(this.employeeMonitor));
      console.log("monitor data", this.employeeMonitor);


      if (this.employeeMonitor.address != null) {
        console.log('address not null');
        this.loadGetAllStates(this.employeeMonitor.address.countryId);
        this.loadGetAllDistricts(this.employeeMonitor.address.countryId, this.employeeMonitor.address.statesId);
        this.loadGetAllCities(this.employeeMonitor.address.countryId, this.employeeMonitor.address.statesId, this.employeeMonitor.address.districtId);
      } else {
        this.employeeMonitor.address = new address();
      }
    }

  }

 



  adddatareponse2: any;
  updateMonitor() {
    console.log("before update employee", this.employeeMonitor)

    if ((this.employeeMonitor.jobengagementID == undefined || this.employeeMonitor.jobengagementID == null) ||
      (this.employeeMonitor.monitor.monitorDuration.monitor_Duration_Start_date == undefined || this.employeeMonitor.monitor.monitorDuration.monitor_Duration_Start_date == null) ||
      (this.employeeMonitor.monitor.monitorDuration.monitor_Duration_End_date == undefined || this.employeeMonitor.monitor.monitorDuration.monitor_Duration_End_date == null) ||
      (this.employeeMonitor.employment_Status == undefined || this.employeeMonitor.employment_Status == null) ||
      (this.employeeMonitor.isSameEmployer == undefined || this.employeeMonitor.isSameEmployer == null) ||
      (this.employeeMonitor.isSimilarCapacity == undefined || this.employeeMonitor.isSimilarCapacity == null) ||
      (this.employeeMonitor.current_Employer == undefined || this.employeeMonitor.current_Employer == null || this.employeeMonitor.current_Employer == "") ||
      (this.employeeMonitor.employment_Salary == undefined || this.employeeMonitor.employment_Salary == null) ||
      (this.employeeMonitor.salaryStatus == undefined || this.employeeMonitor.salaryStatus == null) ||
      (this.employeeMonitor.employment_How_he_found_the_job == undefined || this.employeeMonitor.employment_How_he_found_the_job == null || this.employeeMonitor.employment_How_he_found_the_job == "") ||
      (this.employeeMonitor.employment_Remarks == undefined || this.employeeMonitor.employment_Remarks == null || this.employeeMonitor.employment_Remarks == "")
    ) {
      this.alertService.showMessage('Altert', 'Please fill employe related data correctly', MessageSeverity.info);
      this.validationfailed = true;
    } else {

      const formData: FormData = new FormData();
      var count = 0;
      for (let i = 0; i < this.fileListToUpload.length; i++) {
        formData.append("file" + i, this.fileListToUpload[i], this.fileListToUpload[i].name);
        count = count + 1;
      }

      formData.append('jsonString', JSON.stringify(this.employeeMonitor));

      console.log("update json", JSON.stringify(this.employeeMonitor))

      console.log("original json", JSON.stringify(this.employeeMonitorOrginal))

      console.log("count", count);

      this.validationfailed = false;
      if ((JSON.stringify(this.employeeMonitorOrginal) != JSON.stringify(this.employeeMonitor)) || count > 0) {
        this.monitorservice.UpdateEmployeeMonitor(formData).subscribe(
          response => {

            this.adddatareponse2 = response;
            if (this.adddatareponse2.status == 200) {
              this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
              this.personModel = new PersonalData();
              this.clear();
              this.employeeMonitor = new EmployeeMonitor();
              this.personData = undefined
              this.updatedevent.emit(false);
            } else {
              this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
              this.validationfailed = false;
            }
            console.log("reponse added", response);
          }
        )
      } else {
        this.alertService.showMessage('warn', 'Nothing to update', MessageSeverity.info);
      }

    }



  }
  clear() {
    this.personModel = new PersonalData();

    this.employeeMonitor = new EmployeeMonitor();
    this.personData = undefined
    this.updatedevent.emit(false);
    this.validationfailed = false;
    this.fileListToUpload = [];
  }

  IsEmploedSelected(event) {

  }


  IsSameEmployerSelected(event) {
    this.employeeMonitor.isSameEmployer = event.id;
  }

  IsSimilarCapacitySelected(event) {
    this.employeeMonitor.isSimilarCapacity = event.id;
  }





  GetAllJobEngagementTypes() {
    this.monitorservice.GetAllJobEngagement().subscribe(
      reponse => {
        this.jobEngagementList = reponse;
        console.log("Test GetAllJobEngagementTypes", reponse);
      }
    )
  }


  GetAllEmployementStatus() {
    this.monitorservice.GetAllEmployementStatus().subscribe(
      reponse => {
        this.EmployementStatus = reponse;
        console.log("Test GetAllEmployementStatus", reponse);
      }
    )
  }


  GetAllEmployerTypes() {
    this.monitorservice.GetAllEmployerTypes().subscribe(
      response => {
        this.EmployementType = response;
        console.log("Test GetAllEmployerTypes", response);
      }
    )
  }

  selectedJobEngagement(data) {
    console.log("Test JobEngagement", data);
    this.employeeMonitor.jobengagementID = data.id
  }

  selectedEmployementStatus(data) {
    this.employeeMonitor.employment_Status = data.employment_Status_ID;
  }

  SelectedSalaryStatus(data) {
    this.employeeMonitor.salaryStatus = data.id;
  }



  SelectedEmployementTypes(data) {
    this.employeeMonitor.employment_Type = data
  }

  selectedStartDate(data) {
    console.log("Get data for start", this.employeeMonitor.monitor.monitorDuration.monitor_Duration_Start_date);

    //this.employeeMonitor.monitor.monitorDuration.monitor_Duration_Start_date = data.monitor.monitorDuration.monitor_Duration_Start_date;
  }


  fileListToUpload: Array<File> = [];
  handleFileInput(files: FileList) {

    for (let i = 0; i < files.length; i++) {
      this.fileListToUpload.push(files.item(i));
    }


  }


  deletefile(i) {
    console.log("delete file", i);
    this.fileListToUpload.splice(i, 1);
  }



  validationfailed: boolean = false;
  adddatareponse: any;
  addmonitor() {
    if ((this.employeeMonitor.jobengagementID == undefined || this.employeeMonitor.jobengagementID == null) ||
      (this.employeeMonitor.monitor.monitorDuration.monitor_Duration_Start_date == undefined || this.employeeMonitor.monitor.monitorDuration.monitor_Duration_Start_date == null) ||
      
      (this.employeeMonitor.employment_Status == undefined || this.employeeMonitor.employment_Status == null) ||

     
      (this.employeeMonitor.isSimilarCapacity == undefined || this.employeeMonitor.isSimilarCapacity == null) ||
  
      (this.employeeMonitor.employment_How_he_found_the_job == undefined || this.employeeMonitor.employment_How_he_found_the_job == null || this.employeeMonitor.employment_How_he_found_the_job == "") ||
      (this.employeeMonitor.employment_Remarks == undefined || this.employeeMonitor.employment_Remarks == null || this.employeeMonitor.employment_Remarks == "")
    ) {
      this.alertService.showMessage('Altert', 'Please fill employe related data correctly', MessageSeverity.info);
      this.validationfailed = true;
    } else {


      this.employeeMonitor.person_ID = this.personTypeId;
      this.employeeMonitor.employment_Started_date = new Date();
      //get employement types
      this.employeeMonitor.employment_Type = 1;
      this.employeeMonitor.employment_Employer = "";
      //get employer types
      this.employeeMonitor.employment_Employer_Type = 1;

      this.employeeMonitor.employment_If_not_angeged_in_a_job_reason = "test";

      //monitor data
      this.employeeMonitor.monitor.monitor_Person_ID = this.personTypeId;
      var monitordate = new Date();
      this.employeeMonitor.monitor.monitor_Date = this.datepipe.transform(monitordate, 'yyyy-MM-dd');
      this.employeeMonitor.monitor.monitor_Update = "";
      this.employeeMonitor.monitor.monitor_LRP_Responds_action = 1;
      this.employeeMonitor.monitor.monitor_Remarks = "second monitor time";
      this.employeeMonitor.monitor.monitorDuration.monitor_Duration_Description = "duration description seond time";



      const formData: FormData = new FormData();

      for (let i = 0; i < this.fileListToUpload.length; i++) {
        formData.append("file" + i, this.fileListToUpload[i], this.fileListToUpload[i].name);
      }

      formData.append('jsonString', JSON.stringify(this.employeeMonitor));


      this.validationfailed = false;
      this.monitorservice.AddEmployeeMonitor(formData).subscribe(
        response => {
          this.adddatareponse = response;


          if (this.adddatareponse.status == 200) {
            this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
            this.personModel = new PersonalData();
            this.personData = undefined;
            this.employeeMonitor = new EmployeeMonitor();
            this.updatedevent.emit(false);
            this.clear();

          } else {
            this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
            this.validationfailed = false;
          }
          console.log("reponse added", response);
        }
      )
    }

  }

  selectedCountry(data) {

    if (data != undefined) {
      this.employeeMonitor.address.countryId = data.country_ID;

      this.loadGetAllStates(data.country_ID);

    }


  }

  selectedState(data) {
    console.log("data state", data);

    if (data != undefined) {
      this.employeeMonitor.address.statesId = data.states_ID;

      this.loadGetAllDistricts(this.employeeMonitor.address.countryId, data.states_ID);

    }


  }

  selectedDistrict(data) {

    if (data != undefined) {
      this.employeeMonitor.address.districtId = data.district_ID;

      this.loadGetAllCities(this.employeeMonitor.address.countryId, this.employeeMonitor.address.statesId, this.personModel.district);
    }


  }


  selectedCity(data) {

    if (data != undefined) {
      this.employeeMonitor.address.cityId = data.city_ID
    }


  }



  country: any = []

  states: any = []

  district: any = []

  City: any = []

  loadAddressRelatedData() {
    this.addressService.GetAllCountries().subscribe(
      reponse => {
        this.country = reponse;
        console.log('country', this.country);
      }
    )

  }




  loadGetAllStates(countryId: number) {

    this.addressService.GetAllStates(countryId).subscribe(
      reponse => {
        this.states = reponse;
        console.log('states', this.states);
      }
    )

  }


  loadGetAllDistricts(coutryId: number, stateId: number) {


    this.addressService.GetAllDistricts(coutryId, stateId).subscribe(
      reponse => {
        this.district = reponse;
        console.log('district', this.district);
      }
    )

  }


  loadGetAllCities(countrId: number, stateId: number, districtID: number) {

    this.addressService.GetAllCities(countrId, stateId, districtID).subscribe(
      reponse => {
        this.City = reponse;
        console.log('City', this.City);
      }
    )

  }

}
function dateconvert(date: any) {
  throw new Error('Function not implemented.');
}

