import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-person-info',
  templateUrl: './business-person-info.component.html',
  styleUrls: ['./business-person-info.component.scss']
})
export class BusinessPersonInfoComponent implements OnInit {
  selectedCar:string;
  constructor() { }

  ngOnInit(): void {
  }

  IsBusineesChange:boolean;

  selectedCurrentType(val){
    
  }

}
