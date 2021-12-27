import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { PersonalData } from "src/app/models/app-add/personalData";
import { AuthService } from "../auth.service";
import { ConfigurationService } from "../configuration.service";
import { EndpointBase } from "../endpoint-base.service";


@Injectable()
export class GraphEndpoint extends EndpointBase {



  get getDeliverableOutput1() { return this.configurations.baseUrl + '/api/Graph/GetDeliverable1Report'; }

  get getDeliverableOutput2() { return this.configurations.baseUrl + '/api/Graph/GetDeliverable2Report'; }

  get getDeliverableOutput3() { return this.configurations.baseUrl + '/api/Graph/GetDeliverable3Report'; }

  get getDeliverableOutput4() { return this.configurations.baseUrl + '/api/Graph/GetDeliverable4Report'; }

  get getDeliverableOutput5() { return this.configurations.baseUrl + '/api/Graph/GetDeliverable5Report'; }

  get getDeliverableOutput6() { return this.configurations.baseUrl + '/api/Graph/GetDeliverable6Report'; }

  get getDeliverableOutput8() { return this.configurations.baseUrl + '/api/Graph/GetDeliverable8Report'; }

  //cross tabulations
  
  get getAPCategoryWisePercentage() { return this.configurations.baseUrl + '/api/Graph/GetAPCategoryWisePercentage'; }

  get getGenderWiseDataPercentage() { return this.configurations.baseUrl + '/api/Graph/GetGenderWiseDataPercentage'; }

  get getAgeWiseAPsCategories() { return this.configurations.baseUrl + '/api/Graph/GetAgeWiseAPsCategories'; }

  get getVulnerabilitiesAPPercentage() {return this.configurations.baseUrl + '/api/Graph/GetVulnerabilitiesAPPercentage';}




  
  

  constructor(private configurations: ConfigurationService, http: HttpClient, authService: AuthService) {
    super(http, authService);
  }

 
  GetDeliverableOutput1<T>(): Observable<T> {
    
    const endpointUrl = `${this.getDeliverableOutput1}`;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetDeliverableOutput1());
      }));
  }

  GetDeliverableOutput2<T>(): Observable<T> {
    
    const endpointUrl = `${this.getDeliverableOutput2}`;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetDeliverableOutput1());
      }));
  }

  GetDeliverableOutput3<T>(): Observable<T> {
    
    const endpointUrl = `${this.getDeliverableOutput3}`;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetDeliverableOutput3());
      }));
  }

  GetDeliverableOutput4<T>(): Observable<T> {
    
    const endpointUrl = `${this.getDeliverableOutput4}`;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetDeliverableOutput4());
      }));
  }

  GetDeliverableOutput5<T>(): Observable<T> {
    
    const endpointUrl = `${this.getDeliverableOutput5}`;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetDeliverableOutput5());
      }));
  }

  GetDeliverableOutput6<T>(): Observable<T> {
    
    const endpointUrl = `${this.getDeliverableOutput6}`;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetDeliverableOutput6());
      }));
  }

  GetDeliverableOutput8<T>(): Observable<T> {
    
    const endpointUrl = `${this.getDeliverableOutput8}`;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetDeliverableOutput8());
      }));
  }

  GetAPCategoryWisePercentage<T>(): Observable<T> {
    
    const endpointUrl = `${this.getAPCategoryWisePercentage}`;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAPCategoryWisePercentage());
      }));
  }


  GetGenderWiseDataPercentage<T>(): Observable<T> {
    
    const endpointUrl = `${this.getGenderWiseDataPercentage}`;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetGenderWiseDataPercentage());
      }));
  }


  GetAgeWiseAPsCategories<T>(): Observable<T> {
    
    const endpointUrl = `${this.getAgeWiseAPsCategories}`;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAgeWiseAPsCategories());
      }));
  }


  GetVulnerabilitiesAPPercentage<T>(): Observable<T> {
    
    const endpointUrl = `${this.getVulnerabilitiesAPPercentage}`;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAgeWiseAPsCategories());
      }));
  }
}