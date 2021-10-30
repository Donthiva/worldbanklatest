export class bank {

    constructor(Bank_Type_Name?:string,Bank_Type?:number,Bank_ID?: number, Bank_Name?: string) {

      
        this.Bank_ID = Bank_ID;
        this.Bank_Name = Bank_Name;
        this.Bank_Type_Name=Bank_Type_Name;
        this.Bank_Type=Bank_Type;
        
    }

    
    public Bank_ID: number;
    public Bank_Name: string;
    public Bank_Type_Name: string;
    public Bank_Type: number;
    
    

}