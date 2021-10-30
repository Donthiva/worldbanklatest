import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../auth.service";
import { ConfigurationService } from "../configuration.service";
import { EndpointBase } from "../endpoint-base.service";


@Injectable()
export class BusinessService extends EndpointBase {

    get getBusinessTypes() { return this.configurations.baseUrl + '/api/Business/GetAllBusinessTypes'; }

    get getAllBusinessPlans() { return this.configurations.baseUrl + '/api/Business/GetAllBusinessPlans'; }

    

    get getAllBusinessManagementModes() { return this.configurations.baseUrl + '/api/Business/GetAllBusinessManagementModes'; }

    
  constructor(private configurations: ConfigurationService, http: HttpClient, authService: AuthService) {
    super(http, authService);
  }

      GetAllBusinessTypes<T>(): Observable<T> {
  
        return this.http.get<T>(this.getBusinessTypes, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllBusinessTypes());
      }));
  }


  GetAllBusinessPlans<T>(): Observable<T> {
  
    return this.http.get<T>(this.getAllBusinessPlans, this.requestHeaders).pipe<T>(
  catchError(error => {
    return this.handleError(error, () => this.GetAllBusinessTypes());
  }));
}


GetAllBusinessManagementModes<T>(): Observable<T> {
  
  return this.http.get<T>(this.getAllBusinessManagementModes, this.requestHeaders).pipe<T>(
catchError(error => {
  return this.handleError(error, () => this.GetAllBusinessManagementModes());
}));
}

}