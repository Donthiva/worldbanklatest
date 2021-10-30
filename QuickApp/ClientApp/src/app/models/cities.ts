export class cities {

    constructor(City_ID?: number, City_Name?: string,City_Country_ID?: number,City_States_ID ?: number,City_District_ID?: number,
        City_Country_Name?: string,City_States_Name?: string,City_District_Name?: string) {

      
        this.City_ID = City_ID;
        this.City_Name = City_Name;
        this.City_Country_ID = City_Country_ID;
        this.City_States_ID = City_States_ID;
        this.City_District_ID =City_District_ID;
        this.City_Country_Name = City_Country_Name;
        this.City_States_Name = City_States_Name;
        this.City_District_Name =City_District_Name;
    }

    
    public City_ID: number;
    public City_Name: string;
    public City_Country_ID: number;
    public City_States_ID : number;
    public City_District_ID: number;
    public City_Country_Name: string;
    public City_States_Name: string;
    public City_District_Name: string;
    

}