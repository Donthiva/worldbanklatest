import { Address } from "cluster";
import { Monitor } from "./employeeMonitorModel";



export class businessMonitorModel{

    public business_ID: number;

    public business_Person_ID: number;

    public fileNumber:string;

    public business_address: number; 

    public business_GIS: string; 

    public business_First_Buiness_Plan: number;

    public business_Second_Buiness_Plan: number;

    public business_Type: number;

    public business_changed: boolean;

    public business_Second_Business: string;

    public business_Management_Mode: number;

    public business_Investment_Sources: string;
    
    public buisness_In_Out: number;

    public businessStatus: string;

    public gsbsPreviousIncome: number;

    public gBBSBusinessDescription: string;

    public relocatedMonthAndYear: Date;

    public isEntitlementFund:boolean;

    public isBankLoan:boolean;

    public isOwnSaving:boolean;

    public isPawingJewelary:boolean;

    public isInformalLoans:boolean;

    public isPartnerShip:boolean;

    public businessSituation:string;

    public monthlyIncome:number;

    public isbuinessDiversified:boolean;

    public monitorPeriodId:number;

    public oldBusinesses:string;

    public isBusinessChangeFromInitial:boolean;

    public cityOut:string;

    public incomeStatus:string;

    public isOperatingWithStableProfit:boolean;

    public isAlternativeSite:boolean;

    public businessSummary:string;

    public summary:string;

    public isneedRequested:boolean;

    public monitorId:number;

    public currentBusiness:string;

    public contactable:boolean;

    public isAPDead:boolean;

    public howBusinessCHange:string;

    public howIsFamilyIfdead:string;

    public incomeStatusComparedToGSBS:string;

    public incomeStatusComparedToPM:string;

    public dailyIncome:number;

    public isNeedOrRequirment:boolean;

    public requirmentNeed:string;

    public specialObservation:string;

    public businessStaff:bussinessStaff = new bussinessStaff();

    public businessVehicle:bussinessVehicle = new bussinessVehicle();

    public businessStocks:businessStocks = new businessStocks();

    public cilentele:cilentele = new cilentele();

    public machinaryEquipment:machinaryEquipment = new machinaryEquipment();

    public shopspace:shopspace = new shopspace();

    public managementPractices:managementPractices = new managementPractices();

    public monitor: Monitor = new Monitor();

    public businessMonitorImages : Array<BusinessMonitorImages> = new Array<BusinessMonitorImages>();

    public businessMonitorDocuments : Array<BusinessMonitorImages> = new Array<BusinessMonitorImages>();

    public businessMonitorVideos : Array<BusinessMonitorImages> = new Array<BusinessMonitorImages>();

    public address : address = new address();
}


export class address{




    public int:number;

    public  adress_Owner_ID:number;

    public  adress_Owner_Type:number;
    public  address_Number:string

    public  address_Street1:string;
    public  Address_Street2:string;

    public  cordinateX:number;

    public  cordinateY:number;

    public  cityId:number

    public  districtId:number;

    public  statesId:number;

    public  countryId:number

    public  Longitude:string

    public  Latitude:string;


}

export class BusinessMonitorImages{

    public id: number;

    public path: string;

    public fileName: string;

    public fileType: string;

}


export class bussinessStaff {

    public id:number;

    public businessId:number;

    public number:number

    public status:string;

    public note:string;

}



export class bussinessVehicle {

    public id:number;

    public businessId:number;

    public purchased:string;

    public note:string;

    public number:number;


}


export class businessStocks {

    public id:number;

    public businessId:number;

    public status:string;

    public note:string;

    public number:number;


}

export class cilentele {

    public id:number;

    public businessId:number;

    public status:number;

    public note:string;

    public number:number;


}


export class machinaryEquipment {

    public id:number;

    public businessId:number;

    public status:number;

    public note:string;

    public number:number;


}


export class shopspace {

    public id:number;

    public businessId:number;

    public status:string;

    public note:string;

    public number:number;


}

export class managementPractices {

    public id:number;

    public businessId:number;

    public status:string;

    public note:string;

    public number:number;


}