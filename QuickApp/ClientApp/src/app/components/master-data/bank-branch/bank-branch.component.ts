import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { element } from 'protractor';
import { bankbranch } from 'src/app/models/bank_branch';
import { AlertService, MessageSeverity } from 'src/app/services/alert.service';
import { AppTranslationService } from 'src/app/services/app-translation.service';
import { BankEndpoint } from 'src/app/services/masterdataservice/bankService';

@Component({
  selector: 'app-bank-branch',
  templateUrl: './bank-branch.component.html',
  styleUrls: ['./bank-branch.component.scss']
})
export class BankBranchComponent implements OnInit {

  bankbranchModel:bankbranch;
  deleteModel:bankbranch;
  columns: any[] = [];
  rows: any[] = [];
  update :boolean =false;
  loadingIndicator: boolean;

  @ViewChild('indexTemplatebankbranch', { static: true })
  indexTemplatebankbranch: TemplateRef<any>;

  @ViewChild('actionsTemplatebankbranch', { static: true })
  actionsTemplatebankbranch: TemplateRef<any>;

  constructor(private bankEndpoint:BankEndpoint,private translationService: AppTranslationService,private alertService: AlertService) {
    this.bankbranchModel = new bankbranch(); }

  ngOnInit(): void {

    const gT = (key: string) => this.translationService.getTranslation(key);
  
      this.columns = [
        { prop: 'Bank_Branch_ID', name: '#', width: 50, cellTemplate: this.indexTemplatebankbranch, canAutoResize: false },
        { prop: 'Bank_Branch_Description', name: gT('APs.BankBranch.list.Bank_Branch'), width: 320 },
        { prop: 'Bank_Name', name: gT('APs.BankBranch.list.Bank_Name'), width: 320 },    
        { name: '', width: 250, cellTemplate: this.actionsTemplatebankbranch, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
      ];
  
  
      
      this.getAllBanks();
  }

  banks:any=[] 
    getAllBanks(){

      this.bankEndpoint.GetAllBanks().subscribe(

        response =>{
          console.log("bank response", response)
          this.banks=response
          //this.getAllBankbranches();
        }
        
      )
    
    }
    
    addNewBankBranch(){
      if(this.bankbranchModel.BankID!=null&&this.bankbranchModel.Bank_Branch_Adress!=null&&this.bankbranchModel.Bank_Branch_Description!=null){
      this.bankEndpoint.AddnewBankBranch(this.bankbranchModel).subscribe(
        reponse=>{
          console.log("adding branch",this.bankbranchModel)
          this.getAllBankbranches(this.bankbranchModel.BankID);
          this.Clear();
          this.alertService.showMessage('Successfully saved', '',MessageSeverity.success);
        }
      )
      }
      else
      this.alertService.showMessage('Please add all the fields', '',MessageSeverity.warn);
  
    }
  
    updateBankBranch(){
      if(JSON.stringify(this.bankbranchModel)!=JSON.stringify(this.originaleditbankbranch)){
      if(this.bankbranchModel.BankID!=null&&this.bankbranchModel.Bank_Branch_Adress!=null&&this.bankbranchModel.Bank_Branch_Description!=""){
        console.log("to update",this.bankbranchModel)
      this.bankEndpoint.UpdateBankBranch(this.bankbranchModel).subscribe(
        reponse=>{
          this.getAllBankbranches(this.bankbranchModel.BankID);
          this.Clear();
          this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
        }
      )
      }
      else
      this.alertService.showMessage('Please add all the fields', '',MessageSeverity.warn);
    }
    else
    this.alertService.showMessage('Nothing to Update', '',MessageSeverity.warn);
  }
  
  
    deleteBankBranch(){
      this.bankEndpoint.DeleteBankBranch(this.deleteModel).subscribe(
        reponse=>{
          this.getAllBankbranches(this.deleteModel.BankID);
          this.deleteModel = new bankbranch();
          this.alertService.showMessage('Successfully updated','',MessageSeverity.success);
        }
      )
    }
     bankbranchtablearray:Array<bankbranch>=[]
     bankbrancharray:any=[]
    getAllBankbranches(bankId: number){

      this.bankEndpoint.GetAllBankBranch<Array<bankbranch>>(bankId).subscribe(
        reponse=>{
          console.log("log data",reponse);
          this.bankbrancharray=reponse;
          this.bankbrancharray.forEach(element => {
            var data =new bankbranch();
            data.Bank_Name=this.banks.find(x=>x.bank_ID==element.bankID).bank_Name;
            data.BankID=element.bankID;
            data.Bank_Branch_ID=element.bank_Branch_ID;
            data.Bank_Branch_Adress=element.bank_Branch_Adress;
            data.Bank_Branch_Description=element.bank_Branch_Description;
            this.bankbranchtablearray.push(data);
          });
          this.rows = this.bankbranchtablearray;
          console.log("test array",this.bankbranchtablearray);
          this.bankbranchtablearray=[];
          
        }
      )
  
    }

    selectedbank(data) {
      console.log("selected data",data);
      if (data != undefined) {
        this.bankbranchModel.BankID = data.bank_ID;
  
        this.getAllBankbranches(data.bank_ID);
  
      }
  
  
    }
    originaleditbankbranch=new bankbranch();
    view(view){
      this.update  =true;
      this.bankbranchModel.Bank_Branch_Description = view.Bank_Branch_Description;
      this.bankbranchModel.Bank_Branch_ID = view.Bank_Branch_ID;
      this.bankbranchModel.Bank_Name = view.Bank_Name;
      this.bankbranchModel.BankID=view.BankID;
      this.bankbranchModel.Bank_Branch_Adress=view.Bank_Branch_Adress;
      console.log("View",view)
      this.originaleditbankbranch=JSON.parse(JSON.stringify(this.bankbranchModel));
    }
  
  
    delete(view){
      this.deleteModel= new bankbranch();
      this.deleteModel.Bank_Branch_Description = view.branch_Description;
      this.deleteModel.Bank_Branch_ID = view.bank_Branch_ID;
      
      this.deleteBankBranch()
    }
  
  
    Clear(){
      console.log("clear data")
      this.bankbranchModel = new bankbranch();
      this.update  =false;
  
    }

}
