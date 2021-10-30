export class BusinessPlan {

    constructor(buiness_Plan_ID?: number, buiness_Plan_Description?: string) {


        this.buiness_Plan_ID = buiness_Plan_ID;
        this.buiness_Plan_Description = buiness_Plan_Description;

    }


    public buiness_Plan_ID: number;
    public buiness_Plan_Description: string;
 


}


export class BusinessType {

    constructor(id?: number, businessTypeName?: string) {


        this.id = id;
        this.businessTypeName = businessTypeName;

    }


    public id: number;
    public businessTypeName: string;
 


}