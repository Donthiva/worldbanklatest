import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonalData } from 'src/app/models/app-add/personalData';
import { phaseOutMonitor } from 'src/app/models/MoniorModels/phaseOut';
import { TrainingModel } from 'src/app/models/MoniorModels/trainingModel';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { PersonEndpoint2 } from 'src/app/services/masterdataservice/personService2';

@Component({
  selector: 'app-training-data',
  templateUrl: './training-data.component.html',
  styleUrls: ['./training-data.component.scss']
})
export class TrainingDataComponent implements OnInit {

  constructor(private personEndpoint: PersonEndpoint2, private alertService: AlertService,public datepipe: DatePipe) { }

  @Input() personData: PersonalData;
  @Input() Trainingmode: TrainingModel;
  @Input() editMode: boolean;
  personModel: PersonalData;

  TrainigTypes: any = [];

  IsList = [
    { id: true, name: 'Yes' },
    { id: false, name: 'No' },
  ]

  validationfailed = false;

  @Output() updatedevent: EventEmitter<boolean> = new EventEmitter();

  trainingdata: TrainingModel = new TrainingModel();
  ngOnInit(): void {

    this.GetAllTrainingTypes();
  }
  CurrentType: number;
  personTypeId: number;
  ngOnChanges() {

    console.log("employee monitor data", this.personData);
    this.personModel = this.personData;
    if (this.personData != undefined) {
      this.CurrentType = this.personData.PersonType;
      this.personTypeId = this.personData.Person_ID;

    }


    if (this.editMode) {
      console.log("came to monitor edit")
      this.trainingdata = this.Trainingmode;
      this.trainingdata.trainingDate = this.datepipe.transform(this.Trainingmode.trainingDate, 'yyyy-MM-dd');
      console.log("monitor data", this.Trainingmode)
    }
  }

  GetAllTrainingTypes() {
    this.personEndpoint.GetAllTrainingTypes().subscribe(
      reponse => {
        this.TrainigTypes = reponse;
        console.log("Trainig", this.TrainigTypes);
      }
    )
  }

  adddatareponse2: any;
  AddTrainingData() {

    if (this.trainingdata.training_Type == null ||
      this.trainingdata.trainingDate == null ||
      (this.trainingdata.trainigPeriod == null || this.trainingdata.trainigPeriod == '') ||
      (this.trainingdata.trainigOrganization == null || this.trainingdata.trainigOrganization == '') ||
      this.trainingdata.isEmployed == null || this.trainingdata.salaryStatus == null ||
      (this.trainingdata.status == null || this.trainingdata.status == '') ||
      (this.trainingdata.description == null || this.trainingdata.description == '') ||
      this.trainingdata.isEmployedSectorRelated == null ||
      this.trainingdata.socialRecognition == null ||
      this.trainingdata.isFamilyMemberInvolved == null ||
      this.trainingdata.isFamilyMemberCompletedTraining == null ||
      (this.trainingdata.trainingDoneBy == null || this.trainingdata.trainingDoneBy == '') ||
      (this.trainingdata.note == null || this.trainingdata.note == '')

    ) {
      this.alertService.showMessage('Warn', 'Please fill all required fields correctly', MessageSeverity.warn);
      this.validationfailed = true;
    } else {
      this.validationfailed = false;
      this.trainingdata.training_Person_ID = this.personTypeId;
      this.personEndpoint.AddTrainingData(this.trainingdata).subscribe(
        reponse => {
          console.log("reponse training", reponse);

          this.adddatareponse2 = reponse;
          if (this.adddatareponse2.status == 200) {
            this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
            this.personModel = new PersonalData();
            this.trainingdata = new TrainingModel();
            this.personData = undefined;
            this.updatedevent.emit(false);
          } else {
            this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
          }
        }
      )
    }




  }
  adddatareponse1: any;
  UpdateTrainingData() {

    if (this.trainingdata.training_Type == null ||
      this.trainingdata.trainingDate == null ||
      (this.trainingdata.trainigPeriod == null || this.trainingdata.trainigPeriod == '') ||
      (this.trainingdata.trainigOrganization == null || this.trainingdata.trainigOrganization == '') ||
      this.trainingdata.isEmployed == null || this.trainingdata.salaryStatus == null ||
      (this.trainingdata.status == null || this.trainingdata.status == '') ||
      (this.trainingdata.description == null || this.trainingdata.description == '') ||
      this.trainingdata.isEmployedSectorRelated == null ||
      this.trainingdata.socialRecognition == null ||
      this.trainingdata.isFamilyMemberInvolved == null ||
      this.trainingdata.isFamilyMemberCompletedTraining == null ||
      (this.trainingdata.trainingDoneBy == null || this.trainingdata.trainingDoneBy == '') ||
      (this.trainingdata.note == null || this.trainingdata.note == '')

    ) {
      this.alertService.showMessage('Warn', 'Please fill all required fields correctly', MessageSeverity.warn);
      this.validationfailed = true;
    } else {
      this.validationfailed = false;
      this.trainingdata.training_Person_ID = this.personTypeId;
      this.personEndpoint.UpdateTrainingData(this.trainingdata).subscribe(
        reponse => {
          this.adddatareponse1 = reponse;
          console.log("reponse training", reponse);
          if (this.adddatareponse1.status == 200) {
            this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
            this.personModel = new PersonalData();
            this.trainingdata = new TrainingModel();
            this.personData = undefined;
            this.updatedevent.emit(false);
          } else {
            this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
          }
        }
      )
    }



  }

  Clear() {
    this.validationfailed = false;
    this.personModel = new PersonalData();
    this.trainingdata = new TrainingModel();
    this.personData = undefined;
    this.updatedevent.emit(false);
  }

  selectedType(data) {

  }


  selectedIsEmp(data) {

  }

  employeSecRelated(data) {

  }

  IsFamilyInvolved(data) {

  }

  addTraining() {

  }

  updateTraining() {

  }


}
