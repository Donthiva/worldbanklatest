import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { EventwiseParticipants, Intervention, SelectedPersonsData } from 'src/app/models/Intervention';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { PersonEndpoint } from 'src/app/services/masterdataservice/personService';
import { PersonEndpoint2 } from 'src/app/services/masterdataservice/personService2';

@Component({
  selector: 'app-ap-intervention',
  templateUrl: './ap-intervention.component.html',
  styleUrls: ['./ap-intervention.component.scss']
})
export class ApInterventionComponent implements OnInit {

  eventTypes = [
    { id: 1, name: 'Workshop' },
    { id: 2, name: 'Event' },
    { id: 3, name: 'Activity' },
    { id: 4, name: 'Programme' },
  ];

  specificAPCategory = [
    { id: 1, name: 'Shop Assistant' },
    { id: 2, name: 'Mobile Vendors' },
    { id: 3, name: 'Business Operators' },
    { id: 4, name: 'Programme' },
  ]

  columns: any[] = [];
  rows: any[] = [];
  update :boolean =false;
  personList :any = [];
  personTypesarr :any =[];
  loadingIndicator: boolean;

  
  @ViewChild('indexTemplateIntervention', { static: true })
  indexTemplateIntervention: TemplateRef<any>;

  @ViewChild('actionsTemplateIntervention', { static: true })
  actionsTemplateIntervention: TemplateRef<any>;
  InterventionData:Intervention;

  constructor(private translationService: AppTranslationService,private alertService: AlertService,private personEndpoint: PersonEndpoint2,public datepipe: DatePipe,private Personservice: PersonEndpoint) {
    this.InterventionData = new Intervention();
   }

  ngOnInit(): void {

    const gT = (key: string) => this.translationService.getTranslation(key);

    this.columns = [
     
      { prop: 'nameOfEvent', name: gT('APs.ApItems.Intervention.nameOfEvent'), width: 320 },
      { prop: 'briefDescription', name: gT('APs.ApItems.Intervention.briefDescription'), width: 320 },
      { name: '', width: 250, cellTemplate: this.actionsTemplateIntervention, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];

    this.getAllInterventions();
    this.GetAllPersons();
    this.GetPersonTypes();
  }


  GetAllPersons() {
    this.personEndpoint.GetAllPersonsDataWithoutRelated().subscribe(
      reponse => {
        this.personList = reponse;
        console.log("PersonList", this.personList);
      }
    )
  }


  GetPersonTypes(){
    this.Personservice.GetPersonTypes().subscribe(
      reponse => {
        this.personTypesarr = reponse;
        console.log('personTypesarr', this.personTypesarr);
      }
    )
  }


  selectedAPList:any = [];
  selectedAPs(event){
    console.log('added APs',event);
    this.selectedAPList = event;
    this.InterventionData.participants = [];
    this.selectedAPList.forEach(element => {
      var partcipantdata = new EventwiseParticipants();
      partcipantdata.participantId = element.person_ID;
      this.InterventionData.participants.push(partcipantdata);
    });

  }

  addNewIntervention(){
    console.log('Adding Intervention', this.InterventionData);

   this.personEndpoint.AddIntervention(this.InterventionData).subscribe(
    response =>{
      console.log("addNewIntervention",response);
      this.InterventionData = new Intervention();
      this.alertService.showMessage('Success', 'Sucessfully added data', MessageSeverity.success);
      this.getAllInterventions();
    }
   )

  }

  updateIntervention(){
    console.log('updating Intervention', this.InterventionData);

    this.personEndpoint.UpdateIntervention(this.InterventionData).subscribe(
     response =>{
       console.log("update Intervention",response);
       this.InterventionData = new Intervention();
       this.alertService.showMessage('Success', 'Sucessfully updated data', MessageSeverity.success);
       this.getAllInterventions();
       this.update = false;
     }
    )
}


  deleteIntervention(){

  }

  getAllInterventions(){
  
    this.personEndpoint.GetALLInterventions().subscribe(respones => {
      var res = respones as any;
      this.rows = res;
    
    })
  }

  view(view){
    this.update = true;
 
  this.InterventionData = view;

  this.InterventionData.date = this.datepipe.transform(view.date, 'yyyy-MM-dd'); 
  
  this.InterventionData.selectedPersons = new Array<SelectedPersonsData>();
  this.InterventionData.participants.forEach(
    x=>{
      let p = new SelectedPersonsData();
     
      
      p.person_ID = x.participantId;
     

      this.personList.forEach(element => {
        if(element.person_ID == x.participantId ){
          this.InterventionData.selectedPersons.push(element.person_ID);
        }
      });

      
    }
  )



  }


  delete(view){
  
  }


  Clear(){
    this.InterventionData = new Intervention();
    this.update = false;
  }

}
