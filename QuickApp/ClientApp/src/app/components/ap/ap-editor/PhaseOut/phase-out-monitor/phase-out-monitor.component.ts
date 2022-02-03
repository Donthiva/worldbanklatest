import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { PersonalData } from 'src/app/models/app-add/personalData';
import { phaseOutMonitor } from 'src/app/models/MoniorModels/phaseOut';
import { SelectPersonTypes } from 'src/app/models/selectPersonType';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { ConfigurationService } from 'src/app/services/configuration.service';
import { PersonEndpoint } from 'src/app/services/masterdataservice/personService';
import { MonitorEndpoint } from 'src/app/services/monitor/monitorService';

@Component({
  selector: 'app-phase-out-monitor',
  templateUrl: './phase-out-monitor.component.html',
  styleUrls: ['./phase-out-monitor.component.scss']
})
export class PhaseOutMonitorComponent implements OnInit {

  constructor(private translationService: AppTranslationService, private monitorservice: MonitorEndpoint, private alertService: AlertService, private personservice: PersonEndpoint, public datepipe: DatePipe, private configurations: ConfigurationService) { }

  personModel: PersonalData;
  @Input() personData: PersonalData;
  @Input() monitorEditmode: phaseOutMonitor;
  @Input() editMode: boolean;

  @Output() updatedevent: EventEmitter<boolean> = new EventEmitter();


  EconStatus = [
    { id: 'Red', name: 'Red' },
    { id: 'Yellow', name: 'Yellow' },
    { id: 'Green', name: 'Green' },
  ]

  decisionMade = [
    {
      id: 'EAC', name: 'EAC'
    }, 
    {
      id: 'After Business Plan Preparation', name: 'After Business Plan Preparation'
    }
  ]



  socialWellBeign = [
    {
      id: 'Live with the close family', name: 'Live with the close family'
    },
    {
      id: 'Live alone', name: 'Live alone'
    },
    {
      id: 'Better physical living condition', name: 'Better physical living condition'
    },
    {
      id: 'Poor physical living condition', name: 'Poor physical living condition'
    },
    {
      id: 'Better caring and protection ', name: 'Better caring and protection'
    },
    {
      id: 'Poor caring and protection ', name: 'Poor caring and protection '
    },
    {
      id: 'Healthy', name: 'Healthy'
    },
    {
      id: 'Healthy problems', name: 'Healthy problems'
    },
  ]


  economyWellBeign = [
    {
      id: 'Depend on the interest of the fixed deposit', name: 'Depend on the interest of the fixed deposit'
    },
    { id: 'Having other income generation source ', name: 'Depend on the interest of the fixed deposit' }
  ]

  IsList = [
    { id: true, name: 'Yes' },
    { id: false, name: 'No' },

  ]



  satisfactionLevelList = [
    {
      id: 'Satisfied', name: 'Statisfied'
    },
    {
      id: 'Moderately satisfied', name: 'Moderately satisfied'
    },
    {
      id: 'Not satisfied', name: 'Not satisfied'
    },


  ]

  personTypes: SelectPersonTypes;

  imageUrl: boolean = false;


  phaseOutMonitor: phaseOutMonitor = new phaseOutMonitor();
  ngOnInit(): void {

    this.LoadMonitorPeriods()
  }
  CurrentType: number;
  personTypeId: number;
  phaseOutMonitorOriginal: phaseOutMonitor = new phaseOutMonitor();
  ngOnChanges() {

    console.log("employee monitor data", this.personData);
    this.personModel = this.personData;
    if (this.personData != undefined) {
      this.CurrentType = this.personData.PersonType;
      this.personTypeId = this.personData.Person_ID;

    }

    if (this.editMode) {
      console.log("came to monitor edit",this.monitorEditmode);
      this.phaseOutMonitor = this.monitorEditmode;
       this.phaseOutMonitor.monitordate = this.datepipe.transform(this.monitorEditmode.monitordate, 'yyyy-MM-dd');
      this.phaseOutMonitorOriginal = JSON.parse(JSON.stringify(this.phaseOutMonitor));
      console.log("monitor data", this.phaseOutMonitor)
    }




  }


  openDoc(doc) {
    window.open(this.configurations.baseUrl + '/' + doc.path, "_blank");
  }

  deleteDoc(doc, index) {
    console.log("delete", doc);
    this.phaseOutMonitor.phaseOutMonitorDocuments.splice(index, 1)
    console.log("after delete", this.phaseOutMonitor);

    // this.buinsessMonitor.DeleteBusinessImagesMonitor(doc.id, 1).subscribe(
    //   reponse => {

    //   }
    // )
  }

  deleteImg(doc, index) {
    console.log("delete", doc);
    this.phaseOutMonitor.phaseOutMonitorImages.splice(index, 1)
    console.log("after delete", this.phaseOutMonitor);

    // this.buinsessMonitor.DeleteBusinessImagesMonitor(doc.id, 3).subscribe(
    //   reponse => {

    //   }
    // )
  }

  deleteVideo(doc, index) {
    console.log("delete", doc);
    this.phaseOutMonitor.phaseOutMonitorVideos.splice(index, 1)
    console.log("after delete", this.phaseOutMonitor);

    // this.buinsessMonitor.DeleteBusinessImagesMonitor(doc.id, 2).subscribe(
    //   reponse => {

    //   }
    // )
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
    this.validationfailed = false;

    if ((this.phaseOutMonitor.fileNumber == undefined || this.phaseOutMonitor.fileNumber == null || this.phaseOutMonitor.fileNumber == "") ||
      (this.phaseOutMonitor.socialWellBeing == undefined || this.phaseOutMonitor.socialWellBeing == null || this.phaseOutMonitor.socialWellBeing == "") ||
      (this.phaseOutMonitor.isInterestOfFixedDeposit == undefined || this.phaseOutMonitor.isInterestOfFixedDeposit == null) ||
      (this.phaseOutMonitor.isLivesWithcloseFamily == undefined || this.phaseOutMonitor.isLivesWithcloseFamily == null) ||
      (this.phaseOutMonitor.isIncomeGeneratingSources == undefined || this.phaseOutMonitor.isIncomeGeneratingSources == null)
    ) {
      console.log("before validation", this.phaseOutMonitor);

      this.alertService.showMessage('Altert', 'Please fill phaseout related data correctly', MessageSeverity.warn);
      this.validationfailed = true;
    } else {
      this.phaseOutMonitor.personID = this.personTypeId;

      //monitor data
      this.phaseOutMonitor.monitor.monitor_Person_ID = this.personTypeId;
      var monitordate = new Date();
      this.phaseOutMonitor.monitor.monitor_Date = this.datepipe.transform(monitordate, 'yyyy-MM-dd')
      this.phaseOutMonitor.monitor.monitor_Update = "";
      this.phaseOutMonitor.monitor.monitor_LRP_Responds_action = 1;
      this.phaseOutMonitor.monitor.monitor_Remarks = "second monitor time";

      this.phaseOutMonitor.monitor.monitorDuration.monitor_Duration_Description = "duration description seond time";

      this.validationfailed = false;

      const formData: FormData = new FormData();

      for (let i = 0; i < this.fileListToUpload.length; i++) {
        formData.append("file" + i, this.fileListToUpload[i], this.fileListToUpload[i].name);
      }



      formData.append('jsonString', JSON.stringify(this.phaseOutMonitor));

      this.monitorservice.AddPhaseOutMonitor(formData).subscribe(
        response => {
          this.adddatareponse = response;



          if (this.adddatareponse.status == 200) {
            this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
            this.personModel = new PersonalData();
            this.phaseOutMonitor = new phaseOutMonitor();
            this.personData = undefined;
            this.fileListToUpload = [];
            this.updatedevent.emit(false);
          } else {
            this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
          }
          console.log("reponse added", response);
        }
      )
    }



  }


  clear() {
    this.personModel = new PersonalData();
    this.phaseOutMonitor = new phaseOutMonitor();
    this.personData = undefined;
    this.updatedevent.emit(false);
    this.validationfailed = false
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

  adddatareponse2: any;
  updateMonitor() {


    var count = 0;
    for (let i = 0; i < this.fileListToUpload.length; i++) {
      count++;
    }

    console.log('count', count)

    if ((JSON.stringify(this.phaseOutMonitorOriginal) != JSON.stringify(this.phaseOutMonitor)) || count > 0) {





      this.validationfailed = false;

      console.log("before validation", this.phaseOutMonitor);

      if ((this.phaseOutMonitor.fileNumber == undefined || this.phaseOutMonitor.fileNumber == null || this.phaseOutMonitor.fileNumber == "") ||
        // (this.phaseOutMonitor.monitorPeriod == undefined || this.phaseOutMonitor.monitorPeriod == null || this.phaseOutMonitor.monitorPeriod == "") ||
        (this.phaseOutMonitor.socialWellBeing == undefined || this.phaseOutMonitor.socialWellBeing == null || this.phaseOutMonitor.socialWellBeing == "") ||
        (this.phaseOutMonitor.isInterestOfFixedDeposit == undefined || this.phaseOutMonitor.isInterestOfFixedDeposit == null) ||
        (this.phaseOutMonitor.isLivesWithcloseFamily == undefined || this.phaseOutMonitor.isLivesWithcloseFamily == null) ||
        (this.phaseOutMonitor.isIncomeGeneratingSources == undefined || this.phaseOutMonitor.isIncomeGeneratingSources == null)
      ) {
        this.alertService.showMessage('Altert', 'Please fill Phaseout  related data correctly', MessageSeverity.warn);
        this.validationfailed = true;
      }
      else {
        const formData: FormData = new FormData();

        for (let i = 0; i < this.fileListToUpload.length; i++) {
          formData.append("file" + i, this.fileListToUpload[i], this.fileListToUpload[i].name);
        }



        formData.append('jsonString', JSON.stringify(this.phaseOutMonitor));

        this.validationfailed = false;
        this.monitorservice.UpdatePhaseOutMonitor(formData).subscribe(
          response => {
            this.validationfailed = false;
            this.adddatareponse2 = response;
            if (this.adddatareponse2.status == 200) {
              this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
              this.personModel = new PersonalData();
              this.phaseOutMonitor = new phaseOutMonitor();
              this.personData = undefined;
              this.fileListToUpload = [];
              this.updatedevent.emit(false);
            } else {
              this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
            }
            console.log("reponse added", response);
          }
        )
      }
    } else {
      this.alertService.showMessage('Info', 'Nothing to update', MessageSeverity.info);
    }
  }


  selectedEcon(val) {

  }

}
