import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { bank } from 'src/app/models/bank';
import { banktypes } from 'src/app/models/bank_types';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { BankEndpoint } from 'src/app/services/masterdataservice/bankService';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {

  bankModel:bank;
  deleteModel:bank;
  columns: any[] = [];
  rows: any[] = [];
  update :boolean =false;
  loadingIndicator: boolean;

  @ViewChild('indexTemplatebank', { static: true })
  indexTemplatebank: TemplateRef<any>;

  @ViewChild('actionsTemplatebank', { static: true })
  actionsTemplatebank: TemplateRef<any>;

  constructor(private bankEndpoint:BankEndpoint,private translationService: AppTranslationService,private alertService: AlertService) {
    this.bankModel = new bank();
  }

  ngOnInit(): void {

    const gT = (key: string) => this.translationService.getTranslation(key);
  
      this.columns = [
        { prop: 'Bank_ID', name: '#', width: 50, cellTemplate: this.indexTemplatebank, canAutoResize: false },
        { prop: 'Bank_Name', name: gT('APs.Bank.list.Bank_Name'), width: 320 },  
        { prop: 'Bank_Type_Name', name: gT('APs.Bank.list.Bank_Type_Name'), width: 320 }, 
        { name: '', width: 250, cellTemplate: this.actionsTemplatebank, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
      ];
  
      this.getAllBankTypes();
  }

  banktypes:any=[] 
    getAllBankTypes(){

      this.bankEndpoint.GetAllBankTypes<Array<banktypes>>().subscribe(

        response =>{
          console.log("banktype response", response)
          this.banktypes=response
          this.getAllBanks();
        }
        
      )
    
    }

    addNewBank(){
      console.log("sumbit bank",this.bankModel);
      
      if(this.bankModel.Bank_Type!=null&&this.bankModel.Bank_Name!=null){
      this.bankEndpoint.AddnewBank(this.bankModel).subscribe(
        reponse=>{
          this.getAllBanks();
          this.Clear();
          this.alertService.showMessage('Successfully saved', '',MessageSeverity.success);
        }
      )
      }
      else
      this.alertService.showMessage('Please add all fields', '',MessageSeverity.warn);
  
    }
  
    updateBank(){
      if(JSON.stringify(this.bankModel)!=JSON.stringify(this.originaleditbank)){
      if(this.bankModel.Bank_Type!=null&&this.bankModel.Bank_Name!=""){
      this.bankEndpoint.UpdateBank(this.bankModel).subscribe(
        reponse=>{
          this.getAllBanks();
          this.Clear();
          this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
        }
      )
    }
    else
    this.alertService.showMessage('Please add all fields', '',MessageSeverity.warn);
    }
    else
    this.alertService.showMessage('Nothing to Update', '',MessageSeverity.warn);
    }
  
    deleteBank(){
      console.log("del method",this.deleteModel);
      
      this.bankEndpoint.DeleteBank(this.deleteModel).subscribe(
        reponse=>{
          this.getAllBanks();
          this.deleteModel = new bank();
          this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
        }
      )
    }
    banktablearray:Array<bank>=[]
     bankarray:any=[]
    getAllBanks(){

      this.bankEndpoint.GetAllBanks<Array<bank>>().subscribe(
        reponse=>{
          console.log("log data",reponse);
          this.bankarray=reponse;
          this.bankarray.forEach(element => {
            var data =new bank();
            data.Bank_Type_Name=this.banktypes.find(x=>x.id==element.bank_Type).bankTypeName;
            data.Bank_Type=this.banktypes.find(x=>x.id==element.bank_Type).id;
            data.Bank_Name=element.bank_Name;
            data.Bank_ID=element.bank_ID;
            this.banktablearray.push(data);
          });
          this.rows = this.banktablearray;
          console.log("test array",this.banktablearray);
          this.banktablearray=[];
          
        }
      )
  
    }

    selectedtypes(data) {
      console.log("selected data",data);
      if (data != undefined) {
        this.bankModel.Bank_Type = data.id;
        this.getAllBankTypes();
      }
    }
    originaleditbank=new bank();
    view(view){
      this.update  =true;
      this.bankModel.Bank_Name = view.Bank_Name;
      this.bankModel.Bank_ID = view.Bank_ID;
      this.bankModel.Bank_Type = view.Bank_Type;
      console.log("View",view)
      this.originaleditbank=JSON.parse(JSON.stringify(this.bankModel));
    }
  
  
    delete(view){
      console.log("delete bank",view);
      
      this.deleteModel= new bank();
      this.deleteModel.Bank_Name = view.Bank_Name;
      this.deleteModel.Bank_ID = view.Bank_ID;
      this.deleteModel.Bank_Type =view.Bank_Type;
      this.deleteBank()
    }
  
  
    Clear(){
      console.log("clear data")
      this.bankModel = new bank();
      this.update  =false;
  
    }

}
