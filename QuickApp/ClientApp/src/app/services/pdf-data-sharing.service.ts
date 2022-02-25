
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
    precatagory:string;
    CurrentType: number = 1;

    businnessorlivehoodrelocation: string;
    businessPlanvalue: string;
    businessTypevalue: string;
    IsEntitlementname: string;
    IsBankLoansname: string;
    IsOwnServicename: string;
    IsPawningJewellaryname: string;
    IsPartnerShipname: string;
    IsformalLoansname: string;
    IsBusinessChangedname: string;

    IsInterestOfFFixedDepositvalue: string;
    Isliveswithclosefamilyvalue: string;
    
  constructor() 
  {
    

  }
  
}

