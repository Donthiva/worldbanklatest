import { PersonalData } from "../app-add/personalData";
import { Monitor } from "./employeeMonitorModel";

export class phaseOutMonitor{
    public id: number;
    public fileNumber: string;
    public decisionMade: string;
    public situation: string;
    public monthAndYear: string;
    public planedBusiness: string;
    public reasonForPhaseOut: string;

    public entileMentFundReceive: string;
    public useOfEntileFund: string;
    public socialWellBeing: string;
    public isInterestOfFixedDeposit: boolean;
    public isLivesWithcloseFamily: boolean;

    public isIncomeGeneratingSources: boolean;
    public personID: number;
    public monitorPeriod: string;

    public summary:string;

    public monitorPeriodId:number;

    public economyWellBeign:string;

    public monitordate:Date

    public contactable:boolean;

    public isourintervention:boolean;

    public ourinterventionnote:string;

    public satisfactionlevel:string;

    public requirementnote:string;
    
    public betterphysicallivingcondition:boolean;

    public bettercaringandprotection:boolean;

    public healthy:boolean;


    public otherincomegeneratingnote:string;

    public dependonclosefamily:boolean

    public isaprequirement:boolean
    
    
    

    public monitorId: number;

    public person: PersonalData;

    public phaseOutMonitorImages : Array<PhaseOutMonitorImages> = new Array<PhaseOutMonitorImages>();

    public phaseOutMonitorDocuments : Array<PhaseOutMonitorImages> = new Array<PhaseOutMonitorImages>();

    public phaseOutMonitorVideos : Array<PhaseOutMonitorImages> = new Array<PhaseOutMonitorImages>();

    public monitor: Monitor = new Monitor();
}


export class PhaseOutMonitorImages{

    public id: number;

    public path: string;

    public fileName: string;

    public fileType: string;

}