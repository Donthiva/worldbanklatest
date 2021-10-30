import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { banktypes } from 'src/app/models/bank_types';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { BankEndpoint } from 'src/app/services/masterdataservice/bankService';

@Component({
  selector: 'app-bank-type',
  templateUrl: './bank-type.component.html',
  styleUrls: ['./bank-type.component.scss']
})
export class BankTypeComponent implements OnInit {


  banktypeModel:banktypes;
  deleteModel:banktypes;
  columns: any[] = [];
  rows: any[] = [];
  update :boolean =false;
  loadingIndicator: boolean;

  
  @ViewChild('indexTemplatebankType', { static: true })
  indexTemplatebankType: TemplateRef<any>;

  @ViewChild('actionsTemplatebankType', { static: true })
  actionsTemplatebankType: TemplateRef<any>;

  constructor(private bankEndpoint:BankEndpoint,private translationService: AppTranslationService,private alertService: AlertService) {
    this.banktypeModel = new banktypes();
   }

  ngOnInit(): void {

    const gT = (key: string) => this.translationService.getTranslation(key);

    this.columns = [
      { prop: 'id', name: '#', width: 50, cellTemplate: this.indexTemplatebankType, canAutoResize: false },
      { prop: 'bankTypeName', name: gT('APs.BankTypes.list.Name'), width: 320 },
      { prop: 'bank_Type_Description', name: gT('APs.BankTypes.list.Description'), width: 320 },
      { name: '', width: 250, cellTemplate: this.actionsTemplatebankType, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
    ];


    this.getAllBankTypes();
  }



  addNewbankType(){
    if(this.banktypeModel.BankTypeName!=null&&this.banktypeModel.Bank_Type_Description!=null){
    this.bankEndpoint.AddnewBankType(this.banktypeModel).subscribe(
      reponse=>{
        this.getAllBankTypes();
        this.Clear();
        this.alertService.showMessage('Successfully saved', '',MessageSeverity.success);
      }
    )
    }
    else
    this.alertService.showMessage('Please Fill all the Fields', '',MessageSeverity.warn);

  }

  updateBankType(){
    if(JSON.stringify(this.banktypeModel)!=JSON.stringify(this.originaleditbanktypes)){
    if(this.banktypeModel.BankTypeName!=""&&this.banktypeModel.Bank_Type_Description!=""){
    this.bankEndpoint.UpdateBankType(this.banktypeModel).subscribe(
      reponse=>{
        this.getAllBankTypes();
        this.Clear();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }
  else
  this.alertService.showMessage('Please Fill all the Fields', '',MessageSeverity.warn);
  }
  else
  this.alertService.showMessage('Nothing to update', '',MessageSeverity.warn);
}


  deleteBankTypes(){
    this.bankEndpoint.DeleteBankType(this.deleteModel).subscribe(
      reponse=>{
        this.getAllBankTypes();
        this.deleteModel = new banktypes();
        this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
      }
    )
  }

  getAllBankTypes(){
    this.bankEndpoint.GetAllBankTypes<Array<banktypes>>().subscribe(
      reponse=>{
        console.log("log data",reponse);

        this.rows = reponse;
        
      }
    )

  }
  originaleditbanktypes=new banktypes();
  view(view){
    this.update  =true;
    this.banktypeModel.BankTypeName = view.bankTypeName;
    this.banktypeModel.Bank_Type_Description = view.bank_Type_Description;
    this.banktypeModel.Id = view.id;
    console.log("View",view)
    this.originaleditbanktypes=JSON.parse(JSON.stringify(this.banktypeModel));
  }


  delete(view){
    this.deleteModel= new banktypes();

    this.deleteModel.BankTypeName = view.bankTypeName;
    this.deleteModel.Bank_Type_Description = view.bank_Type_Description;
    this.deleteModel.Id = view.id;

    this.deleteBankTypes()
  }


  Clear(){
    console.log("clear data")
    this.banktypeModel = new banktypes();
    this.update  =false;

  }

}
