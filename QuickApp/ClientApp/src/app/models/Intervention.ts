export class Intervention {
    public  id:number

    public  date:string;

    public  typeOfEventId:number

    public  nameOfEvent:string

    public  briefDescription: string

    public  mainStakeholdersParticipated:string

    public  apCategoryId:number

    public  numberOfParticipants:number

    public selectedPersons:Array<any> = new Array<any>();

    public  participants: Array<EventwiseParticipants> = new Array<EventwiseParticipants>();
}


export class EventwiseParticipants{

    public  id:number

    public  eventId:number

    public  participantId:number



}

export class SelectedPersonsData{
    public person_ID:number;
}
