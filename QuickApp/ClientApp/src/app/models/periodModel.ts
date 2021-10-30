export class MonitorPeriods {

    constructor(id?: number, peroildName?: string, startDate?: Date, endDate?: Date) {


        this.id = id;
        this.peroildName = peroildName;
        this.startDate = startDate;
        this.endDate = endDate;
    }


    public id: number;
    public peroildName: string;
    public startDate: Date;
    public endDate: Date;


}