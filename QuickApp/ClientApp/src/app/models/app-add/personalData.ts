// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { StringifyOptions } from "querystring";
import { businessMonitorModel } from "../MoniorModels/businessMonitorModel";
import { EmployeeMonitor } from "../MoniorModels/employeeMonitorModel";
import { phaseOutMonitor } from "../MoniorModels/phaseOut";
import { ThreeWheeler } from "../MoniorModels/ThreeWheelMonitorModel";
import { vulnerabilityMonitor } from "../MoniorModels/vulnerabilityMonitor";



export class PersonalData {

   

    public Person_ID: number;
    public Person_NIC: string;
    public Person_File_number: string;
    public Person_Name: string;
    public Person_Gender: number;
    public MartialStatus:string;
    public Education:string;
    public Person_Contact_Number:number;
    public Land_Line:number;
    
    public Home_Contact_Number:number;


    public addressNo:string;
    public addressStreet:string;
    public City:number;
    public state:number;
    public country:number;
    public district:number;


    public martialStatusId:number;
    public educationalLevelId:number;
    public businessOrLivelihoodRelocationId:number
  

    public doa:boolean;

    




    public Person_DOB:string;
    public PersonType:number;

    public JobRole:string;
    public Employer:string;
    public Salary:number;

    public employeeRealocatedMonthandYear:string;
    public employeeBusinessLivelihoodRealocation:string;
    public employeeSpecialNotes:string;


    public BankName:number;
    public BankBranch:number;
    public AccountNumber:string;
    public BankAccountName:string;

    public previousTypeId:number;
    

    public EmployeeId:number;


    public gSBSLivelihoodEngagement:string;
    public monthlyIncome:string;
    public employer:string;
    public specialObservationsatGSBS:string;






    public businessGeneral:BusinessGeneral= new BusinessGeneral();
    public threeWheelDriver:ThreeWheelDriver = new ThreeWheelDriver();
    public phaseOut:PhaseOut = new PhaseOut();
    public vulnerability:Vulnerability = new Vulnerability();
    public vulnerabilityMonitorList : Array<vulnerabilityMonitor> = new Array<vulnerabilityMonitor>() ;
    public businessMonitorList: Array<businessMonitorModel> = new Array<businessMonitorModel>() ;
    public employeeMonitorList:Array<EmployeeMonitor> = new Array<EmployeeMonitor>() ;
    public threeWheelMonitorList:Array<ThreeWheeler> = new Array<ThreeWheeler>() ;
    public phaseOutMonitorList:Array<phaseOutMonitor> = new Array<phaseOutMonitor>();

    



    public apImages:Array<APFiles> = new Array<APFiles>();
    public apDocuments:Array<APFiles> = new Array<APFiles>();
    public apVideos:Array<APFiles> = new Array<APFiles>();
    public apUserImage:APFiles = new APFiles();
    //view helpers

    public GenderName:string;
    public PersonTypeName:String;


    public longitude:string;
    public latitude:String;

    public employeeMonitorImages : Array<EmployeeMonitorImages> = new Array<EmployeeMonitorImages>();

    public employeeMonitorDocuments : Array<EmployeeMonitorImages> = new Array<EmployeeMonitorImages>();

    public employeeMonitorVideos : Array<EmployeeMonitorImages> = new Array<EmployeeMonitorImages>();

}


export class BusinessGeneral{
    public BusineesPersonId:number;
    public BusinessPlanId:number;
    public BusinessTypeId:number;
    public IsEntilementFund:boolean;
    public IsBankLoans:boolean;
    public IsOwnService:boolean;
    public IsPawningJewellary:boolean;
    public IsformalLoans:boolean;
    public IsPartnerShip:boolean;
    public IsBusinessChanged:boolean;
    public GSBSPreviousIncome:number;
    public PreviousBusinessAtGoodShed:string;
    public ReallocatedMonthandyear:string;

    public isFirstBusinessPlan:boolean;
    public businessPlanNote:string;

    public businessInformationNote:string;

    public businessTypeNote:string;

    public businessAPType:number;

    public isBusinessPlanChangeFromInitialBP:boolean;
    
    public gSBSLivelihoodEngagement:string;
    public monthlyIncome:string;
    public business_BusinessLoaction:string;
    public specialObservationsatGSBS:string;




}

export class ThreeWheelDriver{
    public initialParkAtGSBS:string;
    public MonthlyIncomeGSBS:number;
    public EngagementAtGSBS:string;
    public ThreeWheelDriverId:number;

    public Employer:string
    

    public realocatedMonthandYear:string;
    public businessLivelihoodRealocation:string;
    public specialNotes:string;


    public gSBSLivelihoodEngagement:string;
    public monthlyIncome:string;
    public businessLoaction:string;
    public specialObservationsatGSBS:string;

}

export class PhaseOut{
    public PhaseOutId:number;
    public fileNumber:string;
    public DecisionMade:string;
    public Situation:string;
    public MonthAndYear:string;
    public PlanedBusiness:string;
    public ReasonForPhaseOut:string;
    public UseOfEntileFund:string;
    public SocialWellBeing:string;
    public IsInterestOfFixedDeposit:boolean;
    public IsLivesWithcloseFamily:boolean;
    public IsIncomeGeneratingSources:boolean;
    public PersonID:number;
    public PhaseOutDate:Date

    
}





export class Vulnerability{
    
    public vulnerability_ID:number;

    public vulnerability_Person_ID:number;

    public vulnerability_IS_Vulnerable:boolean;

    public vulnerability_Type:number;

    public vulnerability_Level:number;

    public vulnerability_Description:string;

    public vulnerability_Remarks:string;

    public otherVulnerability:string;

    public fileNumber:string;

    public backgroundInformation:string;

    public initialProjectInput:string;

    

}


export class EmployeeMonitorImages{

    public id: number;

    public path: string;

    public fileName: string;

    public fileType: string;

}


export class APFiles {
    public id:number;

    public path:string;

    public fileName:string;

    public fileType:string;

    public personId: number;

}
