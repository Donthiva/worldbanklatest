export class districts {

    constructor(District_ID?: number, District_Name?: string,District_Country_ID?:number,District_States_ID?:number,State_Name?: string,Country_Name?: string) {

      
        this.District_ID = District_ID;
        this.District_Name = District_Name;
        this.District_Country_ID=District_Country_ID;
        this.District_States_ID=District_States_ID;
        this.State_Name=State_Name;
        this.Country_Name=Country_Name;
    }

    
    public District_ID: number;
    public District_Name: string;
    public State_Name: string;
    public Country_Name: string;
    public District_Country_ID: number;
    public District_States_ID:number;
    

}