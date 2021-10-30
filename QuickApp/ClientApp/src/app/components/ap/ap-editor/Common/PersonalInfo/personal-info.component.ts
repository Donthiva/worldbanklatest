import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectPersonTypes } from 'src/app/models/selectPersonType';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

   personTypes:SelectPersonTypes;


  @Output() showTab: EventEmitter<SelectPersonTypes> = new EventEmitter();

  constructor() { 

    this.personTypes = new SelectPersonTypes();
  }

  selectedCar: number;
  cars = [
    { id: 1, name: 'Bussiness Person' },
    { id: 2, name: 'ThreeWheel Driver' },
    { id: 3, name: 'Employee' },
    { id: 4, name: 'Phase out' },
];

  ngOnInit(): void {
  }



  selectedCurrentType(data){
    if(data.id == 1){
     this.personTypes.showtabThreeWheel = false;
     this.personTypes.showtabEmployee = false;
     this.personTypes.showtabPhase = false;
     this.personTypes.showtabBusiness = true;
    }else if(data.id == 2){
     this.personTypes.showtabThreeWheel = true;
     this.personTypes.showtabEmployee = false;
     this.personTypes.showtabPhase = false;
     this.personTypes.showtabBusiness = false;
    }else if(data.id == 3){
     this.personTypes.showtabThreeWheel = false;
     this.personTypes.showtabEmployee = true;
     this.personTypes.showtabPhase = false;
     this.personTypes.showtabBusiness = false;
    }else if(data.id == 4){
     this.personTypes.showtabThreeWheel = false;
     this.personTypes.showtabEmployee = false;
     this.personTypes.showtabPhase = true;
     this.personTypes.showtabBusiness = false;
    }


    this.showTab.emit(this.personTypes);
 
   }

}
