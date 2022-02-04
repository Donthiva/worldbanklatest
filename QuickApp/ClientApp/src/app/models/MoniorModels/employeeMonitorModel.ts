import { StringValueToken } from "html2canvas/dist/types/css/syntax/tokenizer";
import { address } from "./businessMonitorModel";

export class EmployeeMonitor {

    public employment_ID: number;

    public person_ID: number;

    public employment_Duration: number;

    public employment_Status: number;

    public employment_Started_date: Date;

    public employment_Salary: number;

    public employment_Type: number;

    public employment_Employer: string;

    public employment_Employer_Type: number;

    public employment_How_he_found_the_job: string;

    public employment_If_not_angeged_in_a_job_reason: string;

    public employment_Remarks: string;

    public job_Role: string;

    public isSameEmployer: boolean;

    public monitorPeriodId:number;

    public salaryStatus: string;

    public current_Employer: string;

    public jobengagementID: number;

    public jobengagementName: string;

    public monitorID: number;

    public isSimilarCapacity: boolean;

    public contactable:boolean

    public isEmployee:boolean;

    public currentEmployer:string;

    public jobStartedDate:string;

    public monthlyIncome:number;

    public dailyIncome:number;

    public isSameEmployerCTG:boolean;

    public isSameSameEmployerCPM:boolean;

    public howJobFound:string;

    public anyRequestNeed:string;

    public situation:string;

    public note:string;

    public currentJob:string;

   public  MonitorDate:string;

    public isSimilarCapasityComparedToGSBS:boolean;

    public isSimilarCapasityComparedToPreviousMonitor:boolean;

    public incomStatusComparedtoGSBS:string;

    public incomeStatusComparedtoPM:string;

    public monitor: Monitor = new Monitor();

    // public address : address = new address();

    public employeeMonitorImages : Array<EmployeeMonitorImages> = new Array<EmployeeMonitorImages>();

    public employeeMonitorDocuments : Array<EmployeeMonitorImages> = new Array<EmployeeMonitorImages>();

    public employeeMonitorVideos : Array<EmployeeMonitorImages> = new Array<EmployeeMonitorImages>();

}


export class EmployeeMonitorImages{

    public id: number;

    public path: string;

    public fileName: string;

    public fileType: string;

}


export class Monitor {

    public monitor_ID: number;

    public monitor_Person_ID: number;

    public monitor_Date: string;

    public monitor_Duration: number

    public monitor_Update: string

    public monitor_Monthly_income: number

    public monitor_LRP_Responds_action: number

    public monitor_Remarks: string

    public monitorDuration: Monitor_Duration = new Monitor_Duration();


}

export class Monitor_Duration {

    public monitor_Duratione_ID: number;

    public monitor_Duration_Start_date: string;

    public monitor_Duration_End_date: string;

    public monitor_Duration_Description: string;
}





