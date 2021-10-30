import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { bankaccounttypes } from 'src/app/models/bank_account_types';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { BankEndpoint } from 'src/app/services/masterdataservice/bankService';

@Component({
  selector: 'app-bank-account-type',
  templateUrl: './bank-account-type.component.html',
  styleUrls: ['./bank-account-type.component.scss']
})
export class BankAccountTypeComponent implements OnInit {

  bankaccounttypesModel:bankaccounttypes;
  deleteModel:bankaccounttypes;
  columns: any[] = [];
  rows: any[] = [];
  update :boolean =false;
  loadingIndicator: boolean;

  @ViewChild('indexTemplatebankaccounttypes', { static: true })
  indexTemplatebankaccounttypes: TemplateRef<any>;

  @ViewChild('actionsTemplatebankaccounttypes', { static: true })
  actionsTemplatebankaccounttypes: TemplateRef<any>;

  constructor(private bankEndpoint:BankEndpoint,private translationService: AppTranslationService,private alertService: AlertService) {
    this.bankaccounttypesModel = new bankaccounttypes(); }
  
  ngOnInit(): void {

    const gT = (key: string) => this.translationService.getTranslation(key);

    this.columns = [
      { prop: 'Bank_Account_Type_ID', name: '#', width: 50, cellTemplate: this.indexTemplatebankaccounttypes, canAutoResize: false },
      { prop: 'Type', name: gT('APs.BankAccountTypes.list.BankAccountType_Name'), width: 320 },
      { prop: 'Bank_Account_Type_Description', name: gT('APs.BankAccountTypes.list.BankAccountType_Description'), width: 320 },    
      { name: '', width: 250, cellTemplate: this.actionsTemplatebankaccounttypes, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];


    this.getAllBankAccountTypes();
  }

  addNewBankAccountType(){
    if(this.bankaccounttypesModel.Type!=null&&this.bankaccounttypesModel.Bank_Account_Type_Description!=null){
    this.bankEndpoint.AddnewBankAccountType(this.bankaccounttypesModel).subscribe(
      reponse=>{
        this.getAllBankAccountTypes();
        this.Clear();
        this.alertService.showMessage('Successfully saved', '',MessageSeverity.success);
      }
    )
    }
    else
    this.alertService.showMessage('Please add all the fields', '',MessageSeverity.warn);

  }

  updateBankAccountType(){
    if(JSON.stringify(this.bankaccounttypesModel)!=JSON.stringify(this.originaleditbankaccounttypes)){
    if(this.bankaccounttypesModel.Type!=null&&this.bankaccounttypesModel.Bank_Account_Type_Description!=""){
    this.bankEndpoint.UpdateBankAccountType(this.bankaccounttypesModel).subscribe(
      reponse=>{
        this.getAllBankAccountTypes();
        this.Clear();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }
  else
  this.alertService.showMessage('Please add all the fields', '',MessageSeverity.warn);
  }
  else

  this.alertService.showMessage('Nothing to update', '',MessageSeverity.warn);
}


  deleteBankAccountType(){
    this.bankEndpoint.DeleteBankAccountType(this.deleteModel).subscribe(
      reponse=>{
        this.getAllBankAccountTypes();
        this.deleteModel = new bankaccounttypes();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }

  bankaccounttypestablearray:Array<bankaccounttypes>=[]
  bankaccounttypesarray:any=[]
  getAllBankAccountTypes(){
    this.bankEndpoint.GetAllBankAccountTypes<Array<bankaccounttypes>>().subscribe(
      reponse=>{
        console.log("log bankaccounttypes",reponse);
        this.bankaccounttypesarray=reponse;
        this.bankaccounttypesarray.forEach(element => {
          var data =new bankaccounttypes();
          data.Bank_Account_Type_ID=element.bank_Account_Type_ID;
          data.Type=element.type;
          data.Bank_Account_Type_Description=element.bank_Account_Type_Description;
          this.bankaccounttypestablearray.push(data);
        });
        this.rows = this.bankaccounttypestablearray;
        this.bankaccounttypestablearray=[];
        
        
      }
    )

  }
  originaleditbankaccounttypes=new bankaccounttypes();
  view(view){
    this.update  =true;
    this.bankaccounttypesModel.Type = view.Type;
    this.bankaccounttypesModel.Bank_Account_Type_ID = view.Bank_Account_Type_ID;
    this.bankaccounttypesModel.Bank_Account_Type_Description = view.Bank_Account_Type_Description;
    console.log("View",view)
    this.originaleditbankaccounttypes=JSON.parse(JSON.stringify(this.bankaccounttypesModel));

  }


  delete(view){
    this.deleteModel= new bankaccounttypes();
    this.deleteModel.Type = view.Type;
    this.deleteModel.Bank_Account_Type_ID = view.Bank_Account_Type_ID;
    this.deleteModel.Bank_Account_Type_Description = view.Bank_Account_Type_Description;
    
    this.deleteBankAccountType()
  }


  Clear(){
    console.log("clear data")
    this.bankaccounttypesModel = new bankaccounttypes();
    this.update  =false;

  }

}
