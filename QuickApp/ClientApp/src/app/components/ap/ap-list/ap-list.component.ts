import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { BusinessGeneral, PersonalData, PhaseOut, ThreeWheelDriver } from 'src/app/models/app-add/personalData';
import { Permission } from 'src/app/models/permission.model';
import { Role } from 'src/app/models/role.model';
import { AccountService } from 'src/app/services/account.service';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { PersonEndpoint } from 'src/app/services/masterdataservice/personService';
import { RoleEditorComponent } from '../../controls/role-editor.component';
import { ApEditorComponent } from '../ap-editor/ap-editor.component';
import { Utilities } from '../../../services/utilities';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-ap-list',
  templateUrl: './ap-list.component.html',
  styleUrls: ['./ap-list.component.scss']
})
export class ApListComponent implements OnInit, AfterViewInit {

  columns: any[] = [];
  rows: any[] = [];
  rowsCache: Role[] = [];
  allPermissions: Permission[] = [];
  editedRole: Role;
  sourceRole: Role;
  editingRoleName: { name: string };
  loadingIndicator: boolean;

  personLIst: Array<PersonalData> = [];

  persondataEdit: PersonalData;



  @ViewChild('indexTemplate', { static: true })
  indexTemplate: TemplateRef<any>;

  @ViewChild('actionsTemplate', { static: true })
  actionsTemplate: TemplateRef<any>;

  @ViewChild('editorModal', { static: true })
  editorModal: ModalDirective;



  @ViewChild('actionsTemplatecurrentType', { static: true })
  actionsTemplatecurrentType: TemplateRef<any>;



  // @ViewChild('roleEditor', { static: true })
  // apEditor: ApEditorComponent;


  @ViewChild('ViewModal', { static: true })
  ViewModal: ModalDirective;

  // @ViewChild('apEditor', { static: true })
  // ApViewer: ApEditorComponent;


  @ViewChild('MonitorModal', { static: true })
  MonitorModal: ModalDirective;



  constructor(private Personservice: PersonEndpoint, private alertService: AlertService,
    private translationService: AppTranslationService, private accountService: AccountService,
    private persondata: PersonEndpoint, private spinner: NgxSpinnerService) {
  }


  ngOnInit() {

    const gT = (key: string) => this.translationService.getTranslation(key);

    this.columns = [
      { prop: 'index', name: '#', width: 50, cellTemplate: this.indexTemplate, canAutoResize: false },
      { prop: 'Person_NIC', name: gT('APs.ApItems.list.Id'), width: 300 },
      { prop: 'Person_Name', name: gT('APs.ApItems.list.Name'), width: 320 },
      { prop: 'PersonTypeName', name: gT('APs.ApItems.list.Type'), width: 320, cellTemplate: this.actionsTemplatecurrentType },
      { name: '', width: 500, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];

    this.loadData();
  }





  updateTable(event) {
    this.IsDataReady = false;
    this.loadData();
  }


  ngAfterViewInit() {

    // this.apEditor.changesSavedCallback = () => {
    //   this.addNewRoleToList();
    //   this.editorModal.hide();
    // };

    // this.apEditor.changesCancelledCallback = () => {
    //   this.editedRole = null;
    //   this.sourceRole = null;
    //   this.editorModal.hide();
    // };
  }

  IsTraining: boolean;
  AddMonitor(data) {
    this.IsTraining = false;
    this.persondataEdit = new PersonalData();
    this.persondataEdit = data;
    this.MonitorModal.show();
    console.log('add monitor data', data);

  }


  AddTraining(data) {
    this.IsTraining = true;
    this.persondataEdit = new PersonalData();
    this.persondataEdit = data;
    this.MonitorModal.show();
    console.log('add monitor data', data);
  }


  addNewRoleToList() {
    this.editorModal.show();
  }



  dataArray: any = [];
  loadData() {

    this.personLIst = [];

    this.persondata.GetAllPersonData().subscribe(
      reponse => {

        console.log("all persons", reponse);

        this.dataArray = reponse;

        for (let i = 0; i < this.dataArray.length; i++) {
          var person = new PersonalData();
          person.Person_ID = this.dataArray[i].person_ID;
          person.Person_NIC = this.dataArray[i].person_NIC;
          person.Person_Name = this.dataArray[i].person_Name;

          person.addressNo = this.dataArray[i].address.address_Number;
          person.addressStreet = this.dataArray[i].address.address_Street1;
          person.country = this.dataArray[i].address.countryId;
          person.state = this.dataArray[i].address.statesId;
          person.district = this.dataArray[i].address.districtId;
          person.City = this.dataArray[i].address.cityId;
          person.Person_Gender = this.dataArray[i].person_Gender;

          person.latitude = this.dataArray[i].address.latitude;

          person.longitude = this.dataArray[i].address.longitude;

          person.GenderName = this.dataArray[i].person_Gender != null ? this.dataArray[i].person_Gender == 1 ? 'Male' : 'Female' : null;

          person.BankName = this.dataArray[i].bank[0].bank_ID;

          person.BankBranch = this.dataArray[i].bank[0].bank_Branch_ID;

          person.AccountNumber = this.dataArray[i].bank[0].bank_Account_Number;

          person.PersonType = this.dataArray[i].person_Type;

          person.martialStatusId = this.dataArray[i].martialStatusId;

          person.educationalLevelId = this.dataArray[i].educationalLevelId;

          person.businessOrLivelihoodRelocationId = this.dataArray[i].businessOrLivelihoodRelocationId;

          person.doa = this.dataArray[i].doa;
          person.previousTypeId = this.dataArray[i].previousTypeId;

          person.PersonTypeName = this.dataArray[i].person_Type != null ? this.dataArray[i].person_Type == 1 ? 'Employee' : this.dataArray[i].person_Type == 2 ? 'Business Perosn ' : this.dataArray[i].person_Type == 3 ? 'ThreeWheel Driver' : 'Phase Out' : null;


          person.Person_DOB = this.dataArray[i].person_DOB;
          person.Person_File_number = this.dataArray[i].person_File_number;
          person.Person_Contact_Number = this.dataArray[i].person_Contact_Number;

     

          //employee general
          person.JobRole = this.dataArray[i].employeeGeneral != null ? this.dataArray[i].employeeGeneral.jobRole : null;
          person.Salary = this.dataArray[i].employeeGeneral != null ? this.dataArray[i].employeeGeneral.salary : null;
          person.EmployeeId = this.dataArray[i].employeeGeneral != null ? this.dataArray[i].employeeGeneral.id : null;
          person.Employer = this.dataArray[i].employeeGeneral != null ? this.dataArray[i].employeeGeneral.employer : null;
          //business general
          person.businessGeneral.BusinessPlanId = this.dataArray[i].businessGeneral != null ? this.dataArray[i].businessGeneral.busineesPlanId : null;

          person.businessGeneral.BusinessTypeId = this.dataArray[i].businessGeneral != null ?
            this.dataArray[i].businessGeneral.businessTypeId : null;

          person.businessGeneral.GSBSPreviousIncome = this.dataArray[i].businessGeneral != null ?
            this.dataArray[i].businessGeneral.gsbsPreviousIncome : null;

          person.businessGeneral.IsBankLoans = this.dataArray[i].businessGeneral != null ?
            this.dataArray[i].businessGeneral.isBankLoans : null;

          person.businessGeneral.IsBusinessChanged = this.dataArray[i].businessGeneral != null ?
            this.dataArray[i].businessGeneral.isBusinessChanged : null;

          person.businessGeneral.IsEntilementFund = this.dataArray[i].businessGeneral != null ?
            this.dataArray[i].businessGeneral.isEntilementFund : null;

          person.businessGeneral.IsOwnService = this.dataArray[i].businessGeneral != null ?
            this.dataArray[i].businessGeneral.isOwnService : null;

          person.businessGeneral.IsPartnerShip = this.dataArray[i].businessGeneral != null ?
            this.dataArray[i].businessGeneral.isPartnerShip : null;

          person.businessGeneral.IsPawningJewellary = this.dataArray[i].businessGeneral != null ?
            this.dataArray[i].businessGeneral.isPawingJewelery : null;

          person.businessGeneral.IsformalLoans = this.dataArray[i].businessGeneral != null ?
            this.dataArray[i].businessGeneral.isInformalLoans : null;

          person.businessGeneral.PreviousBusinessAtGoodShed = this.dataArray[i].businessGeneral != null ?
            this.dataArray[i].businessGeneral.previousBusinessAtGoodShed : null;

          person.businessGeneral.ReallocatedMonthandyear = this.dataArray[i].businessGeneral != null ?
            this.dataArray[i].businessGeneral.relocatedMonthandyear : null;

          person.businessGeneral.BusineesPersonId = this.dataArray[i].businessGeneral != null ?
            this.dataArray[i].businessGeneral.id : null;

            person.businessGeneral.isFirstBusinessPlan = this.dataArray[i].businessGeneral != null ?
            this.dataArray[i].businessGeneral.isFirstBusinessPlan : null;

            person.businessGeneral.businessPlanNote = this.dataArray[i].businessGeneral != null ?
            this.dataArray[i].businessGeneral.businessPlanNote : null;


          // threewheel driver 
          person.threeWheelDriver.EngagementAtGSBS = this.dataArray[i].threeWheelGeneral != null ? this.dataArray[i].threeWheelGeneral.engagementAtGSBS : null;

          person.threeWheelDriver.initialParkAtGSBS = this.dataArray[i].threeWheelGeneral != null ? this.dataArray[i].threeWheelGeneral.initialParkAtGSBS : null;

          person.threeWheelDriver.MonthlyIncomeGSBS = this.dataArray[i].threeWheelGeneral != null ? this.dataArray[i].threeWheelGeneral.monthlyIncomeAtGSBS : null;

          person.threeWheelDriver.ThreeWheelDriverId = this.dataArray[i].threeWheelGeneral != null ? this.dataArray[i].threeWheelGeneral.Id : null;

          //phase out 
          person.phaseOut.DecisionMade = this.dataArray[i].phaseOutGeneral != null ? this.dataArray[i].phaseOutGeneral.phaseOutDecisionMade : null;

          //  person.phaseOut.FileNumber = this.dataArray[i].phaseOutGeneral != null ? this.dataArray[i].phaseOutGeneral.phaseOutDecisionMade : null;

          person.phaseOut.IsIncomeGeneratingSources = this.dataArray[i].phaseOutGeneral != null ? this.dataArray[i].phaseOutGeneral.isIncomeGeneratingSources : null;

          person.phaseOut.IsInterestOfFixedDeposit = this.dataArray[i].phaseOutGeneral != null ? this.dataArray[i].phaseOutGeneral.isInterestOfFixedDeposit : null;

          person.phaseOut.IsLivesWithcloseFamily = this.dataArray[i].phaseOutGeneral != null ? this.dataArray[i].phaseOutGeneral.isLivesWithcloseFamily : null;

          person.phaseOut.MonthAndYear = this.dataArray[i].phaseOutGeneral != null ? this.dataArray[i].phaseOutGeneral.monthAndYearPhaseOut : null;

          person.phaseOut.PersonID = this.dataArray[i].phaseOutGeneral != null ? this.dataArray[i].phaseOutGeneral.personID : null;

          person.phaseOut.PlanedBusiness = this.dataArray[i].phaseOutGeneral != null ? this.dataArray[i].phaseOutGeneral.businessPlan : null;

          person.phaseOut.ReasonForPhaseOut = this.dataArray[i].phaseOutGeneral != null ? this.dataArray[i].phaseOutGeneral.reasonForPhaseout : null;

          person.phaseOut.SocialWellBeing = this.dataArray[i].phaseOutGeneral != null ? this.dataArray[i].phaseOutGeneral.socialEconomicWellbeing : null;

          person.phaseOut.UseOfEntileFund = this.dataArray[i].phaseOutGeneral != null ? this.dataArray[i].phaseOutGeneral.useofEntitlementFund : null;

          person.phaseOut.PhaseOutId = this.dataArray[i].phaseOutGeneral != null ? this.dataArray[i].phaseOutGeneral.id : null;

          //vulnerability

          person.vulnerability.backgroundInformation = this.dataArray[i].vulnerability != null ? this.dataArray[i].vulnerability.backgroundInformation : null;

          person.vulnerability.fileNumber = this.dataArray[i].vulnerability != null ? this.dataArray[i].vulnerability.fileNumber : null;

          person.vulnerability.initialProjectInput = this.dataArray[i].vulnerability != null ? this.dataArray[i].vulnerability.initialProjectInput : null;

          person.vulnerability.otherVulnerability = this.dataArray[i].vulnerability != null ? this.dataArray[i].vulnerability.otherVulnerability : null;

          person.vulnerability.vulnerability_Description = this.dataArray[i].vulnerability != null ? this.dataArray[i].vulnerability.vulnerability_Description : null;

          person.vulnerability.vulnerability_ID = this.dataArray[i].vulnerability != null ? this.dataArray[i].vulnerability.vulnerability_ID : null;

          person.vulnerability.vulnerability_IS_Vulnerable = this.dataArray[i].vulnerability != null ? this.dataArray[i].vulnerability.vulnerability_IS_Vulnerable : null;

          person.vulnerability.vulnerability_Level = this.dataArray[i].vulnerability != null ? this.dataArray[i].vulnerability.vulnerability_Level : null;

          person.vulnerability.vulnerability_Person_ID = this.dataArray[i].vulnerability != null ? this.dataArray[i].vulnerability.vulnerability_Person_ID : null;

          person.vulnerability.vulnerability_Remarks = this.dataArray[i].vulnerability != null ? this.dataArray[i].vulnerability.vulnerability_Remarks : null;

          person.vulnerability.vulnerability_Type = this.dataArray[i].vulnerability != null ? this.dataArray[i].vulnerability.vulnerability_Type : null;


          person.phaseOutMonitorList = this.dataArray[i].phaseOut.length > 0 ? this.dataArray[i].phaseOut : null;
          person.employeeMonitorList = this.dataArray[i].employment.length > 0 ? this.dataArray[i].employment : null;
          person.businessMonitorList = this.dataArray[i].business.length > 0 ? this.dataArray[i].business : null;
          person.threeWheelMonitorList = this.dataArray[i].threeWheeler.length > 0 ? this.dataArray[i].threeWheeler : null;
          person.vulnerabilityMonitorList = this.dataArray[i].vulnerabilityMonitor.length > 0 ? this.dataArray[i].vulnerabilityMonitor : null;

          person.apUserImage = this.dataArray[i].apUserImage != null ? this.dataArray[i].apUserImage : null;

          person.apVideos = this.dataArray[i].apVideos != null ? this.dataArray[i].apVideos : null;

          person.apImages = this.dataArray[i].apImages != null ? this.dataArray[i].apImages : null;

          person.apDocuments = this.dataArray[i].apDocuments != null ? this.dataArray[i].apDocuments : null;

          this.personLIst.push(person);
        }


        console.log("angular person", this.personLIst);
        // personLIst

        this.rows = this.personLIst;

        var data = reponse;
        this.IsDataReady = true;
      }
    )


  }

  adddatareponse: any;
  GeneralValidation: boolean = true
  Empvalidation: boolean = true;
  BusinessValidation: boolean = true;
  ThreeWheelValidation: boolean = true;
  PhaseOutValidation: boolean = true;
  validationfalied: boolean = false;
  VulnerabilityValidation: boolean = false;
  updatePersonData(person) {

    var castnew = JSON.parse(JSON.stringify(person));
    castnew.employeeMonitorList = null;
    castnew.businessMonitorList = null;
    castnew.threeWheelMonitorList = null;
    castnew.phaseOutMonitorList = null;
    castnew.vulnerabilityMonitorList = null;

    this.Personoriginaledit.employeeMonitorList = null;
    this.Personoriginaledit.businessMonitorList = null;
    this.Personoriginaledit.threeWheelMonitorList = null;
    this.Personoriginaledit.phaseOutMonitorList = null;
    this.Personoriginaledit.vulnerabilityMonitorList = null;



    console.log("casted data", castnew);
    if (JSON.stringify(this.Personoriginaledit) == JSON.stringify(castnew)) {
      this.alertService.showMessage('Alert', 'Nothing to update', MessageSeverity.info);
    } else {

      console.log('before original', this.Personoriginaledit)

      console.log('person original ', JSON.stringify(this.Personoriginaledit));

      console.log('person update', JSON.stringify(castnew))


      this.IsDataReady = false;
      this.GeneralValidation = true
      this.Empvalidation = true;
      this.BusinessValidation = true;
      this.ThreeWheelValidation = true;
      this.PhaseOutValidation = true;
      this.VulnerabilityValidation = true;
      console.log("updated Model", person);
      var data = this.dataArray.find(x => x.person_ID == person.Person_ID);
      console.log("data found", data);


      if (person.vulnerability.vulnerability_IS_Vulnerable) {
        if ((person.vulnerability.vulnerability_Type == undefined || person.vulnerability.vulnerability_Type == null) ||
          (person.vulnerability.vulnerability_Level == undefined || person.vulnerability.vulnerability_Level == null) ||
          (person.vulnerability.otherVulnerability == undefined || person.vulnerability.otherVulnerability == null || person.vulnerability.otherVulnerability == "") ||
          (person.vulnerability.backgroundInformation == undefined || person.vulnerability.backgroundInformation == null || person.vulnerability.backgroundInformation == "") ||
          (person.vulnerability.initialProjectInput == undefined || person.vulnerability.initialProjectInput == null || person.vulnerability.initialProjectInput == "") ||
          (person.vulnerability.vulnerability_Remarks == undefined || person.vulnerability.vulnerability_Remarks == null || person.vulnerability.vulnerability_Remarks == "")) {

          this.alertService.showMessage('Error', 'Please Add Vulnerability Info Correctly', MessageSeverity.warn);
          this.validationfalied = true;
          this.VulnerabilityValidation = false;
        }
      }
      if ((person.Person_Name == undefined || person.Person_Name == null || person.Person_Name == "") ||
        (person.Person_NIC == undefined || person.Person_NIC == null || person.Person_NIC == "") ||
        (person.Person_NIC == undefined || person.Person_NIC == null || person.Person_NIC == "") ||
        (person.Person_File_number == undefined || person.Person_File_number == null || person.Person_File_number == "") ||
        (person.Person_DOB == undefined || person.Person_DOB == null || person.Person_DOB == "") ||
        (person.PersonType == undefined || person.PersonType == null) ||
        (person.Person_Gender == undefined || person.Person_Gender == null) ||
        (person.addressNo == undefined || person.addressNo == null || person.addressNo == "") ||
        (person.addressStreet == undefined || person.addressStreet == null) ||
        (person.country == undefined || person.country == null) ||
        (person.state == undefined || person.state == null) ||
        (person.district == undefined || person.district == null) ||
        (person.City == undefined || person.City == null) ||
        (person.Person_Contact_Number == undefined || person.Person_Contact_Number == null) ||
        (person.BankName == undefined || person.BankName == null) ||
        (person.BankBranch == undefined || person.BankBranch == null) ||
        (person.AccountNumber == undefined || person.AccountNumber == null || person.AccountNumber == "") ||
        (person.AccountNumber == undefined || person.AccountNumber == null || person.AccountNumber == "")
      ) {

        this.GeneralValidation = false;
        this.alertService.showMessage('Validation Failed', 'Please fill general information correctly', MessageSeverity.warn);
        this.validationfalied = true;

      }

      if (person.EmployeeId > 0 && person.PersonType == 1) {
        if ((person.Salary == undefined || person.Salary == null) || (person.JobRole == null || person.JobRole == undefined) || (person.Employer == null || person.Employer == undefined)) {
          this.Empvalidation = false;
          this.alertService.showMessage('Validation Failed', 'Please fill employee specific information correctly', MessageSeverity.warn);
          this.validationfalied = true;

        } else {
          this.Empvalidation = true;
          console.log("post data", person);

        }
      }

      if (person.businessGeneral.BusineesPersonId > 0 && (person.PersonType == 2 || person.PersonType == 5)) {
        if ((person.businessGeneral.BusinessPlanId == null || person.businessGeneral.BusinessPlanId == undefined) ||
          (person.businessGeneral.BusinessTypeId == null || person.businessGeneral.BusinessTypeId == undefined) ||
          (person.businessGeneral.GSBSPreviousIncome == null || person.businessGeneral.GSBSPreviousIncome == undefined) ||
          (person.businessGeneral.IsBankLoans == null || person.businessGeneral.IsBankLoans == undefined) ||
          (person.businessGeneral.IsEntilementFund == null || person.businessGeneral.IsEntilementFund == undefined) ||
          (person.businessGeneral.IsOwnService == null || person.businessGeneral.IsOwnService == undefined) ||
          (person.businessGeneral.IsPartnerShip == null || person.businessGeneral.IsPartnerShip == undefined) ||
          (person.businessGeneral.IsPawningJewellary == null || person.businessGeneral.IsPawningJewellary == undefined) ||
          (person.businessGeneral.IsformalLoans == null || person.businessGeneral.IsformalLoans == undefined) ||
          (person.businessGeneral.PreviousBusinessAtGoodShed == null || person.businessGeneral.PreviousBusinessAtGoodShed == undefined || person.businessGeneral.PreviousBusinessAtGoodShed == "") ||
          (person.businessGeneral.ReallocatedMonthandyear == null || person.businessGeneral.ReallocatedMonthandyear == undefined || person.businessGeneral.ReallocatedMonthandyear == "")
        ) {
          this.BusinessValidation = false;
          this.alertService.showMessage('Validation Failed', 'Please fill business person specific information correctly', MessageSeverity.warn);
          this.validationfalied = true;

        } else {
          this.BusinessValidation = true;
          console.log("post data", person)

        }
      }

      if (person.threeWheelDriver.ThreeWheelDriverId > 0 && person.PersonType == 3) {
        if (
          (person.threeWheelDriver.EngagementAtGSBS == null || person.threeWheelDriver.EngagementAtGSBS == undefined || person.threeWheelDriver.EngagementAtGSBS == "") ||
          (person.threeWheelDriver.MonthlyIncomeGSBS == null || person.threeWheelDriver.MonthlyIncomeGSBS == undefined) ||
          (person.threeWheelDriver.initialParkAtGSBS == null || person.threeWheelDriver.initialParkAtGSBS == undefined || person.threeWheelDriver.initialParkAtGSBS == "")
        ) {
          this.ThreeWheelValidation = false;
          this.alertService.showMessage('Validation Failed', 'Please fill threewheel driver specific information correctly', MessageSeverity.warn);
          this.validationfalied = true;

        } else {
          this.ThreeWheelValidation = true;
          console.log("post data", person)

        }
      }


      if (person.PhaseOutId > 0 && person.PersonType == 4) {
        if (
          (person.phaseOut.DecisionMade == null || person.phaseOut.DecisionMade == undefined || person.phaseOut.DecisionMade == "") ||
          (person.phaseOut.FileNumber == null || person.phaseOut.FileNumber == undefined || person.phaseOut.FileNumber == "") ||
          (person.phaseOut.IsIncomeGeneratingSources == null || person.phaseOut.IsIncomeGeneratingSources == undefined) ||
          (person.phaseOut.IsInterestOfFixedDeposit == null || person.phaseOut.IsInterestOfFixedDeposit == undefined) ||
          (person.phaseOut.IsLivesWithcloseFamily == null || person.phaseOut.IsLivesWithcloseFamily == undefined) ||
          (person.phaseOut.MonthAndYear == null || person.phaseOut.MonthAndYear == undefined || person.phaseOut.MonthAndYear == "") ||
          (person.phaseOut.PersonID == null || person.phaseOut.PersonID == undefined) ||
          (person.phaseOut.PlanedBusiness == null || person.phaseOut.PlanedBusiness == undefined || person.phaseOut.PlanedBusiness == "") ||
          (person.phaseOut.ReasonForPhaseOut == null || person.phaseOut.ReasonForPhaseOut == undefined || person.phaseOut.ReasonForPhaseOut == "") ||
          (person.phaseOut.Situation == null || person.phaseOut.Situation == undefined || person.phaseOut.Situation == "") ||
          (person.phaseOut.SocialWellBeing == null || person.phaseOut.SocialWellBeing == undefined || person.phaseOut.SocialWellBeing == "") ||
          (person.phaseOut.UseOfEntileFund == null || person.phaseOut.UseOfEntileFund == undefined || person.phaseOut.UseOfEntileFund == "")

        ) {
          this.PhaseOutValidation = false;
          this.alertService.showMessage('Validation Failed', 'Please fill phase out specific information correctly', MessageSeverity.warn);
          this.validationfalied = true;

        } else {
          this.PhaseOutValidation = true;
          console.log("post data", person)

        }
      }

      if (this.PhaseOutValidation && this.Empvalidation && this.ThreeWheelValidation && this.GeneralValidation && this.BusinessValidation && this.VulnerabilityValidation) {

        data.person_ID = person.Person_ID;
        data.person_NIC = person.Person_NIC;
        data.person_Name = person.Person_Name;

        data.address.address_Number = person.addressNo;
        data.address.address_Street1 = person.addressStreet;
        data.address.countryId = person.country;
        data.address.statesId = person.state;
        data.address.districtId = person.district;
        data.address.cityId = person.City;
        data.person_Gender = person.Person_Gender;
        data.person_Gender = person.Person_Gender

        data.previousTypeId = person.previousTypeId;

        data.bank[0].bank_ID = person.BankName;

        data.bank[0].bank_Branch_ID = person.BankBranch;

        data.bank[0].Bank_Account_Number = person.AccountNumber;

        data.person_Type = person.PersonType;


        // data.person_Type = person.PersonType;


        data.person_DOB = person.Person_DOB
        data.person_File_number = person.Person_File_number;
        data.person_Contact_Number = person.Person_Contact_Number;

        if (data.vulnerability == null && person.vulnerability.vulnerability_IS_Vulnerable) {
          data.vulnerability = {};
          data.vulnerability.backgroundInformation = person.vulnerability.backgroundInformation;
          data.vulnerability.initialProjectInput = person.vulnerability.initialProjectInput;
          data.vulnerability.otherVulnerability = person.vulnerability.otherVulnerability;
          data.vulnerability.vulnerability_IS_Vulnerable = person.vulnerability.vulnerability_IS_Vulnerable;
          data.vulnerability.vulnerability_Level = person.vulnerability.vulnerability_Level;
          data.vulnerability.vulnerability_Remarks = person.vulnerability.vulnerability_Remarks;
          data.vulnerability.vulnerability_Type = person.vulnerability.vulnerability_Type;
        } else if (data.vulnerability != null) {
          data.vulnerability.backgroundInformation = person.vulnerability.backgroundInformation;
          data.vulnerability.initialProjectInput = person.vulnerability.initialProjectInput;
          data.vulnerability.otherVulnerability = person.vulnerability.otherVulnerability;
          data.vulnerability.vulnerability_IS_Vulnerable = person.vulnerability.vulnerability_IS_Vulnerable;
          data.vulnerability.vulnerability_Level = person.vulnerability.vulnerability_Level;
          data.vulnerability.vulnerability_Remarks = person.vulnerability.vulnerability_Remarks;
          data.vulnerability.vulnerability_Type = person.vulnerability.vulnerability_Type;
        }


        //employee general


        //business general
        if (data.employeeGeneral == null && person.PersonType == 1) {
          data.employeeGeneral = {}
          data.employeeGeneral.jobRole = person.JobRole;
          data.employeeGeneral.salary = person.Salary;


        } else if (data.employeeGeneral != null) {
          data.employeeGeneral.jobRole = person.JobRole;
          data.employeeGeneral.salary = person.Salary;
        }


        if (data.businessGeneral == null && (person.PersonType == 2 || person.PersonType ==  5)) {
          data.businessGeneral = {}


          console.log("data after b", data)

          data.businessGeneral.busineesPlanId = person.businessGeneral.BusinessPlanId


          data.businessGeneral.businessTypeId = person.businessGeneral.BusinessTypeId;


          data.businessGeneral.gsbsPreviousIncome = person.businessGeneral.GSBSPreviousIncome;


          data.businessGeneral.isBankLoans = person.businessGeneral.IsBankLoan;


          data.businessGeneral.isBusinessChanged = person.businessGeneral.IsBusinessChanged;


          data.businessGeneral.isEntilementFund = person.businessGeneral.IsEntilementFund;


          data.businessGeneral.isOwnService = person.businessGeneral.IsOwnService;


          data.businessGeneral.isPartnerShip = person.businessGeneral.IsPartnerShip;


          data.businessGeneral.isPawingJewelery = person.businessGeneral.IsPawningJewellary;


          data.businessGeneral.isInformalLoans = person.businessGeneral.IsformalLoans;


          data.businessGeneral.previousBusinessAtGoodShed = person.businessGeneral.PreviousBusinessAtGoodShed;


          data.businessGeneral.relocatedMonthandyear = person.businessGeneral.ReallocatedMonthandyear;
        } else if (data.businessGeneral != null) {
          data.businessGeneral.busineesPlanId = person.businessGeneral.BusinessPlanId


          data.businessGeneral.businessTypeId = person.businessGeneral.BusinessTypeId;


          data.businessGeneral.gsbsPreviousIncome = person.businessGeneral.GSBSPreviousIncome;


          data.businessGeneral.isBankLoans = person.businessGeneral.IsBankLoan;


          data.businessGeneral.isBusinessChanged = person.businessGeneral.IsBusinessChanged;


          data.businessGeneral.isEntilementFund = person.businessGeneral.IsEntilementFund;


          data.businessGeneral.isOwnService = person.businessGeneral.IsOwnService;


          data.businessGeneral.isPartnerShip = person.businessGeneral.IsPartnerShip;


          data.businessGeneral.isPawingJewelery = person.businessGeneral.IsPawningJewellary;


          data.businessGeneral.isInformalLoans = person.businessGeneral.IsformalLoans;


          data.businessGeneral.previousBusinessAtGoodShed = person.businessGeneral.PreviousBusinessAtGoodShed;


          data.businessGeneral.relocatedMonthandyear = person.businessGeneral.ReallocatedMonthandyear;
        }




        if (data.threeWheelGeneral == null && person.PersonType == 3) {
          data.threeWheelGeneral = {}

          console.log("data after b", data)
          // threewheel driver 
          data.threeWheelGeneral.engagementAtGSBS = person.threeWheelDriver.EngagementAtGSBS;

          data.threeWheelGeneral.initialParkAtGSBS = person.threeWheelDriver.initialParkAtGSBS;

          data.threeWheelGeneral.monthlyIncomeAtGSBS = person.threeWheelDriver.MonthlyIncomeGSBS;
        } else if (data.threeWheelGeneral != null) {
          // threewheel driver 
          data.threeWheelGeneral.engagementAtGSBS = person.threeWheelDriver.EngagementAtGSBS;

          data.threeWheelGeneral.initialParkAtGSBS = person.threeWheelDriver.initialParkAtGSBS;

          data.threeWheelGeneral.monthlyIncomeAtGSBS = person.threeWheelDriver.MonthlyIncomeGSBS;
        }





        if (data.phaseOutGeneral == null && person.PersonType == 4) {
          data.phaseOutGeneral = {}

          data.phaseOutGeneral.phaseOutDecisionMade = person.phaseOut.DecisionMade;



          data.phaseOutGeneral.isIncomeGeneratingSources = person.phaseOut.IsIncomeGeneratingSources;

          data.phaseOutGeneral.isInterestOfFixedDeposit = person.phaseOut.IsInterestOfFixedDeposit;

          data.phaseOutGeneral.isLivesWithcloseFamily = person.phaseOut.IsLivesWithcloseFamily;

          data.phaseOutGeneral.monthAndYearPhaseOut = person.phaseOut.MonthAndYear;

          data.phaseOutGeneral.personID = person.phaseOut.PersonID;

          data.phaseOutGeneral.businessPlan = person.phaseOut.PlanedBusiness;

          data.phaseOutGeneral.reasonForPhaseout = person.phaseOut.ReasonForPhaseOut;

          data.phaseOutGeneral.socialEconomicWellbeing = person.phaseOut.SocialWellBeing;

          data.phaseOutGeneral.useofEntitlementFund = person.phaseOut.UseOfEntileFund;
        } else if (data.phaseOutGeneral != null) {
          data.phaseOutGeneral.isIncomeGeneratingSources = person.phaseOut.IsIncomeGeneratingSources;

          data.phaseOutGeneral.isInterestOfFixedDeposit = person.phaseOut.IsInterestOfFixedDeposit;

          data.phaseOutGeneral.isLivesWithcloseFamily = person.phaseOut.IsLivesWithcloseFamily;

          data.phaseOutGeneral.monthAndYearPhaseOut = person.phaseOut.MonthAndYear;

          data.phaseOutGeneral.personID = person.phaseOut.PersonID;

          data.phaseOutGeneral.businessPlan = person.phaseOut.PlanedBusiness;

          data.phaseOutGeneral.reasonForPhaseout = person.phaseOut.ReasonForPhaseOut;

          data.phaseOutGeneral.socialEconomicWellbeing = person.phaseOut.SocialWellBeing;

          data.phaseOutGeneral.useofEntitlementFund = person.phaseOut.UseOfEntileFund;
        }
        //phase out 
        data.threeWheeler = null;
        data.employment = null;
        data.monitor = null;
        data.vulnerabilityMonitor = null;
        data.business = null;
        data.phaseOut = null;




        this.validationfalied = false;

        console.log("data send to server", JSON.stringify(data))
        this.spinner.show();

        this.persondata.UpdatePersonData(data).subscribe(
          reponse => {
            this.IsDataReady = true;
            console.log("reponse update", reponse);
            this.adddatareponse = reponse;
            if (this.adddatareponse.status == 200) {
              this.spinner.hide();
              this.alertService.showMessage('Sucessfully', 'Sucessfully Updated Data', MessageSeverity.success);
            } else {
              this.spinner.hide();
              this.alertService.showMessage('Error', 'Update Failed', MessageSeverity.error);
              this.IsDataReady = true;
            }

            this.loadData();
            this.editorModal.hide()
          }
        )
      }
    }
    console.log("found data", data);

  }

  ClearEditEvent(data) {
    if (data) {
      this.Isedit = false;
    }
  }


  IsDataReady: boolean = false;
  LoadApData(data) {
    console.log('came to load data');
    if (data) {
      this.IsDataReady = false
      console.log('came to load data 2');
      this.loadData();
    }
  }


  persondatadelete: PersonalData;
  DeletePerson(data) {
    this.IsDataReady = false;
    this.persondatadelete = new PersonalData();
    this.persondatadelete = data;
    this.persondata.DeletePerson(this.persondatadelete.Person_ID).subscribe(
      response => {
        console.log("response", response);
        this.alertService.showMessage('Sucessfully', 'Sucessfully Deleted Data', MessageSeverity.success);
        this.IsDataReady = true;
        this.loadData();
      }
    )
  }





  onEditorModalHidden() {
    // this.editingRoleName = null; 
    // this.roleEditor.resetForm(true);
  }
  onViewModalHidden() {

  }
  Personoriginaledit = new PersonalData();
  Isedit: boolean = false;
  editPerson(edit) {
    this.persondataEdit = new PersonalData();
    this.IsView = false;
    this.persondataEdit = edit;

    console.log("edit person data", edit)

    this.Personoriginaledit = JSON.parse(JSON.stringify(edit));

    console.log('person edit string', JSON.stringify(edit))

    console.log("edit person original", this.Personoriginaledit)

    this.editorModal.show();
    this.Isedit = true;
    console.log("log data", edit)
  }


  IsView: boolean = false;
  viewPerson(edit) {
    this.persondataEdit = new PersonalData();
    this.persondataEdit = edit;

    this.ViewModal.show();
    this.IsView = true;
    console.log("log data", edit)
  }


  newPerson() {
    this.IsView = false;
    this.Isedit = false;
    this.editorModal.show();
  }


  // editRole(edit) {

  //   this.editorModal.show();
  // }

  // deleteRole(row: Role) {
  //   // this.alertService.showDialog('Are you sure you want to delete the \"' + row.name + '\" role?', DialogType.confirm, () => this.deleteRoleHelper(row));
  // }


  // deleteRoleHelper(row: Role) {



  // }


  onSearchChanged(value: string) {
    this.rows = this.personLIst.filter(r => Utilities.searchArray(value, false, r.Person_Name, r.Person_NIC));
  }

  get canManageRoles() {
    return this.accountService.userHasPermission(Permission.manageRolesPermission);
  }

}
