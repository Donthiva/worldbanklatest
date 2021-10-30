// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

export class banktypes {

    constructor(Id?: number,BankTypeName?: string, Bank_Type_Description?: string) {

        this.Id = Id;
        this.BankTypeName = BankTypeName;
        this.Bank_Type_Description = Bank_Type_Description;
    }

    public Id: number;
    public BankTypeName: string;
    public Bank_Type_Description: string;

}
