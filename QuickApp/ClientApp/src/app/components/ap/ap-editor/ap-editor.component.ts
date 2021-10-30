import { DatePipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PersonalData, PhaseOut, Vulnerability } from 'src/app/models/app-add/personalData';
import { businessMonitorModel } from 'src/app/models/MoniorModels/businessMonitorModel';
import { EmployeeMonitor } from 'src/app/models/MoniorModels/employeeMonitorModel';
import { phaseOutMonitor } from 'src/app/models/MoniorModels/phaseOut';
import { ThreeWheeler } from 'src/app/models/MoniorModels/ThreeWheelMonitorModel';
import { TrainingModel } from 'src/app/models/MoniorModels/trainingModel';
import { vulnerabilityMonitor } from 'src/app/models/MoniorModels/vulnerabilityMonitor';
import { SelectPersonTypes } from 'src/app/models/selectPersonType';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { PersonEndpoint } from 'src/app/services/masterdataservice/personService';
import { PersonEndpoint2 } from 'src/app/services/masterdataservice/personService2';
import { MonitorEndpoint } from 'src/app/services/monitor/monitorService';

@Component({
  selector: 'app-ap-editor',
  templateUrl: './ap-editor.component.html',
  styleUrls: ['./ap-editor.component.scss']
})
export class ApEditorComponent implements OnInit, OnChanges {
  @Input() personData: PersonalData;
  @Input() IsTraining:boolean;
  @Output() updatedevent: EventEmitter<boolean> = new EventEmitter();

  personTypes: SelectPersonTypes;

  imageUrl: boolean = false;

  personModel: PersonalData;
  columns2: any[] = [];
  rows2: any[] = [];
  CurrentType: number;
  employeeMonitor: Array<EmployeeMonitor> = [];
  businessMonitor: Array<businessMonitorModel> = [];
  threeWheelMonitorData: Array<ThreeWheeler> = [];
  phaseOutMonitorData: Array<phaseOutMonitor> = [];
  TrainigMonitorData: Array<TrainingModel> = [];
  IsDataReady = false;

  IsPhaseOutDataReady = false;

  columns3: any[] = [];
  rows3: any[] = [];


  columns4: any[] = [];
  rows4: any[] = [];


  columns5: any[] = [];
  rows5: any[] = [];


  columns6: any[] = [];
  rows6: any[] = [];

  columns7: any[] = [];
  rows7: any[] = [];


  IsBusinessDataReady = false;

  @ViewChild('indexee', { static: true })
  indexee: TemplateRef<any>;

  @ViewChild('actionsee', { static: true })
  actionsee: TemplateRef<any>;


  @ViewChild('indexeebb', { static: true })
  indexeebb: TemplateRef<any>;

  @ViewChild('actionseebb', { static: true })
  actionseebb: TemplateRef<any>;


  @ViewChild('indexeett', { static: true })
  indexeett: TemplateRef<any>;

  @ViewChild('actionseett', { static: true })
  actionseett: TemplateRef<any>;

  @ViewChild('indexeevv', { static: true })
  indexeevv: TemplateRef<any>;

  @ViewChild('actionseevv', { static: true })
  actionseevv: TemplateRef<any>;


  @ViewChild('indexeepp', { static: true })
  indexeepp: TemplateRef<any>;

  @ViewChild('actionseepp', { static: true })
  actionseepp: TemplateRef<any>;


  @ViewChild('indexeetr', { static: true })
  indexeetr: TemplateRef<any>;

  @ViewChild('actionseetr', { static: true })
  actionseetr: TemplateRef<any>;


  
  @ViewChild('tabset')
  tabset: any;


  VulStatus = [
    { id: 'Improved', name: 'Improved' },
    { id: 'Not Improved', name: 'Not Improved' },
  ]



  IsList = [
    { id: true, name: 'Yes' },
    { id: false, name: 'No' },
  ]


  
  constructor(private translationService: AppTranslationService, private monitorservice: MonitorEndpoint,
     private alertService: AlertService,private person:PersonEndpoint2,private spinner: NgxSpinnerService,public datepipe: DatePipe,private personservice:PersonEndpoint) {

    this.personTypes = new SelectPersonTypes();
    this.personModel = new PersonalData();

    this.employeeMonitor = new Array<EmployeeMonitor>();
    this.businessMonitor = new Array<businessMonitorModel>();
    this.threeWheelMonitorData = new Array<ThreeWheeler>();
    this.phaseOutMonitorData = new Array<phaseOutMonitor>();

    this.VulnerabilityModel = new vulnerabilityMonitor();

  }

  public changesSavedCallback: () => void;
  public changesFailedCallback: () => void;
  public changesCancelledCallback: () => void;

  VulnerabilityModel: vulnerabilityMonitor;
  personTypeId: number;
  isVulnerable: boolean = false;
  vulnerabilityId: number = 0;
  ngOnChanges() {
    this.isVulnerable = false;
    this.IsBusinessDataReady = false;
    this.IsDataReady = false;
    this.IsVulnerableDataReady = false;

    console.log("persondata monitor", this.personData);
    this.personModel = this.personData;
    this.LoadMonitorPeriods();
    if (this.personData != undefined) {

      this.CurrentType = this.personData.PersonType;
      this.personTypeId = this.personData.Person_ID;


      if (this.personData.vulnerability != null) {
        this.isVulnerable = this.personData.vulnerability.vulnerability_IS_Vulnerable;
        this.vulnerabilityId = this.personData.vulnerability.vulnerability_ID;
        this.getAllVulnerabilities()
      }

      if(this.IsTraining){
        this.loadTrainingData();
      }
      else if (this.CurrentType == 1) {
        this.loadMonitoringData();
      } else if (this.CurrentType == 2) {
        this.loadBusinessMonitoringData();
      } else if (this.CurrentType == 3) {
        this.loadThreeWheelMonitoringData();
      } else if (this.CurrentType == 4) {
        this.loadPhaseOutMonitoringData()
      }


    }


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





  adddatareponse33: any;
  AddVulnerability() {

    if ((this.VulnerabilityModel.monitor.monitor_Date == undefined || this.VulnerabilityModel.monitor.monitor_Date == null) ||
      (this.VulnerabilityModel.stability == undefined || this.VulnerabilityModel.stability == null || this.VulnerabilityModel.stability == "") ||
      (this.VulnerabilityModel.isIncomeSecure == undefined || this.VulnerabilityModel.isIncomeSecure == null) ||
      (this.VulnerabilityModel.coverDaytoDayExpenses == undefined || this.VulnerabilityModel.coverDaytoDayExpenses == null) ||
      (this.VulnerabilityModel.isBetterPhysicalLivingFacility == undefined || this.VulnerabilityModel.isBetterPhysicalLivingFacility == null) ||
      (this.VulnerabilityModel.protectionAndSecurity == undefined || this.VulnerabilityModel.protectionAndSecurity == null) ||
      (this.VulnerabilityModel.vulnerabilityStatus == undefined || this.VulnerabilityModel.vulnerabilityStatus == null) ||
      (this.VulnerabilityModel.projectInput == undefined || this.VulnerabilityModel.projectInput == null || this.VulnerabilityModel.projectInput == "") ||
      (this.VulnerabilityModel.note == undefined || this.VulnerabilityModel.note == null || this.VulnerabilityModel.note == "")
    ) {
      this.alertService.showMessage('Alert', 'Fill Vulnerability Data Correctly', MessageSeverity.warn);
    } else {

      this.VulnerabilityModel.personId = this.personTypeId;
      this.VulnerabilityModel.vulnerabilityID = this.vulnerabilityId
      //monitor data
      this.VulnerabilityModel.monitor.monitor_Person_ID = this.personTypeId;
      var monitordate=new Date();
      this.VulnerabilityModel.monitor.monitor_Date = this.datepipe.transform(monitordate, 'yyyy-MM-dd'); 
      this.VulnerabilityModel.monitor.monitor_Update = "";
      this.VulnerabilityModel.monitor.monitor_LRP_Responds_action = 1;
      this.VulnerabilityModel.monitor.monitor_Remarks = "second monitor time";
      this.VulnerabilityModel.monitor.monitorDuration.monitor_Duration_Description = "duration description seond time";

      console.log("Vulnerability", this.VulnerabilityModel)

      this.monitorservice.AddVulnerability(this.VulnerabilityModel).subscribe(
        response => {
          this.adddatareponse33 = response;


          if (this.adddatareponse33.status == 200) {
            this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
            this.personModel = new PersonalData();
            this.VulnerabilityModel = new vulnerabilityMonitor();

          } else {
            this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
          }
          console.log("reponse added", response);
        }
      )

    }

  }

  updatevulnerability: any
  addvulreponse: any;
  updateVulnerability() {
    if ((this.VulnerabilityModel.monitor.monitor_Date == undefined || this.VulnerabilityModel.monitor.monitor_Date == null) ||
      (this.VulnerabilityModel.stability == undefined || this.VulnerabilityModel.stability == null || this.VulnerabilityModel.stability == "") ||
      (this.VulnerabilityModel.isIncomeSecure == undefined || this.VulnerabilityModel.isIncomeSecure == null) ||
      (this.VulnerabilityModel.coverDaytoDayExpenses == undefined || this.VulnerabilityModel.coverDaytoDayExpenses == null) ||
      (this.VulnerabilityModel.isBetterPhysicalLivingFacility == undefined || this.VulnerabilityModel.isBetterPhysicalLivingFacility == null) ||
      (this.VulnerabilityModel.protectionAndSecurity == undefined || this.VulnerabilityModel.protectionAndSecurity == null) ||
      (this.VulnerabilityModel.vulnerabilityStatus == undefined || this.VulnerabilityModel.vulnerabilityStatus == null) ||
      (this.VulnerabilityModel.projectInput == undefined || this.VulnerabilityModel.projectInput == null || this.VulnerabilityModel.projectInput == "") ||
      (this.VulnerabilityModel.note == undefined || this.VulnerabilityModel.note == null || this.VulnerabilityModel.note == "")
    ) {
      this.alertService.showMessage('Alert', 'Fill Vulnerability Data Correctly', MessageSeverity.warn);
    } else {
      this.monitorservice.updateVulnerabilityMonitor(this.VulnerabilityModel).subscribe(
        reponse => {
          this.addvulreponse = reponse;
          if (this.addvulreponse.status == 200) {
            this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
            this.editmodevulnerability = false;
            this.VulnerabilityModel = new vulnerabilityMonitor();
            this.personModel = new PersonalData();

            this.editmodevulnerability = false;
            this.loadVulnerabilityData();
          } else {
            this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
          }
          console.log("reponse added", reponse);
        }
      )
    }




  }

  IsVulnerableDataReady: boolean = false;
  responseVulnerability: any = [];
  VulnerbilityMonitorData = new Array<phaseOutMonitor>();
  getAllVulnerabilities() {

    this.monitorservice.GetAllVulnerabilityMonitors().subscribe(
      response => {
        this.responseVulnerability = response;
        console.log("personId", this.personTypeId)
        this.VulnerbilityMonitorData = this.responseVulnerability.filter(x => x.personId == this.personTypeId);
        console.log("VulnerbilityMonitorData", this.VulnerbilityMonitorData);
        this.rows6 = this.VulnerbilityMonitorData;
        console.log("All VulnerbilityMonitorData", this.responseVulnerability);
        this.IsVulnerableDataReady = true;
        this.loadVulnerabilityData();
      }
    )


  }


  IsIncomeSecure(val) {

  }

  CoverDayTodayExpenses(val) {

  }

  IsprotectionAndSecurity(val) {

  }

  isBetterPhysicalLivingFacility(val) {

  }

  SelectedVulnerbilityStatus(val) {
    this.VulnerabilityModel.vulnerabilityStatus = val.id;
  }


  onSearchChanged(val) {

  }

  newPerson() {

  }

  editMode: boolean = false;
  editModeBusiness: boolean = false;
  selectedCar: number;
  test = "test"
  monitorEditmode: EmployeeMonitor;
  cars = [
    { id: 1, name: 'Bussiness Person' },
    { id: 2, name: 'ThreeWheel Driver' },
    { id: 3, name: 'Employee' },
    { id: 4, name: 'Phase out' },
  ];

  arraydata: Array<EmployeeMonitor> = [];
  ngOnInit(): void {

    // this.loadData();

  }

  editEmployeeMonitor(val) {
    this.tabset.select('tabemp');
    this.editMode = true;
    this.monitorEditmode = val;
    console.log("editEmployeeMonitor", val);
  }

  monitorTrainingEditMode:TrainingModel;
  editTrainingData(val) {
    this.tabset.select('tabTraining');
    this.editModeTraining = true;
    this.monitorTrainingEditMode = val;
    console.log("editTrainingData", this.monitorTrainingEditMode);
  }


  monitorEditmodebusiness: businessMonitorModel
  editBusinessMonitor(val) {
    this.tabset.select('tabbusiness');
    this.editModeBusiness = true;
    this.monitorEditmodebusiness = val;
    console.log("editBusinessMonitor", val);
  }

  editThreeWheelMonitor(val) {
    this.tabset.select('tabthreeWheel');
    this.editModeThreeWheel = true;
    this.monitorEditmodeThreeWheel = val;
    console.log("editThreeWheelMonitor", val);
  }


  editPhaseOutMonitor(val) {
    this.tabset.select('tabphaseOut');
    this.editModePhaseOut = true;
    this.monitorEditmodePhaseOut = val;
    console.log("editPhaseOutMonitor", val);
  }

  editmodevulnerability: boolean = false;
  editVulnerabilility(val) {
    this.editmodevulnerability = true;
    this.VulnerabilityModel = val;
    console.log("editVulnerabilility", val);
  }

  monitorEditmodePhaseOut: phaseOutMonitor;
  monitorEditmodeThreeWheel: ThreeWheeler;
  editModeThreeWheel: boolean;
  editModePhaseOut: boolean;

  loadingIndicator: boolean;


  selectedCurrentType(data) {
    this.personTypes = data;
  }


  responseOutput: any = [];
  loadMonitoringData() {
    this.IsDataReady = false;

    if (this.CurrentType == 1) {
      this.monitorservice.GetAllEmployeeData().subscribe(
        reponse => {
          this.responseOutput = reponse;
          console.log("personId", this.personTypeId)
          this.employeeMonitor = this.responseOutput.filter(x => x.person_ID == this.personTypeId);
          console.log("EmployeData", this.employeeMonitor);
          this.rows2 = this.employeeMonitor;
          console.log("All EmployeData 1 json",JSON.stringify(this.employeeMonitor[0]));
          this.IsDataReady = true;
          this.loadTableprop();
        }
      )
    }

  }


  responseOutputBusiness: any = [];
  loadBusinessMonitoringData() {
    this.IsBusinessDataReady = false;

    if (this.CurrentType == 2) {
      this.monitorservice.GetAlldBusinessMonitor().subscribe(
        reponse => {
          this.responseOutputBusiness = reponse;
          console.log("personId", this.personTypeId)
          this.businessMonitor = this.responseOutputBusiness.filter(x => x.business_Person_ID == this.personTypeId);
          console.log("businessMonitor", this.businessMonitor);
          this.rows3 = this.businessMonitor;
          console.log("All businessMonitor", this.responseOutputBusiness);
          this.IsBusinessDataReady = true;
          this.loadTableBusinessData();
        }
      )
    }

  }


  responseOutputThreeWheel: any = [];
  IsThreeWheelDataReady: boolean;
  loadThreeWheelMonitoringData() {
    this.IsThreeWheelDataReady = false;

    if (this.CurrentType == 3) {
      this.monitorservice.GetAllThreeWheelMonitor().subscribe(
        reponse => {
          this.responseOutputThreeWheel = reponse;
          console.log("personId", this.personTypeId)
          this.threeWheelMonitorData = this.responseOutputThreeWheel.filter(x => x.personID == this.personTypeId);
          console.log("threeWheelMonitorData", this.threeWheelMonitorData);
          this.rows4 = this.threeWheelMonitorData;
          console.log("All threeWheelMonitorData", this.responseOutputThreeWheel);
          this.IsThreeWheelDataReady = true;
          this.loadTableThreeWheel();
        }
      )
    }

  }



  responseOutputPhaseOut: any = [];
  loadPhaseOutMonitoringData() {
    this.IsPhaseOutDataReady = false;
    if (this.CurrentType == 4) {
      this.monitorservice.GetPhaseOutMonitor().subscribe(
        reponse => {
          this.responseOutputPhaseOut = reponse;
          console.log("personId", this.personTypeId)
          this.phaseOutMonitorData = this.responseOutputPhaseOut.filter(x => x.personID == this.personTypeId);
          console.log("threeWheelMonitorData", this.phaseOutMonitorData);
          this.rows5 = this.phaseOutMonitorData;
          console.log("All threeWheelMonitorData", this.phaseOutMonitorData);
          this.IsPhaseOutDataReady = true;
          this.loadTablePhaseOut();
        }
      )
    }
  }


  
  responseOutputTraining: any = [];
  IsTrainingDataReady:boolean = false;
  loadTrainingData() {
    this.IsTrainingDataReady = false;
    if (this.IsTraining) {
      this.person.GetAllTrainingData().subscribe(
        reponse => {
          this.responseOutputTraining = reponse;
          console.log("personId", this.personTypeId)
          this.TrainigMonitorData = this.responseOutputTraining.filter(x => x.training_Person_ID == this.personTypeId);
          console.log("TrainigMonitorData", this.TrainigMonitorData);
          this.rows7 = this.TrainigMonitorData;
          console.log("All TrainigMonitorData", this.responseOutputTraining);
          this.IsTrainingDataReady = true;
          this.loadTableTrainingData();
        }
      )
    }
  }



  loadVulnerabilityData() {
    const gT = (key: string) => this.translationService.getTranslation(key);
    this.columns6 = [
      { prop: 'index', name: '#', width: 50, cellTemplate: this.indexeevv, canAutoResize: false },
      { prop: 'stability', name: gT('APs.ApItems.VulnerbilityMonitor.stability'), width: 180 },
      { prop: 'vulnerabilityStatus', name: gT('APs.ApItems.VulnerbilityMonitor.vulnerabilityStatus'), width: 320 },
      { prop: 'note', name: gT('APs.ApItems.VulnerbilityMonitor.note'), width: 320 },
      { name: '', width: 250, cellTemplate: this.actionseevv, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];
  }

  loadTablePhaseOut() {
    const gT = (key: string) => this.translationService.getTranslation(key);
    this.columns5 = [
      { prop: 'index', name: '#', width: 50, cellTemplate: this.indexeepp, canAutoResize: false },
      { prop: 'fileNumber', name: gT('APs.ApItems.PhaseOut_Monitor.fileNumber'), width: 180 },
      { prop: 'situation', name: gT('APs.ApItems.PhaseOut_Monitor.situation'), width: 320 },
      { prop: 'reasonForPhaseOut', name: gT('APs.ApItems.PhaseOut_Monitor.reasonForPhaseOut'), width: 320 },
      { name: '', width: 250, cellTemplate: this.actionseepp, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];
  }


  loadTableThreeWheel() {
    const gT = (key: string) => this.translationService.getTranslation(key);
    this.columns4 = [
      { prop: 'index', name: '#', width: 50, cellTemplate: this.indexeett, canAutoResize: false },
      { prop: 'currentPark', name: gT('APs.ApItems.ThreeWheel_Monitor.CurrentPark'), width: 180 },
      { prop: 'monthlyIncome', name: gT('APs.ApItems.ThreeWheel_Monitor.MonthlyIncome'), width: 320 },
      { prop: 'status', name: gT('APs.ApItems.ThreeWheel_Monitor.Status'), width: 320 },
      { name: '', width: 250, cellTemplate: this.actionseett, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];
  }

  loadTableBusinessData() {
    const gT = (key: string) => this.translationService.getTranslation(key);
    this.columns3 = [
      { prop: 'index', name: '#', width: 50, cellTemplate: this.indexeebb, canAutoResize: false },
      { prop: 'currentBusiness', name: gT('APs.ApItems.Business_Monitor.Current_Business'), width: 180 },
      { prop: 'Salary', name: gT('APs.ApItems.Business_Monitor.Income'), width: 320 },
      { prop: 'summary', name: gT('APs.ApItems.Business_Monitor.Summary'), width: 320 },
      { name: '', width: 250, cellTemplate: this.actionseebb, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];

  }


  loadTableTrainingData() {
    const gT = (key: string) => this.translationService.getTranslation(key);
    this.columns7 = [
      { prop: 'index', name: '#', width: 50, cellTemplate: this.indexeetr, canAutoResize: false },
      { prop: 'dS_office', name: gT('APs.ApItems.Training.dS_office'), width: 180 },
      { prop: 'salaryStatus', name: gT('APs.ApItems.Training.salaryStatus'), width: 320 },
      { prop: 'status', name: gT('APs.ApItems.Training.status'), width: 320 },
      { name: '', width: 250, cellTemplate: this.actionseetr, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];

  }




  loadTableprop() {
    console.log('index', this.indexee)
    console.log('Action', this.actionsee);
    const gT = (key: string) => this.translationService.getTranslation(key);
    this.columns2 = [
      { prop: 'index', name: '#', width: 50, cellTemplate: this.indexee, canAutoResize: false },
      { prop: 'current_Employer', name: gT('APs.ApItems.Employee_Summary.Current_Employer'), width: 180 },
      { prop: 'employment_Salary', name: gT('APs.ApItems.Employee_Summary.Salary'), width: 180 },
      { prop: 'employment_Started_date', name: gT('APs.ApItems.Employee_Summary.Start_Date'), width: 180 },
      { name: '', width: 200, cellTemplate: this.actionsee, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];
  }



  updateEmpoyeeMon(data) {
    console.log("uddated emp");
    this.loadMonitoringData();
    this.editMode = false;
    this.updatedevent.emit(true);
  }


  updatedBusiness(data){
    this.loadBusinessMonitoringData();
    this.editModeBusiness = false;
    this.updatedevent.emit(true);
  }

  updatedphaseMon(data){
    this.loadPhaseOutMonitoringData();
    this.editModePhaseOut = false;
    this.updatedevent.emit(true);
  }


  editModeTraining:boolean = false;
  updatedTrainingMon(data){
    this.loadTrainingData();
    this.editModeTraining = false;
    this.updatedevent.emit(true);
  }

  updatedeventThreeWheel(data){
    this.loadThreeWheelMonitoringData();
    this.editModeThreeWheel = false;
    this.updatedevent.emit(true);
  }

  editTraining:boolean;
}
