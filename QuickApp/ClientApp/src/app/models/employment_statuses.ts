export class employmentstatuses {

    constructor(Employment_Status_ID?: number, Status?: string,Status_Description?: string) {

      
        this.Employment_Status_ID = Employment_Status_ID;
        this.Status = Status;
        this.Status_Description = Status_Description;
    }

    
    public Employment_Status_ID: number;
    public Status: string;
    public Status_Description: string;
    

}