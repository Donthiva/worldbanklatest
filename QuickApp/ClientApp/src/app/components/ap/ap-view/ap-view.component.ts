import { DatePipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Route } from '@angular/compiler/src/core';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { registerEscClick } from 'ngx-bootstrap/utils';
import { cpuUsage } from 'process';
import { ApProgressBOData } from 'src/app/models/app-add/ApProgressBOData';
import { BusinessGeneral, PersonalData, PhaseOut, ThreeWheelDriver } from 'src/app/models/app-add/personalData';
import { TrainingData } from 'src/app/models/app-add/TrainingData';
import { businessMonitorModel } from 'src/app/models/MoniorModels/businessMonitorModel';
import { EmployeeMonitor } from 'src/app/models/MoniorModels/employeeMonitorModel';
import { phaseOutMonitor } from 'src/app/models/MoniorModels/phaseOut';
import { ThreeWheeler, ThreeWheelMonitorImages } from 'src/app/models/MoniorModels/ThreeWheelMonitorModel';
import { SelectPersonTypes } from 'src/app/models/selectPersonType';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AddressService } from 'src/app/services/ap-services.ts/addressService';
import { BusinessService } from 'src/app/services/ap-services.ts/businessService';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { BankEndpoint } from 'src/app/services/masterdataservice/bankService';
import { PersonEndpoint } from 'src/app/services/masterdataservice/personService';
import { MonitorEndpoint } from 'src/app/services/monitor/monitorService';

@Component({
  selector: 'app-ap-view',
  templateUrl: './ap-view.component.html',
  styleUrls: ['./ap-view.component.scss']
})
export class ApViewComponent implements OnInit, OnChanges {
  @Input() personData: PersonalData;
  @Input() edit: boolean;

  @Input() IsView: boolean;


  @Output() updatedevent: EventEmitter<PersonalData> = new EventEmitter();

  personTypes: SelectPersonTypes;

  personModel: PersonalData;
  ApProgressBOModel: ApProgressBOData;
  selectedGenderType: number;
  selectedStreet: number;
  selectedBankName: number;
  selectedBankType: number;
  selectedBankAccount: number;
  selectedCurrentTypevalue: string;


  title = 'Locations in map';
  lat = 51.678418;
  lng = 7.809007;


  columns: any[] = [];
  rows: any[] = [];
  columns2: any[] = [];
  rows2: any[] = [];
  loadingIndicator: boolean;

  @ViewChild('indexTemplateapprogress', { static: true })
  indexTemplatecity: TemplateRef<any>;

  @ViewChild('actionsTemplateapprogress', { static: true })
  actionsTemplatecity: TemplateRef<any>;

  @ViewChild('indexTemplateTraining', { static: true })
  indexTemplatetraining: TemplateRef<any>;

  @ViewChild('actionsTemplateTraining', { static: true })
  actionsTemplatetraining: TemplateRef<any>;


  constructor(private Personservice: PersonEndpoint, private personservice: PersonEndpoint, private businessService: BusinessService, private addressService: AddressService, private bankservicedata: BankEndpoint, private alertService: AlertService, private configurations: ConfigurationService, private monitorservice: MonitorEndpoint,private translationService: AppTranslationService,private route:Router) {

    this.personTypes = new SelectPersonTypes();

    this.personModel = new PersonalData();


  }
  precatagory:string;
  age:number;
  selectedCar: number;
  cars = [
    { id: 1, name: 'Bussiness Person' },
    { id: 2, name: 'ThreeWheel Driver' },
    { id: 3, name: 'Employee' },
    { id: 4, name: 'Phase out' },
  ];

  personTypesarr: any = [];


  gender: any = [

  ]

  country: any = []

  states: any = []

  district: any = []

  City: any = []

  BankName: any = [

  ]


  BankType = [
    { id: 1, name: 'Leasing' },
    { id: 2, name: 'Finance' },
  ]

  BankBranch: any = [

  ]


  BusinessPlan: any = [
  ]


  BusinessType: any = [
  ]

  IsList = [
    { id: true, name: 'Yes' },
    { id: false, name: 'No' },
  ]

  CurrentType: number = 1;
  ngOnInit(): void {

    const gT = (key: string) => this.translationService.getTranslation(key);

    this.columns = [
      { prop: 'period', name: gT('APs.ApProgressBO.list.Period'), width: 100, cellTemplate: this.indexTemplatecity, canAutoResize: false },
      { prop: 'businessstauts', name: gT('APs.ApProgressBO.list.Businessstauts'), width: 320 }, 
      { prop: 'incomestatus', name: gT('APs.ApProgressBO.Incomestatus.'), width: 320 },  
      { prop: 'businesssituation', name: gT('APs.ApProgressBO.list.Businesssituation'), width: 320 }
      // { name: '', width: 250, cellTemplate: this.actionsTemplatecity, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];
    const gT2 = (key: string) => this.translationService.getTranslation(key);
    this.columns2 = [
      { prop: 'date', name: gT2('APs.TrainingData.list.date'), width: 100, cellTemplate: this.indexTemplatetraining, canAutoResize: false },
      { prop: 'nameOfTraining', name: gT2('APs.TrainingData.list.nameOfTraining'), width: 320 }, 
      { prop: 'generaldescription', name: gT2('APs.TrainingData.list.generaldescription'), width: 320 }
      // { prop: 'businesssituation', name: gT('APs.ApProgressBO.list.Businesssituation'), width: 320 },
      // { name: '', width: 250, cellTemplate: this.actionsTemplatecity, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];

    //this.loadAddressRelatedData();
    this.loadPeronData();

    this.LoadBusinessData();

    this.LoadMonitorPeriods();

    this.loadage();

   


  }




  jobEngagementList: any = [];
  GetAllJobEngagementTypes() {
    this.monitorservice.GetAllJobEngagement().subscribe(
      reponse => {
        this.jobEngagementList = reponse;
        console.log("Test GetAllJobEngagementTypes", reponse);

        console.log('monitor list',this.personModel.employeeMonitorList)

        if (this.personModel.employeeMonitorList != null) {
          this.personModel.employeeMonitorList.forEach(x =>
    
           x.jobengagementName = this.jobEngagementList.find(y=> y.id == x.jobengagementID).engagement
    
    
          )
        }
      }
    )
  }

  employeeMonitorListCustom = new Array<EmployeeMonitor>();
  ApProgressBOList = new Array<ApProgressBOData>();
  TrainingList=new Array<TrainingData>();
  currentTypeName: string
  genderName: string;
  personCountryName: string;
  personDistrictName: String;
  personCityName: string;
  bankNamevalue: string;
  bankbranchvalue: string;

  businessPlanvalue: string;
  businessTypevalue: string;
  IsEntitlementname: string;
  IsBankLoansname: string;
  IsOwnServicename: string;
  IsPawningJewellaryname: string;
  IsPartnerShipname: string;
  IsformalLoansname: string;
  IsBusinessChangedname: string;

  IsInterestOfFFixedDepositvalue: string;
  Isliveswithclosefamilyvalue: string;
  SocialWellBeingvalue: string;
  Isincomegeneratingsourcesvalue: string;


  apuserimage: string = "";


  openDoc(doc) {
    window.open(this.configurations.baseUrl + '/' + doc.path, "_blank");
  }


  loadAddressRelatedData() {
    this.addressService.GetAllCountries().subscribe(
      reponse => {
        this.country = reponse;
        console.log('country', this.country);

        this.personCountryName = (this.country.length > 0 && this.country != undefined && this.personModel.country != undefined) ? this.country.find(x => x.country_ID == this.personModel.country).country_Name : "";

        console.log('personCountryName', this.personCountryName);

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
        this.personDistrictName = (this.district.length > 0 && this.district != undefined && this.personModel.district != undefined) ? this.district.find(x => x.district_ID == this.personModel.district).district_Name : "";

      }
    )

  }


  loadGetAllCities(countrId: number, stateId: number, districtID: number) {

    this.addressService.GetAllCities(countrId, stateId, districtID).subscribe(
      reponse => {
        this.City = reponse;
        console.log('City', this.City);


        this.personCityName = (this.City.length > 0 && this.City != undefined && this.personModel.City != undefined) ? this.City.find(x => x.city_ID == this.personModel.City).city_Name : "";
      }
    )

  }

  viewanddownload(){

    this.route.navigate(['/appdf']);

  }



  ngOnChanges() {

    this.apuserimage = '';
    if (this.edit) {
      console.log("persondata", this.personData);
      this.personModel = this.personData;
      this.CurrentType = this.personData.PersonType
     



    }




    else if (this.IsView == true) {
      this.personModel = this.personData;
      this.CurrentType = this.personData.PersonType
      this.loadage();
      this.loadprecatagory();
      console.log("agenumber",this.age);



      console.log("person image data", this.personData)
      if (this.personData.apUserImage != null) {
        this.apuserimage = this.configurations.baseUrl + '/' + this.personData.apUserImage.path;
        console.log("userimagelink", this.apuserimage)
      }
      this.LoadMonitorPeriods();
      this.GetAllJobEngagementTypes();
      this.loadAddressRelatedData();
      this.loadGetAllStates(this.personModel.country);

      this.loadGetAllDistricts(this.personModel.country, this.personModel.state);

      this.loadGetAllCities(this.personModel.country, this.personModel.state, this.personModel.district);



      this.LoadAllBankNames(this.personModel.BankName);



      this.LoadAllBankBranchers(this.personModel.BankBranch);

      this.loadApProgressBOData(this.personData.Person_ID);

      this.loadTrainingData(this.personData.Person_ID);
    }



    else {
      this.personModel = new PersonalData();
    }



    this.currentTypeName = (this.personTypesarr != undefined && this.personModel.PersonType != undefined) ? this.personTypesarr.find(x => x.person_Type_ID == this.personModel.PersonType).type : "";

    this.genderName = (this.gender != undefined && this.personModel.Person_Gender != undefined) ? this.gender.find(x => x.user_Gender_ID == this.personModel.Person_Gender).user_Gender : "";


    // this.bankNamevalue = (this.BankName != undefined && this.personModel.BankName != undefined) ? this.BankName.find(x => x.bank_ID == this.personModel.BankName).bank_Name : "";

    // this.bankbranchvalue = (this.BankBranch != undefined && this.personModel.BankBranch != undefined) ? this.BankBranch.find(x => x.bank_Branch_ID == this.personModel.BankBranch).bank_Branch_Description : "";

    this.businessPlanvalue = (this.BusinessPlan != undefined && this.personModel.businessGeneral.BusinessPlanId != undefined) ? this.BusinessPlan.find(x => x.buiness_Plan_ID == this.personModel.businessGeneral.BusinessPlanId).buiness_Plan_Description : "";

    this.businessTypevalue = (this.BusinessType != undefined && this.personModel.businessGeneral.BusinessTypeId != undefined) ? this.BusinessType.find(x => x.id == this.personModel.businessGeneral.BusinessTypeId).businessTypeName : "";

    this.IsEntitlementname = (this.IsList != undefined && this.personModel.businessGeneral.IsEntilementFund != undefined) ? this.IsList.find(x => x.id == this.personModel.businessGeneral.IsEntilementFund).name : "";

    this.IsBankLoansname = (this.IsList != undefined && this.personModel.businessGeneral.IsBankLoans != undefined) ? this.IsList.find(x => x.id == this.personModel.businessGeneral.IsBankLoans).name : "";

    this.IsOwnServicename = (this.IsList != undefined && this.personModel.businessGeneral.IsOwnService != undefined) ? this.IsList.find(x => x.id == this.personModel.businessGeneral.IsOwnService).name : "";

    this.IsOwnServicename = (this.IsList != undefined && this.personModel.businessGeneral.IsOwnService != undefined) ? this.IsList.find(x => x.id == this.personModel.businessGeneral.IsOwnService).name : "";

    this.IsPawningJewellaryname = (this.IsList != undefined && this.personModel.businessGeneral.IsPawningJewellary != undefined) ? this.IsList.find(x => x.id == this.personModel.businessGeneral.IsPawningJewellary).name : "";

    this.IsPartnerShipname = (this.IsList != undefined && this.personModel.businessGeneral.IsPartnerShip != undefined) ? this.IsList.find(x => x.id == this.personModel.businessGeneral.IsPartnerShip).name : "";

    this.IsformalLoansname = (this.IsList != undefined && this.personModel.businessGeneral.IsformalLoans != undefined) ? this.IsList.find(x => x.id == this.personModel.businessGeneral.IsformalLoans).name : "";

    this.IsBusinessChangedname = (this.IsList != undefined && this.personModel.businessGeneral.IsBusinessChanged != undefined) ? this.IsList.find(x => x.id == this.personModel.businessGeneral.IsBusinessChanged).name : "";

    this.IsInterestOfFFixedDepositvalue = (this.IsList != undefined && this.personModel.phaseOut.IsInterestOfFixedDeposit != undefined) ? this.IsList.find(x => x.id == this.personModel.phaseOut.IsInterestOfFixedDeposit).name : "";

    this.Isliveswithclosefamilyvalue = (this.IsList != undefined && this.personModel.phaseOut.IsLivesWithcloseFamily != undefined) ? this.IsList.find(x => x.id == this.personModel.phaseOut.IsLivesWithcloseFamily).name : "";

    this.Isliveswithclosefamilyvalue = (this.IsList != undefined && this.personModel.phaseOut.IsLivesWithcloseFamily != undefined) ? this.IsList.find(x => x.id == this.personModel.phaseOut.IsLivesWithcloseFamily).name : "";

    this.Isincomegeneratingsourcesvalue = (this.IsList != undefined && this.personModel.phaseOut.IsIncomeGeneratingSources != undefined) ? this.IsList.find(x => x.id == this.personModel.phaseOut.IsIncomeGeneratingSources).name : "";




    if (this.personModel.employeeMonitorList != null) {
      this.personModel.employeeMonitorList.forEach(x =>

        this.getAllEmployeeMonitorImages(x, x.employment_ID)


      )
    }


    if (this.personModel.businessMonitorList != null) {
      this.personModel.businessMonitorList.forEach(x =>

        this.getAllBusinessImages(x, x.business_ID)


      )
    }

    if (this.personModel.threeWheelMonitorList != null) {
      this.personModel.threeWheelMonitorList.forEach(x =>

        this.getAllThreeWheel(x, x.id)


      )
    }



    if (this.personModel.phaseOutMonitorList != null) {
      this.personModel.phaseOutMonitorList.forEach(x =>

        this.phaseOutImagges(x, x.id)


      )
    }



  }


  MonitorPeriod: any = [];
  LoadMonitorPeriods() {

    this.personservice.GetMonitorPeriod().subscribe(
      reponse => {
        console.log("LoadMonitorPeriods", reponse);
        this.MonitorPeriod = reponse as any;

        if (!(this.personModel.phaseOutMonitorList == null)) {
          this.personModel.phaseOutMonitorList.forEach(x => x.monitorPeriod = this.MonitorPeriod.find(y => y.id == x.monitorPeriodId).peroildName);
        }


      }
    )

  }


  getAllEmployeeMonitorImages(x: EmployeeMonitor, empId) {

    this.monitorservice.GetAllEmployeeMonitorImages(empId).subscribe(
      reponse => {
        var anyModel = reponse as any;
        console.log('empImgs', reponse);
        anyModel.employeeMonitorImages.length > 0 ? anyModel.employeeMonitorImages.forEach(element => {
          element != null ? element.path = this.configurations.baseUrl + '/' + element.path : null
        }) : null;
        anyModel.employeeMonitorDocuments.length > 0 ? anyModel.employeeMonitorDocuments.forEach(element => {
          element != null ? element.path = this.configurations.baseUrl + '/' + element.path : null
        }) : null;
        anyModel.employeeMonitorVideos.length > 0 ? anyModel.employeeMonitorVideos.forEach(element => {
          element != null ? element.path = this.configurations.baseUrl + '/' + element.path : null
        }) : null;

        x.employeeMonitorImages = anyModel.employeeMonitorImages.length > 0 ? anyModel.employeeMonitorImages : null;
        x.employeeMonitorVideos = anyModel.employeeMonitorVideos.length > 0 ? anyModel.employeeMonitorVideos : null;
        x.employeeMonitorDocuments = anyModel.employeeMonitorDocuments.length > 0 ? anyModel.employeeMonitorDocuments : null;

        console.log("person model URL", this.personModel)
      }
    )
  }


  getAllBusinessImages(x: businessMonitorModel, busiId) {

    this.monitorservice.GetAllBusinessMonitorImages(busiId).subscribe(
      reponse => {
        var anyModel = reponse as any;
        console.log('empImgs', reponse);
        anyModel.businessMonitorImages.length > 0 ? anyModel.businessMonitorImages.forEach(element => {
          element != null ? element.path = this.configurations.baseUrl + '/' + element.path : null
        }) : null;
        anyModel.businessMonitorDocuments.length > 0 ? anyModel.businessMonitorDocuments.forEach(element => {
          element != null ? element.path = this.configurations.baseUrl + '/' + element.path : null
        }) : null;
        anyModel.businessMonitorVideos.length > 0 ? anyModel.businessMonitorVideos.forEach(element => {
          element != null ? element.path = this.configurations.baseUrl + '/' + element.path : null
        }) : null;

        x.businessMonitorImages = anyModel.businessMonitorImages.length > 0 ? anyModel.businessMonitorImages : null;
        x.businessMonitorVideos = anyModel.businessMonitorVideos.length > 0 ? anyModel.businessMonitorVideos : null;
        x.businessMonitorDocuments = anyModel.businessMonitorDocuments.length > 0 ? anyModel.businessMonitorDocuments : null;

        console.log("person model URL", this.personModel)
      }
    )
  }


  getAllThreeWheel(x: ThreeWheeler, threeId) {

    this.monitorservice.GetAllThreeWheelMonitorImages(threeId).subscribe(
      reponse => {
        var anyModel = reponse as any;
        console.log('empImgs', reponse);
        anyModel.threeWheelMonitorImages.length > 0 ? anyModel.threeWheelMonitorImages.forEach(element => {
          element != null ? element.path = this.configurations.baseUrl + '/' + element.path : null
        }) : null;
        anyModel.threeWheelMonitorDocuments.length > 0 ? anyModel.threeWheelMonitorDocuments.forEach(element => {
          element != null ? element.path = this.configurations.baseUrl + '/' + element.path : null
        }) : null;
        anyModel.threeWheelMonitorVideos.length > 0 ? anyModel.threeWheelMonitorVideos.forEach(element => {
          element != null ? element.path = this.configurations.baseUrl + '/' + element.path : null
        }) : null;

        x.threeWheelMonitorImages = anyModel.threeWheelMonitorImages.length > 0 ? anyModel.threeWheelMonitorImages : null;
        x.threeWheelMonitorVideos = anyModel.threeWheelMonitorVideos.length > 0 ? anyModel.threeWheelMonitorVideos : null;
        x.threeWheelMonitorDocuments = anyModel.threeWheelMonitorDocuments.length > 0 ? anyModel.threeWheelMonitorDocuments : null;

        console.log("person model URL", this.personModel)
      }
    )
  }

  phaseOutImagges(x: phaseOutMonitor, threeId) {
    this.monitorservice.GetAllPhaseOutMonitorImages(threeId).subscribe(
      reponse => {
        var anyModel = reponse as any;
        console.log('empImgs', reponse);
        anyModel.phaseOutMonitorImages.length > 0 ? anyModel.phaseOutMonitorImages.forEach(element => {
          element != null ? element.path = this.configurations.baseUrl + '/' + element.path : null
        }) : null;
        anyModel.phaseOutMonitorDocuments.length > 0 ? anyModel.phaseOutMonitorDocuments.forEach(element => {
          element != null ? element.path = this.configurations.baseUrl + '/' + element.path : null
        }) : null;
        anyModel.phaseOutMonitorVideos.length > 0 ? anyModel.phaseOutMonitorVideos.forEach(element => {
          element != null ? element.path = this.configurations.baseUrl + '/' + element.path : null
        }) : null;

        x.phaseOutMonitorImages = anyModel.phaseOutMonitorImages.length > 0 ? anyModel.phaseOutMonitorImages : null;
        x.phaseOutMonitorVideos = anyModel.phaseOutMonitorVideos.length > 0 ? anyModel.phaseOutMonitorVideos : null;
        x.phaseOutMonitorDocuments = anyModel.phaseOutMonitorDocuments.length > 0 ? anyModel.phaseOutMonitorDocuments : null;

        console.log("person model URL", this.personModel)
      }
    )
  }



  updataData() {
    this.updatedevent.emit(this.personModel);
  }

  adddatareponse: any;
  public addPersonData() {

    if ((this.personModel.Person_Name == undefined || this.personModel.Person_Name == null || this.personModel.Person_Name == "") ||
      (this.personModel.Person_NIC == undefined || this.personModel.Person_NIC == null || this.personModel.Person_NIC == "") ||
      (this.personModel.Person_NIC == undefined || this.personModel.Person_NIC == null || this.personModel.Person_NIC == "") ||
      (this.personModel.Person_File_number == undefined || this.personModel.Person_File_number == null || this.personModel.Person_File_number == "") ||
      (this.personModel.Person_DOB == undefined || this.personModel.Person_DOB == null || this.personModel.Person_DOB == "") ||
      (this.personModel.PersonType == undefined || this.personModel.PersonType == null) ||
      (this.personModel.Person_Gender == undefined || this.personModel.Person_Gender == null) ||
      (this.personModel.addressNo == undefined || this.personModel.addressNo == null || this.personModel.addressNo == "") ||
      (this.personModel.addressStreet == undefined || this.personModel.addressStreet == null) ||
      (this.personModel.country == undefined || this.personModel.country == null) ||
      (this.personModel.state == undefined || this.personModel.state == null) ||
      (this.personModel.district == undefined || this.personModel.district == null) ||
      (this.personModel.City == undefined || this.personModel.City == null) ||
      (this.personModel.Person_Contact_Number == undefined || this.personModel.Person_Contact_Number == null) ||
      (this.personModel.Home_Contact_Number == undefined || this.personModel.Home_Contact_Number == null) ||
      (this.personModel.BankName == undefined || this.personModel.BankName == null) ||
      (this.personModel.BankBranch == undefined || this.personModel.BankBranch == null) ||
      (this.personModel.AccountNumber == undefined || this.personModel.AccountNumber == null || this.personModel.AccountNumber == "") ||
      (this.personModel.AccountNumber == undefined || this.personModel.AccountNumber == null || this.personModel.AccountNumber == "")
    ) {

      this.alertService.showMessage('Validation Failed', 'Please fill general information correctly', MessageSeverity.warn);

    } else if (this.personModel.PersonType == 1) {
      if ((this.personModel.Salary == undefined || this.personModel.Salary == null) || (this.personModel.JobRole == null || this.personModel.JobRole == undefined) || (this.personModel.Employer == null || this.personModel.Employer == undefined)) {
        this.alertService.showMessage('Validation Failed', 'Please fill employee specific information correctly', MessageSeverity.warn);
      } else {
        this.personModel.threeWheelDriver = new ThreeWheelDriver();
        this.personModel.businessGeneral = new BusinessGeneral();
        this.personModel.phaseOut = new PhaseOut();
        console.log("post data", this.personModel);
        this.Personservice.AddPersonData(this.personModel).subscribe(
          response => {
            console.log(response);

            this.adddatareponse = response;
            console.log("reponse", this.adddatareponse);

            if (this.adddatareponse.status == 200) {
              this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
              this.personModel = new PersonalData();

            } else {
              this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
            }
          }
        )
      }
    } else if (this.personModel.PersonType == 2) {
      if ((this.personModel.businessGeneral.BusinessPlanId == null || this.personModel.businessGeneral.BusinessPlanId == undefined) ||
        (this.personModel.businessGeneral.BusinessTypeId == null || this.personModel.businessGeneral.BusinessTypeId == undefined) ||
        (this.personModel.businessGeneral.GSBSPreviousIncome == null || this.personModel.businessGeneral.GSBSPreviousIncome == undefined) ||
        (this.personModel.businessGeneral.IsBankLoans == null || this.personModel.businessGeneral.IsBankLoans == undefined) ||
        (this.personModel.businessGeneral.IsEntilementFund == null || this.personModel.businessGeneral.IsEntilementFund == undefined) ||
        (this.personModel.businessGeneral.IsOwnService == null || this.personModel.businessGeneral.IsOwnService == undefined) ||
        (this.personModel.businessGeneral.IsPartnerShip == null || this.personModel.businessGeneral.IsPartnerShip == undefined) ||
        (this.personModel.businessGeneral.IsPawningJewellary == null || this.personModel.businessGeneral.IsPawningJewellary == undefined) ||
        (this.personModel.businessGeneral.IsformalLoans == null || this.personModel.businessGeneral.IsformalLoans == undefined) ||
        (this.personModel.businessGeneral.PreviousBusinessAtGoodShed == null || this.personModel.businessGeneral.PreviousBusinessAtGoodShed == undefined || this.personModel.businessGeneral.PreviousBusinessAtGoodShed == "") ||
        (this.personModel.businessGeneral.ReallocatedMonthandyear == null || this.personModel.businessGeneral.ReallocatedMonthandyear == undefined || this.personModel.businessGeneral.ReallocatedMonthandyear == "")
      ) {
        this.alertService.showMessage('Validation Failed', 'Please fill business person specific information correctly', MessageSeverity.warn);
      } else {
        this.personModel.Salary = 0;
        this.personModel.JobRole = "";
        this.personModel.Employer = "";
        this.personModel.threeWheelDriver = new ThreeWheelDriver();
        this.personModel.phaseOut = new PhaseOut();
        console.log("post data", this.personModel)
        this.Personservice.AddPersonData(this.personModel).subscribe(
          response => {
            console.log(response);

            this.adddatareponse = response;
            console.log("reponse", this.adddatareponse);

            if (this.adddatareponse.status == 200) {
              this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
              this.personModel = new PersonalData();
            } else {
              this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
            }
          }
        )
      }
    } else if (this.personModel.PersonType == 3) {
      if (
        (this.personModel.threeWheelDriver.EngagementAtGSBS == null || this.personModel.threeWheelDriver.EngagementAtGSBS == undefined || this.personModel.threeWheelDriver.EngagementAtGSBS == "") ||
        (this.personModel.threeWheelDriver.MonthlyIncomeGSBS == null || this.personModel.threeWheelDriver.MonthlyIncomeGSBS == undefined) ||
        (this.personModel.threeWheelDriver.initialParkAtGSBS == null || this.personModel.threeWheelDriver.initialParkAtGSBS == undefined || this.personModel.threeWheelDriver.initialParkAtGSBS == "")
      ) {
        this.alertService.showMessage('Validation Failed', 'Please fill threewheel driver specific information correctly', MessageSeverity.warn);
      } else {
        this.personModel.Salary = 0;
        this.personModel.JobRole = "";
        this.personModel.Employer = "";
        this.personModel.businessGeneral = new BusinessGeneral();
        this.personModel.phaseOut = new PhaseOut();
        console.log("post data", this.personModel)
        this.Personservice.AddPersonData(this.personModel).subscribe(
          response => {
            console.log(response);

            this.adddatareponse = response;
            console.log("reponse", this.adddatareponse);

            if (this.adddatareponse.status == 200) {
              this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
              this.personModel = new PersonalData();
            } else {
              this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
            }
          }
        )
      }
    } else if (this.personModel.PersonType == 4) {
      if (
        (this.personModel.phaseOut.DecisionMade == null || this.personModel.phaseOut.DecisionMade == undefined || this.personModel.phaseOut.DecisionMade == "") ||
        (this.personModel.phaseOut.fileNumber == null || this.personModel.phaseOut.fileNumber == undefined || this.personModel.phaseOut.fileNumber == "") ||
        (this.personModel.phaseOut.IsIncomeGeneratingSources == null || this.personModel.phaseOut.IsIncomeGeneratingSources == undefined) ||
        (this.personModel.phaseOut.IsInterestOfFixedDeposit == null || this.personModel.phaseOut.IsInterestOfFixedDeposit == undefined) ||
        (this.personModel.phaseOut.IsLivesWithcloseFamily == null || this.personModel.phaseOut.IsLivesWithcloseFamily == undefined) ||
        (this.personModel.phaseOut.MonthAndYear == null || this.personModel.phaseOut.MonthAndYear == undefined || this.personModel.phaseOut.MonthAndYear == "") ||
        (this.personModel.phaseOut.PersonID == null || this.personModel.phaseOut.PersonID == undefined) ||
        (this.personModel.phaseOut.PlanedBusiness == null || this.personModel.phaseOut.PlanedBusiness == undefined || this.personModel.phaseOut.PlanedBusiness == "") ||
        (this.personModel.phaseOut.ReasonForPhaseOut == null || this.personModel.phaseOut.ReasonForPhaseOut == undefined || this.personModel.phaseOut.ReasonForPhaseOut == "") ||
        (this.personModel.phaseOut.Situation == null || this.personModel.phaseOut.Situation == undefined || this.personModel.phaseOut.Situation == "") ||
        (this.personModel.phaseOut.SocialWellBeing == null || this.personModel.phaseOut.SocialWellBeing == undefined || this.personModel.phaseOut.SocialWellBeing == "") ||
        (this.personModel.phaseOut.UseOfEntileFund == null || this.personModel.phaseOut.UseOfEntileFund == undefined || this.personModel.phaseOut.UseOfEntileFund == "")

      ) {
        this.alertService.showMessage('Validation Failed', 'Please fill phase out specific information correctly', MessageSeverity.warn);
      } else {
        this.personModel.Salary = 0;
        this.personModel.JobRole = "";
        this.personModel.Employer = "";
        this.personModel.businessGeneral = new BusinessGeneral();
        this.personModel.threeWheelDriver = new ThreeWheelDriver();
        console.log("post data", this.personModel)
        this.Personservice.AddPersonData(this.personModel).subscribe(
          response => {
            console.log(response);

            this.adddatareponse = response;
            console.log("reponse", this.adddatareponse);

            if (this.adddatareponse.status == 200) {
              this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
              this.personModel = new PersonalData();
            } else {
              this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
            }
          }
        )
      }

    }


    console.log('personal Data', this.personModel)

    // this.Personservice.AddPersonData(this.personModel).subscribe(
    //   response=>{
    //     console.log(response);
    //   }
    // )

  }

  clear() {
    this.personModel = new PersonalData();
  }


  selectedCurrentType(data) {
    this.personModel.PersonType = data.person_Type_ID;
    this.CurrentType = data.person_Type_ID
  }



  selectedBank(data) {
    this.personModel.BankName = data.bank_ID
  }

  selectedBankBranch(data) {
    this.personModel.BankBranch = data.bank_Branch_ID
  }

  selectedGender(data) {
    this.personModel.Person_Gender = data.user_Gender_ID;
    console.log("gender", data);
  }

  selectedCountry(data) {
    this.personModel.country = data.country_ID;
  }

  selectedState(data) {
    this.personModel.state = data.states_ID
  }

  selectedDistrict(data) {
    this.personModel.district = data.district_ID
  }


  selectedCity(data) {
    this.personModel.City = data.city_ID
  }

  selectedBusinessPlan(data) {
    this.personModel.businessGeneral.BusinessPlanId = data.buiness_Plan_ID;
  }

  selectedBusinessType(data) {
    this.personModel.businessGeneral.BusinessTypeId = data.id;
  }


  selectedIsEntilementFund(data) {
    console.log("data is entiltefund", data)
    this.personModel.businessGeneral.IsEntilementFund = data.id == true ? true : false;
  }

  selectedIsBankLoans(data) {
    this.personModel.businessGeneral.IsBankLoans = data.id == true ? true : false;
  }


  selectedIsOwnService(data) {
    this.personModel.businessGeneral.IsOwnService = data.id == true ? true : false;
  }


  selectedIsPawningJewellary(data) {
    this.personModel.businessGeneral.IsPawningJewellary = data.id == true ? true : false;
  }

  selectedIsPartnerShip(data) {
    this.personModel.businessGeneral.IsPartnerShip = data.id == true ? true : false;
  }

  selectedIsformalLoans(data) {
    this.personModel.businessGeneral.IsformalLoans = data.id == true ? true : false;
  }


  selectedIsBusinessChanged(data) {
    this.personModel.businessGeneral.IsBusinessChanged = data.id == true ? true : false;
  }


  selectedInterestOfFFixedDeposit(data) {
    this.personModel.phaseOut.IsInterestOfFixedDeposit = data.id == true ? true : false;
  }


  selectedIncomegeneratingsources(data) {
    this.personModel.phaseOut.IsIncomeGeneratingSources = data.id == true ? true : false;
  }

  selectedLivesWithcloseFamily(data) {
    this.personModel.phaseOut.IsLivesWithcloseFamily = data.id == true ? true : false;
  }




  loadPeronData() {
    this.Personservice.GetGender().subscribe(
      reponse => {
        this.gender = reponse;
        console.log('gender', this.gender);
      }
    )


    this.Personservice.GetPersonTypes().subscribe(
      reponse => {
        this.personTypesarr = reponse;


        console.log('personTypesarr', this.personTypesarr);
      }
    )
  }


  loadApProgressBOData(Id){
  this.Personservice.GetApProgressBOData(Id).subscribe(
    response => {
      this.ApProgressBOList = response as Array<ApProgressBOData>;
      console.log('ApProgressBOList', this.ApProgressBOList);
      this.rows = this.ApProgressBOList;
    }
  )

  }

  loadTrainingData(Id){
    this.Personservice.GetTrainingData(Id).subscribe(
      response => {
        this.TrainingList = response as Array<TrainingData>;
        console.log('TrainingList', this.TrainingList);
        this.rows2 = this.TrainingList;
      }
    )
  
    }

loadage(){
  if (this.personModel.Person_DOB) {

    var today = new Date();
    var dateParts = this.personModel.Person_DOB.split("-");
    var birthDate = new Date(+dateParts[0], +dateParts[1] - 1, +dateParts[2]);
     this.age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        this.age--;
    }
    console.log(this.personModel.businessGeneral.GSBSPreviousIncome);


  }
}

loadprecatagory(){
  if(this.personModel.previousTypeId==0||this.personModel.previousTypeId==1)
  this.precatagory="employee";
}




  LoadAllBankNames(Id) {
    this.bankservicedata.GetAllBankNamesAll().subscribe(
      reponse => {
        this.BankName = reponse;
        console.log('BankName', this.BankName);

        this.bankNamevalue = (this.BankName != undefined && this.personModel.BankName != undefined) ? this.BankName.find(x => x.bank_ID == Id).bank_Name : "";

      }
    )
  }



  LoadAllBankBranchers(Id) {

    this.bankservicedata.GetAllBankBranch(Id).subscribe(
      response => {
        this.BankBranch = response;
        console.log('BankBranch', this.BankBranch);
        this.bankbranchvalue = (this.BankBranch != undefined && this.personModel.BankBranch != undefined) ? this.BankBranch.find(x => x.bank_Branch_ID == this.personModel.BankBranch).bank_Branch_Description : "";

      }
    )
  }





  LoadBusinessData() {
    this.businessService.GetAllBusinessPlans().subscribe(
      reponse => {
        this.BusinessPlan = reponse;
        console.log('BusinessPlan', this.BusinessPlan);
      }
    )

    this.businessService.GetAllBusinessTypes().subscribe(
      reponse => {
        this.BusinessType = reponse;
        console.log('BusinessType', this.BusinessType);
      }
    )
  }








}
