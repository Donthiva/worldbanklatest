export class vulnerabilitylevels {

    constructor(Vulnerability_Level_ID?: number, Vulnerability_Level_Description?: string,Vulnerability_Level_Name?: string) {

      
        this.Vulnerability_Level_ID = Vulnerability_Level_ID;
        this.Vulnerability_Level_Description = Vulnerability_Level_Description;
        this.Vulnerability_Level_Name = Vulnerability_Level_Name;
    }

    
    public Vulnerability_Level_ID: number;
    public Vulnerability_Level_Description: string;
    public Vulnerability_Level_Name: string;
    

}