
import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, flatMap, startWith } from 'rxjs/operators';
import { PersonalData } from '../models/app-add/personalData';


@Injectable()
export class PdfDataSharing 
{
    personModel: PersonalData;
    age:number;
    personDistrictName:String;
    personCountryName:String;
    personCityName:String;
    gender:String;
    
  constructor() 
  {
    

  }
  
}

