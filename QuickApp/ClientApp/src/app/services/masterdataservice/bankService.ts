import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../auth.service";
import { ConfigurationService } from "../configuration.service";
import { EndpointBase } from "../endpoint-base.service";


@Injectable()
export class BankEndpoint extends EndpointBase {

  get addBanktypesUrl() { return this.configurations.baseUrl + '/api/Bank/PostBankTypes'; }

  get getallBanktypesUrl() { return this.configurations.baseUrl + '/api/Bank/GetAllBankTypes'; }

  get updateBanktypesUrl() { return this.configurations.baseUrl + '/api/Bank/UpdateBankTypes'; }

  get DeleteBanktypesUrl() { return this.configurations.baseUrl + '/api/Bank/DeleteBankType'; }

  get getAllBankNameUrl() { return this.configurations.baseUrl + '/api/Bank/GetAllBankName'; }

  get getAllBankNameAllUrl() { return this.configurations.baseUrl + '/api/Bank/GetAllBankNameAll'; }
  

  get getAllBankBranchUrl() { return this.configurations.baseUrl + '/api/Bank/GetAllBankBranch'; }


  //bank
  get addBankUrl() { return this.configurations.baseUrl + '/api/Bank/PostBank'; }

  get getallBanksUrl() { return this.configurations.baseUrl + '/api/Bank/GetAllBanks'; }

  get updateBankUrl() { return this.configurations.baseUrl + '/api/Bank/UpdateBank'; }

  get deleteBankUrl() { return this.configurations.baseUrl + '/api/Bank/DeleteBank'; }

  //bank account type

  get addBankAccountTypeUrl() { return this.configurations.baseUrl + '/api/Bank/PostBankAccountType'; }

  get getallBankAccountTypesUrl() { return this.configurations.baseUrl + '/api/Bank/GetAllBankAccountTypes'; }

  get updateBankAccountTypeUrl() { return this.configurations.baseUrl + '/api/Bank/UpdateBankAccountType'; }

  get deleteBankAccountTypeUrl() { return this.configurations.baseUrl + '/api/Bank/DeleteBankAccountType'; }


  //bank branch

  get addBankBranchUrl() { return this.configurations.baseUrl + '/api/Bank/PostBankBranch'; }

  // get getallBankBranchesUrl() { return this.configurations.baseUrl + '/api/Bank/GetAllBankBranches'; }

  get updateBankBranchUrl() { return this.configurations.baseUrl + '/api/Bank/UpdateBankBranch'; }

  get deleteBankBranchUrl() { return this.configurations.baseUrl + '/api/Bank/DeleteBankBranch'; }


  constructor(private configurations: ConfigurationService, http: HttpClient, authService: AuthService) {
    super(http, authService);
  }


  AddnewBankType<T>(banktypeObject: any): Observable<T> {

    return this.http.post<T>(this.addBanktypesUrl, JSON.stringify(banktypeObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.AddnewBankType(banktypeObject));
      }));
  }

  UpdateBankType<T>(banktypeObject: any): Observable<T> {

    return this.http.post<T>(this.updateBanktypesUrl, JSON.stringify(banktypeObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateBankType(banktypeObject));
      }));
  }

  DeleteBankType<T>(banktypeObject: any): Observable<T> {

    return this.http.post<T>(this.DeleteBanktypesUrl, JSON.stringify(banktypeObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateBankType(banktypeObject));
      }));
  }



  GetAllBankTypes<T>(): Observable<T> {


    return this.http.get<T>(this.getallBanktypesUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllBankTypes());
      }));
  }


  GetAllBankNames<T>(Id: number): Observable<T> {

    const endpointUrl = `${this.getAllBankNameUrl}/${Id}`;
    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllBankNames(Id));
      }));
  }


  GetAllBankNamesAll<T>(): Observable<T> {

    const endpointUrl = `${this.getAllBankNameAllUrl}`;
    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllBankNamesAll());
      }));
  }



  GetAllBankBranch<T>(Id): Observable<T> {

    const endpointUrl = `${this.getAllBankBranchUrl}/${Id}`;
    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllBankBranch(Id));
      }));
  }




  //bank

  AddnewBank<T>(bankObject: any): Observable<T> {

    return this.http.post<T>(this.addBankUrl, JSON.stringify(bankObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.AddnewBank(bankObject));
      }));
  }

  UpdateBank<T>(bankObject: any): Observable<T> {

    return this.http.post<T>(this.updateBankUrl, JSON.stringify(bankObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateBank(bankObject));
      }));
  }

  DeleteBank<T>(bankObject: any): Observable<T> {

    return this.http.post<T>(this.deleteBankUrl, JSON.stringify(bankObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateBank(bankObject));
      }));
  }

  GetAllBanks<T>(): Observable<T> {


    return this.http.get<T>(this.getallBanksUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllBanks());
      }));
  }

  //bank account type

  AddnewBankAccountType<T>(bankAccountTypeObject: any): Observable<T> {

    return this.http.post<T>(this.addBankAccountTypeUrl, JSON.stringify(bankAccountTypeObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.AddnewBankAccountType(bankAccountTypeObject));
      }));
  }

  UpdateBankAccountType<T>(bankAccountTypeObject: any): Observable<T> {

    return this.http.post<T>(this.updateBankAccountTypeUrl, JSON.stringify(bankAccountTypeObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateBankAccountType(bankAccountTypeObject));
      }));
  }

  DeleteBankAccountType<T>(bankAccountTypeObject: any): Observable<T> {

    return this.http.post<T>(this.deleteBankAccountTypeUrl, JSON.stringify(bankAccountTypeObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateBankAccountType(bankAccountTypeObject));
      }));
  }

  GetAllBankAccountTypes<T>(): Observable<T> {


    return this.http.get<T>(this.getallBankAccountTypesUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllBankAccountTypes());
      }));
  }

  //bank branch

  AddnewBankBranch<T>(bankBranchObject: any): Observable<T> {

    return this.http.post<T>(this.addBankBranchUrl, JSON.stringify(bankBranchObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.AddnewBankBranch(bankBranchObject));
      }));
  }

  UpdateBankBranch<T>(bankBranchObject: any): Observable<T> {

    return this.http.post<T>(this.updateBankBranchUrl, JSON.stringify(bankBranchObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateBankBranch(bankBranchObject));
      }));
  }

  DeleteBankBranch<T>(bankBranchObject: any): Observable<T> {

    return this.http.post<T>(this.deleteBankBranchUrl, JSON.stringify(bankBranchObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateBankBranch(bankBranchObject));
      }));
  }



}