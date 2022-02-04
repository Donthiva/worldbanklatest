import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { PersonalData } from 'src/app/models/app-add/personalData';
import { ThreeWheeler } from 'src/app/models/MoniorModels/ThreeWheelMonitorModel';
import { SelectPersonTypes } from 'src/app/models/selectPersonType';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { PersonEndpoint } from 'src/app/services/masterdataservice/personService';
import { MonitorEndpoint } from 'src/app/services/monitor/monitorService';

@Component({
  selector: 'app-three-wheel-monitor',
  templateUrl: './three-wheel-monitor.component.html',
  styleUrls: ['./three-wheel-monitor.component.scss']
})
export class ThreeWheelMonitorComponent implements OnInit {
  threeWheelMonitor: ThreeWheeler
  personModel: PersonalData


  constructor(private translationService: AppTranslationService, private monitorservice: MonitorEndpoint,private configurations: ConfigurationService, private alertService: AlertService,private personservice:PersonEndpoint,public datepipe: DatePipe) {
    this.threeWheelMonitor = new ThreeWheeler();
    this.personModel = new PersonalData();

  }
  EngageList = [
    { id: 'Full Time', name: 'Full Time' },
    { id: 'Part Time', name: 'Part Time(Half Day)' },
  ]


  ThreeWheelPark = [
    {
      id:'A',name:'A'
    },
    {
      id:'B',name:'B'
    },
    {
      id:'C',name:'C'
    }
  ]

  


  NumberWorkingDays = [
    { id: '1', name: '1' },
    { id: '2', name: '2' },
    { id: '3', name: '3' },
    { id: '4', name: '4' },
    { id: '5', name: '5' },
    { id: '6', name: '6' },
    { id: '7', name: '7' }
  ]



  IsList = [
    { id: true, name: 'Yes' },
    { id: false, name: 'No' },
  ]

  Status = [
    { id: 'Full Time', name: 'Full Time' },
    { id: 'Part Time', name: 'Part Time' },
  ]

  IncomeStatus = [
    { id: 'High', name: 'High' },
    { id: 'Low', name: 'Low' },
    { id: 'Same', name: 'Same' },
  ]


  Situation = [
    { id: 'Green', name: 'Green' },
    { id: 'Yellow', name: 'Yellow' },
    { id: 'Red', name: 'Red' },
  ]


  @Input() personData: PersonalData;
  @Input() monitorEditmode: ThreeWheeler;
  @Input() editMode: boolean;

  @Output() updatedevent: EventEmitter<boolean> = new EventEmitter();

  CurrentType: number;


  ngOnInit(): void {

    this.LoadMonitorPeriods();
  }

  threeWheelMonitorOriginal: ThreeWheeler
  personTypeId: number;
  ngOnChanges() {

    console.log("employee monitor data", this.personData);
    this.personModel = this.personData;
    if (this.personData != undefined) {
      this.CurrentType = this.personData.PersonType;
      this.personTypeId = this.personData.Person_ID;

    }

    if (this.monitorEditmode) {
     

      


      console.log("came to monitor edit")
      this.threeWheelMonitor = this.monitorEditmode;
      // this.threeWheelMonitor.monitor.monitorDuration.monitor_Duration_Start_date = this.datepipe.transform(this.monitorEditmode.monitor.monitorDuration.monitor_Duration_Start_date, 'yyyy-MM-dd');
      this.threeWheelMonitorOriginal = JSON.parse(JSON.stringify(this.monitorEditmode));
      console.log("monitor data", this.threeWheelMonitor)
    }




  }
  clear() {
    this.personModel = new PersonalData();
    this.threeWheelMonitor = new ThreeWheeler();
    this.personData = undefined;
    this.updatedevent.emit(false);
    this.validationfailed = false;
    this.fileListToUpload =[];
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


  openDoc(doc) {
    window.open(this.configurations.baseUrl + '/' + doc.path, "_blank");
  }

  deleteDoc(doc, index) {
    console.log("delete", doc);
    this.threeWheelMonitor.threeWheelMonitorDocuments.splice(index, 1)
    console.log("after delete", this.threeWheelMonitor);

    // this.threeWheelMonitor.DeleteBusinessImagesMonitor(doc.id, 1).subscribe(
    //   reponse => {

    //   }
    // )
  }

  deleteImg(doc, index) {
    console.log("delete", doc);
    this.threeWheelMonitor.threeWheelMonitorImages.splice(index, 1)
    console.log("after delete", this.threeWheelMonitor);

    // this.buinsessMonitor.DeleteBusinessImagesMonitor(doc.id, 3).subscribe(
    //   reponse => {

    //   }
    // )
  }

  deleteVideo(doc, index) {
    console.log("delete", doc);
    this.threeWheelMonitor.threeWheelMonitorVideos.splice(index, 1)
    console.log("after delete", this.threeWheelMonitor);

    // this.buinsessMonitor.DeleteBusinessImagesMonitor(doc.id, 2).subscribe(
    //   reponse => {

    //   }
    // )
  }




  deletefile(i) {
    console.log("delete file", i);
    this.fileListToUpload.splice(i, 1);
  }


  SelectedStatus(val) {
    this.threeWheelMonitor.status = val.id;
  }


  SelectedIncomeStatus(val) {
    this.threeWheelMonitor.incomeStatus = val.id;
  }
  validationfailed: boolean = false;
  adddatareponse2: any;
  addThreeWheelMonitor() {
    this.validationfailed = false;
    if (
      (this.threeWheelMonitor.currentPark == undefined || this.threeWheelMonitor.currentPark == null || this.threeWheelMonitor.currentPark == "") ||
      (this.threeWheelMonitor.status == undefined || this.threeWheelMonitor.status == null || this.threeWheelMonitor.status == "") ||
      (this.threeWheelMonitor.monthlyIncome == undefined || this.threeWheelMonitor.monthlyIncome == null) ||
      (this.threeWheelMonitor.incomeStatus == undefined || this.threeWheelMonitor.incomeStatus == null || this.threeWheelMonitor.incomeStatus == "") ||
      (this.threeWheelMonitor.situation == undefined || this.threeWheelMonitor.situation == null || this.threeWheelMonitor.situation == "")
    ) {
      this.alertService.showMessage('Altert', 'Please fill threeWheel related data correctly', MessageSeverity.warn);
      this.validationfailed = true;
    } else {
      this.threeWheelMonitor.personID = this.personTypeId;


      //monitor data
      this.threeWheelMonitor.monitor.monitor_Person_ID = this.personTypeId;
      var monitordate = new Date();
      this.threeWheelMonitor.monitor.monitor_Date = this.datepipe.transform(monitordate, 'yyyy-MM-dd')
      this.threeWheelMonitor.monitor.monitor_Update = "";
      this.threeWheelMonitor.monitor.monitor_LRP_Responds_action = 1;
      this.threeWheelMonitor.monitor.monitor_Remarks = "second monitor time";
      this.validationfailed = false;
      console.log("threeWheel monitor", this.threeWheelMonitor);


      const formData: FormData = new FormData();

      for (let i = 0; i < this.fileListToUpload.length; i++) {
        formData.append("file" + i, this.fileListToUpload[i], this.fileListToUpload[i].name);
      }



      formData.append('jsonString', JSON.stringify(this.threeWheelMonitor));

      console.log("json", JSON.stringify(this.threeWheelMonitor));


      this.monitorservice.AddThreeWheelMonitor(formData).subscribe(
        response => {
          this.adddatareponse2 = response;
          if (this.adddatareponse2.status == 200) {
            this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
            this.personModel = new PersonalData();
            this.threeWheelMonitor = new ThreeWheeler();
            this.personData = undefined;
            this.fileListToUpload =[];
            this.clear();
            this.updatedevent.emit(false);
          } else {
            this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
          }
          console.log("reponse added", response);
        }

      )
    }




  }





  fileListToUpload: Array<File> = [];
  handleFileInput(files: FileList) {

    for (let i = 0; i < files.length; i++) {
      this.fileListToUpload.push(files.item(i));
    }


  }

  adddatareponse3: any;
  updateThreeWheelMonitor() {

    var count = 0;
    for (let i = 0; i < this.fileListToUpload.length; i++) {

      count = count + 1;
    }

    if (JSON.stringify(this.threeWheelMonitorOriginal) == JSON.stringify(this.threeWheelMonitor) && count == 0) {
      this.alertService.showMessage('Info', 'Nothing to update', MessageSeverity.info);

    } else {
      if ((this.threeWheelMonitor.monitor.monitorDuration.monitor_Duration_Start_date == undefined || this.threeWheelMonitor.monitor.monitorDuration.monitor_Duration_Start_date == null) ||
        (this.threeWheelMonitor.currentPark == undefined || this.threeWheelMonitor.currentPark == null || this.threeWheelMonitor.currentPark == "") ||
        (this.threeWheelMonitor.status == undefined || this.threeWheelMonitor.status == null || this.threeWheelMonitor.status == "") ||
        (this.threeWheelMonitor.monthlyIncome == undefined || this.threeWheelMonitor.monthlyIncome == null) ||
        (this.threeWheelMonitor.incomeStatus == undefined || this.threeWheelMonitor.incomeStatus == null || this.threeWheelMonitor.incomeStatus == "") ||
        (this.threeWheelMonitor.situation == undefined || this.threeWheelMonitor.situation == null || this.threeWheelMonitor.situation == "")
      ) {
        this.alertService.showMessage('Altert', 'Please fill threeWheel related data correctly', MessageSeverity.warn);
      } else {


        const formData: FormData = new FormData();

        for (let i = 0; i < this.fileListToUpload.length; i++) {
          formData.append("file" + i, this.fileListToUpload[i], this.fileListToUpload[i].name);
        }



        formData.append('jsonString', JSON.stringify(this.threeWheelMonitor));

        console.log("json", JSON.stringify(this.threeWheelMonitor));


        this.monitorservice.UpdateThreeWheelMonitor(formData).subscribe(
          response => {
            this.adddatareponse3 = response;
            if (this.adddatareponse3.status == 200) {
              this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
              this.personModel = new PersonalData();
              this.threeWheelMonitor = new ThreeWheeler();
              this.personData = undefined;
              this.fileListToUpload =[];
              this.clear();
              this.updatedevent.emit(false);

            } else {
              this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
            }
            console.log("reponse added", response);
          }

        )
      }
    }




  }

}
