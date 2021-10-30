export class states {

    constructor(Country_Name?:string,States_Country_ID?:number,districtId?:number,States_ID?: number, States_Name?: string) {

      
        this.States_ID = States_ID;
        this.States_Name = States_Name;
        this.Country_Name=Country_Name;
        this.States_Country_ID=States_Country_ID;
        this.districtId=districtId;
    }

    
    public States_ID: number;
    public States_Name: string;
    public Country_Name: string;
    public States_Country_ID: number;
    public districtId:number=0;
    

}