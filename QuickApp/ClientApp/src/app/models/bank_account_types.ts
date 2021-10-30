export class bankaccounttypes {

    constructor(Type?:string,Bank_Account_Type_Description?:string,Bank_Account_Type_ID?: number) {

      
        this.Bank_Account_Type_ID = Bank_Account_Type_ID;
        this.Type=Type;
        this.Bank_Account_Type_Description=Bank_Account_Type_Description;
        
    }

    
        public Bank_Account_Type_ID: number;
        public Type: string;
        public Bank_Account_Type_Description: string;
    
    

}