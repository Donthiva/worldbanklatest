import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { id } from '@swimlane/ngx-datatable';
import { url } from 'inspector';
import { registerEscClick } from 'ngx-bootstrap/utils';
import { NgxSpinnerService } from 'ngx-spinner';
import { BusinessGeneral, PersonalData, PhaseOut, ThreeWheelDriver, Vulnerability } from 'src/app/models/app-add/personalData';
import { SelectPersonTypes } from 'src/app/models/selectPersonType';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AddressService } from 'src/app/services/ap-services.ts/addressService';
import { BusinessService } from 'src/app/services/ap-services.ts/businessService';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { BankEndpoint } from 'src/app/services/masterdataservice/bankService';
import { PersonEndpoint } from 'src/app/services/masterdataservice/personService';

@Component({
  selector: 'app-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.scss']
})
export class AddAppComponent implements OnInit, OnChanges {
  @Input() personData: PersonalData;
  @Input() edit: boolean;

  @Input() IsView: boolean;

  @Input() ValidatoinFailed: boolean;


  @Output() updatedevent: EventEmitter<PersonalData> = new EventEmitter();

  @Output() loadApData: EventEmitter<boolean> = new EventEmitter();

  @Output() clearEdit: EventEmitter<boolean> = new EventEmitter();


  personTypes: SelectPersonTypes;

  validationfailed = false;

  personModel: PersonalData;
  selectedGenderType: number;
  selectedStreet: number;
  selectedBankName: number;
  selectedBankType: number;
  selectedBankAccount: number;


  IsVulnerable: boolean = false;



  selectedCurrentTypevalue: string;


  constructor(private Personservice: PersonEndpoint, private businessService: BusinessService,
    private addressService: AddressService, private bankservicedata: BankEndpoint,
    private alertService: AlertService, private spinner: NgxSpinnerService, private configurations: ConfigurationService) {

    this.personTypes = new SelectPersonTypes();

    this.personModel = new PersonalData();
  }


  selectedCar: number;
  cars = [
    { id: 1, name: 'Bussiness Person' },
    { id: 2, name: 'ThreeWheel Driver' },
    { id: 3, name: 'Employee' },
    { id: 4, name: 'Phase out' },
  ];

  decisionMade =[
    { id: 'EAC', name: 'EAC' },
    { id: 'After business preparation', name: 'After business preparation' }
  ]


  reloacatedList = [
    {
      id: 'Within the Kandy City Limit',name: 'Within the Kandy City Limit',
    },
    {
      id: 'Outside the Kandy City Limit', name:'Outside the Kandy City Limit',
    }
  ]


  martialStatus: any = [

  ]



  EducationLevel: any = [

  ]


  Relocation: any = [

  ]

  personTypesarr: any = [];

  personPreviouTypesarr: any = [];


  gender: any = [

  ]

  country: any = []

  states: any = []

  district: any = []

  City: any = []

  BankName: any = [

  ]


  BankType = [
  ];

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
  PreviousType: number = 0;
  ngOnInit(): void {

    this.BankTypeId = undefined;

    this.loadAddressRelatedData();
    this.loadPeronData();
    this.LoadBankData();
    this.LoadBusinessData();
    this.getAllVulnerabilityLevels();
    this.getAllvulnerabilityTypes();
    this.getAllEducationTypes();
    this.getAllMartialStatus();
    this.getAllRelocation();
  }

  apuserimage: string = '';
  ngOnChanges() {
    this.IsVulnerable = false;
    if (this.edit) {
      console.log("persondata", this.personData);
      this.personModel = this.personData;
      this.CurrentType = this.personData.PersonType;
      this.userImageUrl = '';

      if (this.personData.vulnerability.vulnerability_ID != null) {
        this.IsVulnerable = this.personData.vulnerability.vulnerability_IS_Vulnerable;
      }
      this.apuserimage = this.configurations.baseUrl + '/' + this.personData.apUserImage.path;

      console.log("user image link", this.apuserimage)

      this.validationfailed = this.ValidatoinFailed;
      this.loadAddressRelatedData();
      this.loadGetAllStates(this.personModel.country);

      this.loadGetAllDistricts(this.personModel.country, this.personModel.state);

      this.loadGetAllCities(this.personModel.country, this.personModel.state, this.personModel.district);


      this.LoadBankData();
      this.LoadAllBankNameAll(this.personModel.BankName)

    }
    else if (this.IsView == true) {
      this.personModel = this.personData;
      this.CurrentType = this.personData.PersonType
    }

    else {
      this.personModel = new PersonalData();
    }

  }

  selectedVulnerabilityType(val) {
    this.personModel.vulnerability.vulnerability_Type = val.vulnerability_Type_ID;
  }

  selectedVulnerabilityLevel(val) {
    this.personModel.vulnerability.vulnerability_Level = val.vulnerability_Level_ID;
  }

  vulnerabilityLevles: any = [];
  getAllVulnerabilityLevels() {
    this.Personservice.GetAllVulnerabilityLevel().subscribe(
      reponse => {
        this.vulnerabilityLevles = reponse;
        console.log("getAllVulnerabilityLevels", this.vulnerabilityLevles);
      }
    )
  }

  vulnerabilityTypes: any = [];
  getAllvulnerabilityTypes() {
    this.Personservice.GetAllVulnerabilityTypes().subscribe(
      reponse => {
        this.vulnerabilityTypes = reponse;
        console.log("getAllvulnerabilityTypes", this.vulnerabilityTypes);
      }
    )
  }



  getAllEducationTypes() {
    this.Personservice.GetAllEducationTypes().subscribe(
      reponse => {
        this.EducationLevel = reponse;
        console.log("EducationLevel", this.EducationLevel);
      }
    )
  }



  getAllMartialStatus() {
    this.Personservice.GetAllMartialTypes().subscribe(
      reponse => {
        this.martialStatus = reponse;
        console.log("martialStatus", this.martialStatus);
      }
    )
  }



  getAllRelocation() {
    this.Personservice.GetAllReallocationTypes().subscribe(
      reponse => {
        this.Relocation = reponse;
        console.log("Relocation", this.Relocation);
      }
    )
  }






  SelectedIsVulnerable(val) {

    if (val != undefined) {
      this.IsVulnerable = val.id;


      if (this.IsVulnerable) {
        this.personModel.vulnerability.vulnerability_IS_Vulnerable = true;
      } else {
        this.personModel.vulnerability = new Vulnerability();
      }


    } else {
      this.personModel.vulnerability = new Vulnerability();
    }


  }

  fileListToUpload: Array<File> = [];

  userImageToUpload: File;


  handleFileInput(files: FileList) {

    for (let i = 0; i < files.length; i++) {
      this.fileListToUpload.push(files.item(i));
    }


  }



  BusinessFileListToUpload: Array<File> = [];
  handleBusinessPlan(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.BusinessFileListToUpload.push(files.item(i));
    }

    console.log("Business Files", this.BusinessFileListToUpload);
  }



  userImageUrl: string = "";
  handleUserImage(event) {
    this.userImageToUpload = event.target.files[0];
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.userImageUrl = event.target.result as string;
    }
  }



  deletefile(i) {
    console.log("delete file", i);
    this.fileListToUpload.splice(i, 1);
  }

  updataData() {
    this.personModel.employeeMonitorImages = [];
    this.personModel.employeeMonitorDocuments = [];
    this.personModel.employeeMonitorVideos = [];


    this.updatedevent.emit(this.personModel);
  }




  adddatareponse: any;
  public addPersonData() {
    this.validationfailed = false;


    if (this.IsVulnerable) {
      if ((this.personModel.vulnerability.vulnerability_Type == undefined || this.personModel.vulnerability.vulnerability_Type == null) ||
        (this.personModel.vulnerability.vulnerability_Level == undefined || this.personModel.vulnerability.vulnerability_Level == null) ||
        (this.personModel.vulnerability.otherVulnerability == undefined || this.personModel.vulnerability.otherVulnerability == null || this.personModel.vulnerability.otherVulnerability == "") ||
        (this.personModel.vulnerability.backgroundInformation == undefined || this.personModel.vulnerability.backgroundInformation == null || this.personModel.vulnerability.backgroundInformation == "") ||
        (this.personModel.vulnerability.initialProjectInput == undefined || this.personModel.vulnerability.initialProjectInput == null || this.personModel.vulnerability.initialProjectInput == "") ||
        (this.personModel.vulnerability.vulnerability_Remarks == undefined || this.personModel.vulnerability.vulnerability_Remarks == null || this.personModel.vulnerability.vulnerability_Remarks == "")) {

        this.alertService.showMessage('Error', 'Please Add Vulnerability Info Correctly', MessageSeverity.warn);
        this.validationfailed = true;
      }
    } else {
      this.personModel.vulnerability = null;
    }
    console.log("userimage", this.userImageToUpload);

    if (this.userImageToUpload == null || this.userImageToUpload == undefined) {
      this.alertService.showMessage('Error', 'Please Add User Image', MessageSeverity.warn);
      this.validationfailed = true;
    }


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
      (this.personModel.BankName == undefined || this.personModel.BankName == null) ||
      (this.personModel.BankBranch == undefined || this.personModel.BankBranch == null) ||
      (this.personModel.AccountNumber == undefined || this.personModel.AccountNumber == null || this.personModel.AccountNumber == "") ||
      (this.personModel.educationalLevelId == undefined || this.personModel.educationalLevelId == null) ||
      (this.personModel.businessOrLivelihoodRelocationId == undefined || this.personModel.businessOrLivelihoodRelocationId == null) ||
      (this.personModel.doa == undefined || this.personModel.doa == null) ||
      (this.personModel.martialStatusId == undefined || this.personModel.martialStatusId == null)) {

      this.alertService.showMessage('Validation Failed', 'Please fill general information correctly', MessageSeverity.warn);
      this.validationfailed = true;

    }


    if (this.personModel.PersonType == 1 && !this.validationfailed) {
      if ((this.personModel.employeeRealocatedMonthandYear == undefined || this.personModel.employeeBusinessLivelihoodRealocation == null)) {
        this.alertService.showMessage('Validation Failed', 'Please fill employee specific information correctly', MessageSeverity.warn);
        this.validationfailed = true;
      } else {


        if (this.IsVulnerable) {
          this.personModel.vulnerability.vulnerability_IS_Vulnerable = this.IsVulnerable;
        }


        const formData: FormData = new FormData();

        for (let i = 0; i < this.fileListToUpload.length; i++) {
          formData.append("file" + i, this.fileListToUpload[i], this.fileListToUpload[i].name);
        }


        formData.append('userImage', this.userImageToUpload, this.userImageToUpload.name)

        formData.append('jsonString', JSON.stringify(this.personModel));


        this.spinner.show();

        this.personModel.JobRole ='N/A';
        this.personModel.Employer ='N/A';
        this.personModel.Salary = 0;

        this.personModel.threeWheelDriver = new ThreeWheelDriver();
        this.personModel.businessGeneral = new BusinessGeneral();
        this.personModel.phaseOut = new PhaseOut();
        console.log("post data", this.personModel);
        this.validationfailed = false;
        this.Personservice.AddPersonData(formData).subscribe(
          response => {
            console.log(response);

            this.adddatareponse = response;
            console.log("reponse", this.adddatareponse);

            if (this.adddatareponse.status == 200) {
              this.spinner.hide();
              this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
              this.personModel = new PersonalData();
              this.BusinessFileListToUpload = [];
              this.loadApData.emit(true);
              this.userImageUrl = '';
            } else {
              this.spinner.hide();
              this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
            }
          }
        )
      }
    } else if ((this.personModel.PersonType == 2 || this.personModel.PersonType == 5) && !this.validationfailed) {
      if ((this.personModel.businessGeneral.BusinessPlanId == null || this.personModel.businessGeneral.BusinessPlanId == undefined) ||
        (this.personModel.businessGeneral.BusinessTypeId == null || this.personModel.businessGeneral.BusinessTypeId == undefined) ||
        (this.personModel.businessGeneral.GSBSPreviousIncome == null || this.personModel.businessGeneral.GSBSPreviousIncome == undefined) ||
        (this.personModel.businessGeneral.IsBankLoans == null || this.personModel.businessGeneral.IsBankLoans == undefined) ||
        (this.personModel.businessGeneral.IsEntilementFund == null || this.personModel.businessGeneral.IsEntilementFund == undefined) ||
        (this.personModel.businessGeneral.IsOwnService == null || this.personModel.businessGeneral.IsOwnService == undefined) ||
        (this.personModel.businessGeneral.IsPartnerShip == null || this.personModel.businessGeneral.IsPartnerShip == undefined) ||
        (this.personModel.businessGeneral.IsPawningJewellary == null || this.personModel.businessGeneral.IsPawningJewellary == undefined) ||
        (this.personModel.businessGeneral.IsformalLoans == null || this.personModel.businessGeneral.IsformalLoans == undefined) ||
        (this.personModel.businessGeneral.businessPlanNote == null || this.personModel.businessGeneral.businessPlanNote == undefined || this.personModel.businessGeneral.businessPlanNote == "") ||
        (this.personModel.businessGeneral.isFirstBusinessPlan == null || this.personModel.businessGeneral.isFirstBusinessPlan == undefined) ||
        (this.personModel.businessGeneral.ReallocatedMonthandyear == null || this.personModel.businessGeneral.ReallocatedMonthandyear == undefined || this.personModel.businessGeneral.ReallocatedMonthandyear == "")
      ) {
        this.alertService.showMessage('Validation Failed', 'Please fill business person specific information correctly', MessageSeverity.warn);
        this.validationfailed = true;
      } else {


        this.personModel.Salary = 0;
        this.personModel.businessGeneral.businessAPType = this.personModel.PersonType == 2 ? 1 : 2 ;
        this.personModel.JobRole = "";
        this.personModel.Employer = "";
        this.personModel.threeWheelDriver = new ThreeWheelDriver();
        this.personModel.phaseOut = new PhaseOut();
        console.log("post data", this.personModel)

        if (this.IsVulnerable) {
          this.personModel.vulnerability.vulnerability_IS_Vulnerable = this.IsVulnerable;
        }


        const formData: FormData = new FormData();

        for (let i = 0; i < this.fileListToUpload.length; i++) {
          formData.append("file" + i, this.fileListToUpload[i], this.fileListToUpload[i].name);
        }

        for (let i = 0; i < this.BusinessFileListToUpload.length; i++) {
          formData.append("BusinessFiles", this.BusinessFileListToUpload[i], this.BusinessFileListToUpload[i].name);
        }


        formData.append('userImage', this.userImageToUpload, this.userImageToUpload.name)

        formData.append('jsonString', JSON.stringify(this.personModel));
        this.spinner.show();

        this.validationfailed = false;
        this.Personservice.AddPersonData(formData).subscribe(
          response => {
            console.log(response);

            this.adddatareponse = response;
            console.log("reponse", this.adddatareponse);

            if (this.adddatareponse.status == 200) {
              this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
              this.spinner.hide();
              this.loadApData.emit(true);
              this.personModel = new PersonalData();
              this.BusinessFileListToUpload = [];
              this.userImageUrl = '';
            } else {
              this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
            }
          }
        )
      }
    } else if (this.personModel.PersonType == 3 && !this.validationfailed) {
      if (
        (this.personModel.threeWheelDriver.realocatedMonthandYear == null || this.personModel.threeWheelDriver.realocatedMonthandYear == undefined ) ||
        (this.personModel.threeWheelDriver.businessLivelihoodRealocation == null || this.personModel.threeWheelDriver.businessLivelihoodRealocation == undefined ) 
      ) {
        this.alertService.showMessage('Validation Failed', 'Please fill threewheel driver specific information correctly', MessageSeverity.warn);
        this.validationfailed = true;
      } else {
        this.personModel.Salary = 0;
        this.personModel.JobRole = "";
        this.personModel.Employer = "";
        this.personModel.businessGeneral = new BusinessGeneral();
        this.personModel.phaseOut = new PhaseOut();
        console.log("post data", this.personModel);

        if (this.IsVulnerable) {
          this.personModel.vulnerability.vulnerability_IS_Vulnerable = this.IsVulnerable;
        }


        this.personModel.threeWheelDriver.EngagementAtGSBS = 'N/A';
        this.personModel.threeWheelDriver.MonthlyIncomeGSBS = 0;
        this.personModel.threeWheelDriver.initialParkAtGSBS = 'N/A';

        this.personModel.JobRole ='N/A';
        this.personModel.Employer ='N/A';
        this.personModel.Salary = 0;

        const formData: FormData = new FormData();

        for (let i = 0; i < this.fileListToUpload.length; i++) {
          formData.append("file" + i, this.fileListToUpload[i], this.fileListToUpload[i].name);
        }


        formData.append('userImage', this.userImageToUpload, this.userImageToUpload.name)

        formData.append('jsonString', JSON.stringify(this.personModel));
        this.spinner.show();

        this.validationfailed = false;
        this.Personservice.AddPersonData(formData).subscribe(
          response => {
            console.log(response);
            this.BusinessFileListToUpload = [];
            this.adddatareponse = response;
            console.log("reponse", this.adddatareponse);

            if (this.adddatareponse.status == 200) {
              this.spinner.hide();
              this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
              this.personModel = new PersonalData();
              this.loadApData.emit(true);
              this.userImageUrl = '';
            } else {
              this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
            }
          }
        )
      }
    } else if (this.personModel.PersonType == 4 && !this.validationfailed) {
      if (
        (this.personModel.phaseOut.DecisionMade == null || this.personModel.phaseOut.DecisionMade == undefined || this.personModel.phaseOut.DecisionMade == "") ||
        (this.personModel.phaseOut.fileNumber == null || this.personModel.phaseOut.fileNumber == undefined || this.personModel.phaseOut.fileNumber == "") ||
        (this.personModel.phaseOut.MonthAndYear == null || this.personModel.phaseOut.MonthAndYear == undefined || this.personModel.phaseOut.MonthAndYear == "") ||
        (this.personModel.phaseOut.PlanedBusiness == null || this.personModel.phaseOut.PlanedBusiness == undefined || this.personModel.phaseOut.PlanedBusiness == "") ||
        (this.personModel.phaseOut.ReasonForPhaseOut == null || this.personModel.phaseOut.ReasonForPhaseOut == undefined || this.personModel.phaseOut.ReasonForPhaseOut == "") 
   
      ) {
        this.alertService.showMessage('Validation Failed', 'Please fill phase out specific information correctly', MessageSeverity.warn);
        this.validationfailed = true;
      } else {
        this.personModel.Salary = 0;
        this.personModel.JobRole = "";
        this.personModel.Employer = "";
        this.personModel.businessGeneral = new BusinessGeneral();
        this.personModel.threeWheelDriver = new ThreeWheelDriver();
        console.log("post data", this.personModel);

        if (this.IsVulnerable) {
          this.personModel.vulnerability.vulnerability_IS_Vulnerable = this.IsVulnerable;
        }


        const formData: FormData = new FormData();

        for (let i = 0; i < this.fileListToUpload.length; i++) {
          formData.append("file" + i, this.fileListToUpload[i], this.fileListToUpload[i].name);
        }


        formData.append('userImage', this.userImageToUpload, this.userImageToUpload.name)

        formData.append('jsonString', JSON.stringify(this.personModel));
        this.spinner.show();

        this.validationfailed = false;
        this.Personservice.AddPersonData(formData).subscribe(
          response => {
            console.log(response);
            this.BusinessFileListToUpload = [];
            this.adddatareponse = response;
            console.log("reponse", this.adddatareponse);


            if (this.adddatareponse.status == 200) {
              this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
              this.userImageUrl = '';
              this.spinner.hide();
              this.loadApData.emit(true);
              this.personModel = new PersonalData();
            } else {
              this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
            }
          }
        )
      }

    }




  }

  deleteBusinessfile(i) {
    console.log("delete file", i);
    this.BusinessFileListToUpload.splice(i, 1);
  }



  clear() {
    this.personModel = new PersonalData();
    this.validationfailed = false;
    this.userImageToUpload = undefined;
    this.userImageUrl = "";
    this.apuserimage = "";
    this.BankTypeId = undefined;
    this.clearEdit.emit(true);
  }


  selectedCurrentType(data) {

    if (data != undefined) {
      this.personModel.PersonType = data.person_Type_ID;
      this.CurrentType = data.person_Type_ID
    }


  }


  selectedPreviousType(data) {
    console.log("previous type", data)

    if (data != undefined) {
      this.personModel.previousTypeId = data.person_Type_ID;
      this.PreviousType = data.person_Type_ID;
    }


  }





  selectedBankBranch(data) {

    if (data != undefined) {
      this.personModel.BankBranch = data.bank_Branch_ID
    }


  }

  selectedGender(data) {

    if (data != undefined) {
      this.personModel.Person_Gender = data.user_Gender_ID;
      console.log("gender", data);
    }


  }

  selectedCountry(data) {

    if (data != undefined) {
      this.personModel.country = data.country_ID;

      this.loadGetAllStates(data.country_ID);

    }


  }

  selectedState(data) {
    console.log("data state", data);

    if (data != undefined) {
      this.personModel.state = data.states_ID;

      this.loadGetAllDistricts(this.personModel.country, data.states_ID);

    }


  }

  selectedDistrict(data) {

    if (data != undefined) {
      this.personModel.district = data.district_ID;

      this.loadGetAllCities(this.personModel.country, this.personModel.state, this.personModel.district);
    }


  }


  selectedCity(data) {

    if (data != undefined) {
      this.personModel.City = data.city_ID
    }


  }

  selectedBusinessPlan(data) {

    if (data != undefined) {
      this.personModel.businessGeneral.BusinessPlanId = data.buiness_Plan_ID;
    }


  }

  selectedBusinessType(data) {


    if (data != undefined) {
      this.personModel.businessGeneral.BusinessTypeId = data.id;
    }


  }


  selectedIsEntilementFund(data) {

    if (data != undefined) {
      console.log("data is entiltefund", data)
      this.personModel.businessGeneral.IsEntilementFund = data.id == true ? true : false;
    }


  }

  selectedIsBankLoans(data) {

    if (data != undefined) {
      this.personModel.businessGeneral.IsBankLoans = data.id == true ? true : false;
    }


  }


  selectedIsOwnService(data) {

    if (data != undefined) {
      this.personModel.businessGeneral.IsOwnService = data.id == true ? true : false;
    }


  }


  selectedIsPawningJewellary(data) {

    if (data != undefined) {
      this.personModel.businessGeneral.IsPawningJewellary = data.id == true ? true : false;
    }


  }

  selectedIsPartnerShip(data) {

    if (data != undefined) {
      this.personModel.businessGeneral.IsPartnerShip = data.id == true ? true : false;
    }


  }

  selectedIsformalLoans(data) {

    if (data != undefined) {
      this.personModel.businessGeneral.IsformalLoans = data.id == true ? true : false;
    }


  }


  selectedIsBusinessChanged(data) {
    if (data != undefined) {
      this.personModel.businessGeneral.IsBusinessChanged = data.id == true ? true : false;
    }

  }


  selectedInterestOfFFixedDeposit(data) {

    if (data != undefined) {
      this.personModel.phaseOut.IsInterestOfFixedDeposit = data.id == true ? true : false;
    }


  }


  selectedIncomegeneratingsources(data) {

    if (data != undefined) {
      this.personModel.phaseOut.IsIncomeGeneratingSources = data.id == true ? true : false;
    }


  }

  selectedLivesWithcloseFamily(data) {


    if (data != undefined) {
      this.personModel.phaseOut.IsLivesWithcloseFamily = data.id == true ? true : false;
    }


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


    this.Personservice.GetPreviousPersonTypes().subscribe(
      reponse => {
        this.personPreviouTypesarr = reponse;
        console.log('personTypesarr', this.personPreviouTypesarr);
      }
    )
  }




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

  selectedBankTypeValue(data) {
    if (data != undefined) {
      this.LoadAllBankNames(data.id);
    }

  }



  selectedBank(data) {
    if (data != undefined) {

      this.personModel.BankName = data.bank_ID

      this.LoadAllBankBranchers(data.bank_ID);
    }

  }

  BankTypeId: number;
  LoadBankData() {
    this.BankTypeId = undefined;
    this.bankservicedata.GetAllBankTypes().subscribe(
      reponse => {
        this.BankType = reponse as any;
      }
    )

  }




  LoadAllBankNameAll(Id) {
    this.bankservicedata.GetAllBankNamesAll().subscribe(
      response => {
        this.BankName = response;
        console.log('BankName',this.BankName );
       if(this.BankName != undefined ){
        var data = this.BankName.find(x => x.bank_ID == Id)
        this.BankTypeId = data.bank_Type;

        this.LoadAllBankBranchers(Id);
       }
     
      }
    )
  }



  LoadAllBankNames(Id) {
    this.bankservicedata.GetAllBankNames(Id).subscribe(
      reponse => {
        this.BankName = reponse;
        console.log('BankName', this.BankName);
      }
    )
  }



  LoadAllBankBranchers(Id) {
    console.log('Id',Id);
    this.bankservicedata.GetAllBankBranch(Id).subscribe(
      response => {
        this.BankBranch = response;
        console.log('BankBranch', this.BankBranch);
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
