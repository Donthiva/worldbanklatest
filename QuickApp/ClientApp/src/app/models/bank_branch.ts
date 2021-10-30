export class bankbranch {

    constructor(Bank_Branch_ID?: number, Bank_Branch_Adress?: number, Bank_Branch_Description?: string,Bank_Name?: string,BankID?: number) {

        this.Bank_Branch_ID = Bank_Branch_ID;
        this.Bank_Branch_Adress = Bank_Branch_Adress;
        this.Bank_Branch_Description = Bank_Branch_Description;
        this.Bank_Name=Bank_Name;
        this.BankID=BankID
    }

    public Bank_Branch_ID: number;
    public BankID: number;
    public Bank_Branch_Adress: number;
    public Bank_Branch_Description: string;
    public Bank_Name: string;
   

}