import { Monitor } from "./employeeMonitorModel";

export class ThreeWheeler{

    public id: number;
    public initalParkAtGSBS: string;
    public monthlyIcomeAtGSBS: number;
    public engauagmentAtGSBS: string;
    public currentPark: string;
    public status: string;
    public monthlyIncome: number;
    public personID: number;
    public incomeStatus: string;
    public situation: string;

    public workingdays:string;
    public threewheelpark:string;

    public haveotherincomegeneratingsources:boolean;


    public contactable:boolean;

    public dailyIncome:number;

    public specialObservation:string;

    

    public summary:string;

    public monitorPeriodId:number;
    public monitorId: number;
    public monitor: Monitor = new Monitor();
    public threeWheelMonitorImages  : Array<ThreeWheelMonitorImages> = new Array<ThreeWheelMonitorImages>();
    public threeWheelMonitorDocuments  : Array<ThreeWheelMonitorImages> = new Array<ThreeWheelMonitorImages>();
    public threeWheelMonitorVideos : Array<ThreeWheelMonitorImages> = new Array<ThreeWheelMonitorImages>();
}



export class ThreeWheelMonitorImages{

    public id: number;

    public path: string;

    public fileName: string;

    public fileType: string;

}

