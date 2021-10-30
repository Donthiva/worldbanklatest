export class persontypes {

    constructor(Person_Type_ID?: number, Type?: string,Person_Type_Description?: string) {

      
        this.Person_Type_ID = Person_Type_ID;
        this.Type = Type;
        this.Person_Type_Description=Person_Type_Description;
    }

    
    public Person_Type_ID: number;
    public Type: string;
    public Person_Type_Description: string;
    

}