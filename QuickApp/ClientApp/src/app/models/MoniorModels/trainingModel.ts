


export class TrainingModel{

    public training_ID:number;

    public training_Person_ID:number;
    
    public training_Need:boolean;

    public training_Type:number;

    public dS_office:string;

    public trainingDate:string;

    public trainigPeriod:string;

    public trainigOrganization:string;

    public isEmployed:boolean;

    public salaryStatus:string;

    public status:string;

    public description:string;

    public isEmployedSectorRelated:boolean;

    public socialRecognition:boolean;

    public isFamilyMemberInvolved:boolean;

    public isFamilyMemberCompletedTraining:boolean;

    public trainingDoneBy:string;

    public note:string;


}







export class TrainingModelMultiple {

    public training_ID:number;

    public training_Person_ID:number;
    
    public training_Need:boolean;

    public training_Type:number;

    public dS_office:string;

    public trainingDate:string;

    public trainigPeriod:string;

    public trainigOrganization:string;

    public isEmployed:boolean;

    public salaryStatus:string;

    public status:string;

    public description:string;

    public isEmployedSectorRelated:boolean;

    public socialRecognition:boolean;

    public isFamilyMemberInvolved:boolean;

    public isFamilyMemberCompletedTraining:boolean;

    public trainingDoneBy:string;

    public note:string;

    public personList:Array<number> = new Array<number>();

}
