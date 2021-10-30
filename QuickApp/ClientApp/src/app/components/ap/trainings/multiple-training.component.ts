import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonalData } from 'src/app/models/app-add/personalData';
import { TrainingModel, TrainingModelMultiple } from 'src/app/models/MoniorModels/trainingModel';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { PersonEndpoint2 } from 'src/app/services/masterdataservice/personService2';

@Component({
  selector: 'app-multiple-training',
  templateUrl: './multiple-training.component.html',
  styleUrls: ['./multiple-training.component.scss']
})
export class MultipleTrainingComponent implements OnInit {

  constructor(private personEndpoint: PersonEndpoint2, private alertService: AlertService,public datepipe: DatePipe) { }


  TrainigTypes: any = [];
  personList:any = [];


  IsList = [
    { id: true, name: 'Yes' },
    { id: false, name: 'No' },
  ]

  validationfailed = false;



  trainingdata: TrainingModelMultiple = new TrainingModelMultiple();
  ngOnInit(): void {
    this.GetAllPersons()
    this.GetAllTrainingTypes();
  }
  CurrentType: number;
  personTypeId: number;
  ngOnChanges() {


  }

  GetAllTrainingTypes() {
    this.personEndpoint.GetAllTrainingTypes().subscribe(
      reponse => {
        this.TrainigTypes = reponse;
        console.log("Trainig", this.TrainigTypes);
      }
    )
  }


  GetAllPersons() {
    this.personEndpoint.GetAllPersonsDataWithoutRelated().subscribe(
      reponse => {
        this.personList = reponse;
        console.log("PersonList", this.personList);
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
        // (this.selectedAPList.length == 0)
  
      ) {
        this.alertService.showMessage('Warn', 'Please fill all required fields correctly', MessageSeverity.warn);
        this.validationfailed = true;
      } else {
        this.validationfailed = false;

        this.trainingdata.training_Need = false;
        this.trainingdata.dS_office = 'test';

    
        this.personEndpoint.AddTrainingDataMultiple(this.trainingdata).subscribe(
          reponse => {
            console.log("reponse training", reponse);
  
            this.adddatareponse2 = reponse;
            if (this.adddatareponse2.status == 200) {
              this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
             
              this.trainingdata = new TrainingModelMultiple();
         
            } else {
              this.alertService.showMessage('Erroe', 'Error Submiting data', MessageSeverity.error);
            }
          }
        )
      }
  
  }


  adddatareponse1: any;
  UpdateTrainingData() {

    



  }

  selectedAPList:any = [];
  selectedAPs(event){
    console.log('added APs',event);
    this.selectedAPList = event;
    this.trainingdata.personList = [];
    this.selectedAPList.forEach(element => {
      this.trainingdata.personList.push(element.person_ID);
    });

  }

  Clear() {

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
