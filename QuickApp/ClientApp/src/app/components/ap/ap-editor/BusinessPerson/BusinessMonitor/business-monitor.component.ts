import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { join } from 'path';
import { PersonalData } from 'src/app/models/app-add/personalData';
import { address, businessMonitorModel } from 'src/app/models/MoniorModels/businessMonitorModel';
import { SelectPersonTypes } from 'src/app/models/selectPersonType';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AddressService } from 'src/app/services/ap-services.ts/addressService';
import { BusinessService } from 'src/app/services/ap-services.ts/businessService';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { PersonEndpoint } from 'src/app/services/masterdataservice/personService';
import { MonitorEndpoint } from 'src/app/services/monitor/monitorService';

@Component({
  selector: 'app-business-monitor',
  templateUrl: './business-monitor.component.html',
  styleUrls: ['./business-monitor.component.scss']
})
export class BusinessMonitorComponent implements OnInit {

  @Input() personData: PersonalData;
  @Input() monitorEditmode: businessMonitorModel;
  @Input() editMode: boolean;

  @Output() updatedevent: EventEmitter<boolean> = new EventEmitter();


  @ViewChild('indexTemplate', { static: true })
  indexTemplateB: TemplateRef<any>;
  @ViewChild('actionsTemplate', { static: true })
  actionsTemplateB: TemplateRef<any>;

  personTypes: SelectPersonTypes;

  imageUrl: boolean = false;
  test: string;


  businessMonitorModel: businessMonitorModel;


  columns2: any[] = [];
  rows2: any[] = [];
  businessSituation = [
    { id: 'Red', name: 'Red' },
    { id: 'Yellow', name: 'Yellow' },
    { id: 'Green', name: 'Green' },
  ]


  IsList = [
    { id: true, name: 'Yes' },
    { id: false, name: 'No' },
  ]

  CityOut= [
    { id: "City", name: 'City' },
    { id: "Out", name: "Out" },
  ]

  IncomeStatus = [
    { id: 'Same', name: 'Same' },
    { id: 'Low', name: 'Low' },
    { id: 'High', name: 'High' },
  ]

  BusinessStatus = [
    { id: 'Improved', name: 'Improved' },
    { id: 'Same', name: 'Same' },
    { id: 'Dropped', name: 'Dropped' },
  ]

  BusinessStaffStatus = [
    { id: 'Increased', name: 'Increased' },
    { id: 'Same', name: 'Same' },
    { id: 'Decreased', name: 'Decreased' },

  ]


  PurchasedStaus = [
    { id: 'Purchased', name: 'Purchased' },
    { id: 'Sold', name: 'Sold' },
    { id: 'Same', name: 'Same' },

  ]

  businessManagementMode:any = [
  
  ]

  personModel: PersonalData;
  CurrentType: number;
  constructor(private translationService: AppTranslationService,private addressService: AddressService, private buinsessMonitor: MonitorEndpoint, private alertService: AlertService,
    private personservice:PersonEndpoint,private configurations: ConfigurationService,public datepipe: DatePipe,private business:BusinessService) {
    this.businessMonitorModel = new businessMonitorModel();
    this.personModel = new PersonalData();
  }

  ngOnInit(): void {

    this.LoadMonitorPeriods();
    this.GetAllBusinessManagementModes();
  }

  businessMonitorModelOriginal = new businessMonitorModel();
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
      console.log("came to monitor edit")
      this.businessMonitorModel = this.monitorEditmode;
      // this.businessMonitorModel.monitor.monitor_Date = this.datepipe.transform(this.monitorEditmode.monitor.monitor_Date, 'yyyy-MM-dd');
      this.businessMonitorModelOriginal = JSON.parse(JSON.stringify(this.businessMonitorModel));
      console.log("monitor data", this.businessMonitorModel);

      if(this.businessMonitorModel.address!= null){
        console.log('address not null');
        this.loadGetAllStates(this.businessMonitorModel.address.countryId);
        this.loadGetAllDistricts(this.businessMonitorModel.address.countryId, this.businessMonitorModel.address.statesId);
        this.loadGetAllCities(this.businessMonitorModel.address.countryId,  this.businessMonitorModel.address.statesId,  this.businessMonitorModel.address.districtId);
      }else{
        this.businessMonitorModel.address = new address();
      }

   
      
      
    }




  }

  selectedCountry(data) {

    if (data != undefined) {
      this.businessMonitorModel.address.countryId = data.country_ID;

      this.loadGetAllStates(data.country_ID);

    }


  }

  selectedState(data) {
    console.log("data state", data);

    if (data != undefined) {
      this.businessMonitorModel.address.statesId = data.states_ID;

      this.loadGetAllDistricts(this.businessMonitorModel.address.countryId, data.states_ID);

    }


  }

  selectedDistrict(data) {

    if (data != undefined) {
      this.businessMonitorModel.address.districtId = data.district_ID;

      this.loadGetAllCities(this.businessMonitorModel.address.countryId,  this.businessMonitorModel.address.statesId, this.personModel.district);
    }


  }


  selectedCity(data) {

    if (data != undefined) {
      this.businessMonitorModel.address.cityId = data.city_ID
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



  
  GetAllBusinessManagementModes() {

    this.business.GetAllBusinessManagementModes().subscribe(
      reponse => {
        this.businessManagementMode = reponse;
        console.log('City', this.City);
      }
    )

  }

  openDoc(doc) {
    window.open(this.configurations.baseUrl + '/' + doc.path, "_blank");
  }

  deleteDoc(doc, index) {
    console.log("delete", doc);
    this.businessMonitorModel.businessMonitorDocuments.splice(index, 1)
    console.log("after delete", this.businessMonitorModel);

    this.buinsessMonitor.DeleteBusinessImagesMonitor(doc.id, 1).subscribe(
      reponse => {

      }
    )
  }

  deleteImg(doc, index) {
    console.log("delete", doc);
    this.businessMonitorModel.businessMonitorImages.splice(index, 1)
    console.log("after delete", this.businessMonitorModel);

    this.buinsessMonitor.DeleteBusinessImagesMonitor(doc.id, 3).subscribe(
      reponse => {

      }
    )
  }

  deleteVideo(doc, index) {
    console.log("delete", doc);
    this.businessMonitorModel.businessMonitorImages.splice(index, 1)
    console.log("after delete", this.businessMonitorModel);

    this.buinsessMonitor.DeleteBusinessImagesMonitor(doc.id, 2).subscribe(
      reponse => {

      }
    )
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




  MonitorPeriod: any = [];
  LoadMonitorPeriods() {

    this.personservice.GetMonitorPeriod().subscribe(
      reponse => {
        console.log("LoadMonitorPeriods", reponse);
        this.MonitorPeriod = reponse as any;
      }
    )

  }

  clear() {

    this.personData = undefined
    this.fileListToUpload = [];
    this.businessMonitorModel = new businessMonitorModel();
    this.personModel = undefined; this.personModel = new PersonalData();
    this.updatedevent.emit(false);
    this.validationfailed = false
  }
  // loadData(){
  //   this.rows2 = [
  //     { Current_Employer: 'Austin', Salary: '25,000', Start_Date: '01/02/2020' },
  //     { Current_Employer: 'Dany', Salary: '50,000', Start_Date: '01/02/2020' },
  //     { Current_Employer: 'Molly', Salary: '75,000', Start_Date: '01/02/2020' }
  //   ];
  // }

  BusinessSituatoinSelected(val) {
    console.log("situation", val);
  }

  IsBusinessChangedSelected(val) {
    console.log("businesschanged", val);
  }


  ManagementModeSelected(val) {
    console.log("ManagementModeSelected", val);
  }

  IsAlternativeSite(val) {
    console.log("IsAlternativeSite", val);
  }

  cityOutSelected(val) {
    console.log("cityOutSelected", val);
  }


  SelectedIncomeStatus(val) {
    console.log("incomeStatus", val);
  }

  BusinessStatusSelected(val) {
    console.log("BusinessStatusSelected", val);
  }


  SelectedPurchsed(val) {
    console.log("SelectedPurchsed", val);
  }

  StaffSelected(val) {
    console.log("StaffSelected", val);
  }

  updatedatareponse: any;
  UpdateBusinessData() {

    var count = 0;
        for (let i = 0; i < this.fileListToUpload.length; i++) {
       
          count = count +1;
        }

    if (JSON.stringify(this.businessMonitorModelOriginal) == JSON.stringify(this.businessMonitorModel)  && count == 0) {
      this.alertService.showMessage('Info', 'Nothing to update', MessageSeverity.info);

    } else {
      this.validationfailed = false;

      if ((this.businessMonitorModel.fileNumber == undefined || this.businessMonitorModel.fileNumber == null || this.businessMonitorModel.fileNumber == "") ||
       
        (this.businessMonitorModel.business_changed == undefined || this.businessMonitorModel.business_changed == null) ||
        // (this.businessMonitorModel.oldBusinesses == undefined || this.businessMonitorModel.oldBusinesses == null || this.businessMonitorModel.oldBusinesses == "") ||
        (this.businessMonitorModel.isbuinessDiversified == undefined || this.businessMonitorModel.isbuinessDiversified == null) ||
        (this.businessMonitorModel.currentBusiness == undefined || this.businessMonitorModel.currentBusiness == null || this.businessMonitorModel.currentBusiness == "") ||
        (this.businessMonitorModel.isAlternativeSite == undefined || this.businessMonitorModel.isAlternativeSite == null) ||
        (this.businessMonitorModel.cityOut == undefined || this.businessMonitorModel.cityOut == null) ||
        (this.businessMonitorModel.gsbsPreviousIncome == undefined || this.businessMonitorModel.gsbsPreviousIncome == null) ||
        (this.businessMonitorModel.incomeStatus == undefined || this.businessMonitorModel.incomeStatus == null || this.businessMonitorModel.incomeStatus == "") ||
        (this.businessMonitorModel.businessSituation == undefined || this.businessMonitorModel.businessSituation == null || this.businessMonitorModel.businessSituation == "") ||
        (this.businessMonitorModel.businessStatus == undefined || this.businessMonitorModel.businessStatus == null || this.businessMonitorModel.businessStatus == "") ||
        (this.businessMonitorModel.businessStaff.status == undefined || this.businessMonitorModel.businessStaff.status == null || this.businessMonitorModel.businessStaff.status == "") ||
        (this.businessMonitorModel.businessStaff.number == undefined || this.businessMonitorModel.businessStaff.number == null) ||
        (this.businessMonitorModel.businessStaff.note == undefined || this.businessMonitorModel.businessStaff.note == null || this.businessMonitorModel.businessStaff.note == "") ||
        (this.businessMonitorModel.businessVehicle.purchased == undefined || this.businessMonitorModel.businessVehicle.purchased == null || this.businessMonitorModel.businessVehicle.purchased == "") ||
        (this.businessMonitorModel.businessVehicle.number == undefined || this.businessMonitorModel.businessVehicle.number == null) ||
        (this.businessMonitorModel.businessVehicle.note == undefined || this.businessMonitorModel.businessVehicle.note == null || this.businessMonitorModel.businessVehicle.note == "") ||
        (this.businessMonitorModel.businessStocks.status == undefined || this.businessMonitorModel.businessStocks.status == null || this.businessMonitorModel.businessStocks.status == "") ||
        (this.businessMonitorModel.businessStocks.number == undefined || this.businessMonitorModel.businessStocks.number == null) ||
        (this.businessMonitorModel.businessStocks.note == undefined || this.businessMonitorModel.businessStocks.note == null || this.businessMonitorModel.businessStocks.note == "") ||
        (this.businessMonitorModel.cilentele.status == undefined || this.businessMonitorModel.cilentele.status == null) ||
        (this.businessMonitorModel.cilentele.number == undefined || this.businessMonitorModel.cilentele.number == null) ||
        (this.businessMonitorModel.cilentele.note == undefined || this.businessMonitorModel.cilentele.note == null || this.businessMonitorModel.cilentele.note == "") ||
        (this.businessMonitorModel.machinaryEquipment.status == undefined || this.businessMonitorModel.machinaryEquipment.status == null) ||
        (this.businessMonitorModel.machinaryEquipment.number == undefined || this.businessMonitorModel.machinaryEquipment.number == null) ||
        (this.businessMonitorModel.machinaryEquipment.note == undefined || this.businessMonitorModel.machinaryEquipment.note == null || this.businessMonitorModel.machinaryEquipment.note == "") ||
        (this.businessMonitorModel.managementPractices.status == undefined || this.businessMonitorModel.managementPractices.status == null || this.businessMonitorModel.managementPractices.status == "") ||
        (this.businessMonitorModel.managementPractices.number == undefined || this.businessMonitorModel.managementPractices.number == null) ||
        (this.businessMonitorModel.managementPractices.note == undefined || this.businessMonitorModel.managementPractices.note == null || this.businessMonitorModel.managementPractices.note == "") ||
        (this.businessMonitorModel.summary == undefined || this.businessMonitorModel.summary == null || this.businessMonitorModel.summary == "")
      ) {
        this.alertService.showMessage('Altert', 'Please fill business related data correctly', MessageSeverity.warn);
        this.validationfailed = true;
      } else {

        const formData: FormData = new FormData();

        for (let i = 0; i < this.fileListToUpload.length; i++) {
          formData.append("file" + i, this.fileListToUpload[i], this.fileListToUpload[i].name);
        }

        

        formData.append('jsonString', JSON.stringify(this.businessMonitorModel));

        console.log("json",JSON.stringify(this.businessMonitorModel));


        this.buinsessMonitor.UpdateBusinessMonitor(formData).subscribe(
          response => {
            this.updatedatareponse = response;


            if (this.updatedatareponse.status == 200) {
              this.validationfailed = false;
              this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
              this.businessMonitorModel = new businessMonitorModel();
              this.personData = undefined; this.personModel = new PersonalData();
              this.updatedevent.emit(false);
              this.clear();
            } else {
              this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
            }
            console.log("reponse added", response);
          }
        )
      }
    }







  }

  validationfailed: boolean = false;
  adddatareponse: any;
  SubmitBusinessData() {
    this.validationfailed = false;
    console.log("business data", this.businessMonitorModel);


    if ((this.businessMonitorModel.fileNumber == undefined || this.businessMonitorModel.fileNumber == null || this.businessMonitorModel.fileNumber == "") ||
      (this.businessMonitorModel.monitor.monitor_Date == undefined || this.businessMonitorModel.monitor.monitor_Date == null) ||
      (this.businessMonitorModel.business_changed == undefined || this.businessMonitorModel.business_changed == null) ||
      (this.businessMonitorModel.oldBusinesses == undefined || this.businessMonitorModel.oldBusinesses == null || this.businessMonitorModel.oldBusinesses == "") ||
      (this.businessMonitorModel.isbuinessDiversified == undefined || this.businessMonitorModel.isbuinessDiversified == null) ||
      (this.businessMonitorModel.currentBusiness == undefined || this.businessMonitorModel.currentBusiness == null || this.businessMonitorModel.currentBusiness == "") ||
      (this.businessMonitorModel.isAlternativeSite == undefined || this.businessMonitorModel.isAlternativeSite == null) ||
      (this.businessMonitorModel.cityOut == undefined || this.businessMonitorModel.cityOut == null) ||
      (this.businessMonitorModel.gsbsPreviousIncome == undefined || this.businessMonitorModel.gsbsPreviousIncome == null) ||
      (this.businessMonitorModel.incomeStatus == undefined || this.businessMonitorModel.incomeStatus == null || this.businessMonitorModel.incomeStatus == "") ||
      (this.businessMonitorModel.businessSituation == undefined || this.businessMonitorModel.businessSituation == null || this.businessMonitorModel.businessSituation == "") ||
      (this.businessMonitorModel.businessStatus == undefined || this.businessMonitorModel.businessStatus == null || this.businessMonitorModel.businessStatus == "") ||
      (this.businessMonitorModel.businessStaff.status == undefined || this.businessMonitorModel.businessStaff.status == null || this.businessMonitorModel.businessStaff.status == "") ||
      (this.businessMonitorModel.businessStaff.number == undefined || this.businessMonitorModel.businessStaff.number == null) ||
      (this.businessMonitorModel.businessStaff.note == undefined || this.businessMonitorModel.businessStaff.note == null || this.businessMonitorModel.businessStaff.note == "") ||
      (this.businessMonitorModel.businessVehicle.purchased == undefined || this.businessMonitorModel.businessVehicle.purchased == null || this.businessMonitorModel.businessVehicle.purchased == "") ||
      (this.businessMonitorModel.businessVehicle.number == undefined || this.businessMonitorModel.businessVehicle.number == null) ||
      (this.businessMonitorModel.businessVehicle.note == undefined || this.businessMonitorModel.businessVehicle.note == null || this.businessMonitorModel.businessVehicle.note == "") ||
      (this.businessMonitorModel.businessStocks.status == undefined || this.businessMonitorModel.businessStocks.status == null || this.businessMonitorModel.businessStocks.status == "") ||
      (this.businessMonitorModel.businessStocks.number == undefined || this.businessMonitorModel.businessStocks.number == null) ||
      (this.businessMonitorModel.businessStocks.note == undefined || this.businessMonitorModel.businessStocks.note == null || this.businessMonitorModel.businessStocks.note == "") ||
      (this.businessMonitorModel.cilentele.status == undefined || this.businessMonitorModel.cilentele.status == null) ||
      (this.businessMonitorModel.cilentele.number == undefined || this.businessMonitorModel.cilentele.number == null) ||
      (this.businessMonitorModel.cilentele.note == undefined || this.businessMonitorModel.cilentele.note == null || this.businessMonitorModel.cilentele.note == "") ||
      (this.businessMonitorModel.machinaryEquipment.status == undefined || this.businessMonitorModel.machinaryEquipment.status == null) ||
      (this.businessMonitorModel.machinaryEquipment.number == undefined || this.businessMonitorModel.machinaryEquipment.number == null) ||
      (this.businessMonitorModel.machinaryEquipment.note == undefined || this.businessMonitorModel.machinaryEquipment.note == null || this.businessMonitorModel.machinaryEquipment.note == "") ||
      (this.businessMonitorModel.managementPractices.status == undefined || this.businessMonitorModel.managementPractices.status == null || this.businessMonitorModel.managementPractices.status == "") ||
      (this.businessMonitorModel.managementPractices.number == undefined || this.businessMonitorModel.managementPractices.number == null) ||
      (this.businessMonitorModel.managementPractices.note == undefined || this.businessMonitorModel.managementPractices.note == null || this.businessMonitorModel.managementPractices.note == "") ||
      (this.businessMonitorModel.summary == undefined || this.businessMonitorModel.summary == null || this.businessMonitorModel.summary == "")
    ) {
      this.alertService.showMessage('Altert', 'Please fill business related data correctly', MessageSeverity.warn);
      this.validationfailed = true;
    } else {
      this.businessMonitorModel.business_First_Buiness_Plan = 1;
      // this.businessMonitorModel.business_Management_Mode = 1;



      this.businessMonitorModel.business_Person_ID = this.personTypeId;
      this.businessMonitorModel.business_Type = 1

      //monitor data
      this.businessMonitorModel.monitor.monitor_Person_ID = this.personTypeId;
      var monitordate = new Date();
      this.businessMonitorModel.monitor.monitor_Date =this.datepipe.transform(monitordate, 'yyyy-MM-dd'); 
      this.businessMonitorModel.monitor.monitor_Update = "";
      this.businessMonitorModel.monitor.monitor_LRP_Responds_action = 1;
      this.businessMonitorModel.monitor.monitor_Remarks = "second monitor time";



      const formData: FormData = new FormData();

      for (let i = 0; i < this.fileListToUpload.length; i++) {
        formData.append("file" + i, this.fileListToUpload[i], this.fileListToUpload[i].name);
      }

      formData.append('jsonString', JSON.stringify(this.businessMonitorModel));


      this.validationfailed = false;
      this.buinsessMonitor.AddBusinessMonitor(formData).subscribe(
        response => {
          this.adddatareponse = response;


          if (this.adddatareponse.status == 200) {
            this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
            this.businessMonitorModel = new businessMonitorModel();
            this.personModel = undefined; this.personModel = new PersonalData();
            this.updatedevent.emit(false);
            this.clear();
          } else {
            this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
          }
          console.log("reponse added", response);
        }

      )
    }
  }


}
