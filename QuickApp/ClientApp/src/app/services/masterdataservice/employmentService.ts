import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../auth.service";
import { ConfigurationService } from "../configuration.service";
import { EndpointBase } from "../endpoint-base.service";


@Injectable()
export class EmploymentEndpoint extends EndpointBase {

    get addEmploymenttypesUrl() { return this.configurations.baseUrl + '/api/Person/PostEmploymentType'; }

    get getallEmploymenttypesUrl() { return this.configurations.baseUrl + '/api/Person/GetAllEmploymentType'; }

    get updateEmploymenttypesUrl() { return this.configurations.baseUrl + '/api/Person/UpdateEmploymentType'; }

    get DeleteEmploymenttypesUrl() { return this.configurations.baseUrl + '/api/Person/DeleteEmploymentType'; }



    get addEmploymentstatusesUrl() { return this.configurations.baseUrl + '/api/Person/PostEmploymentStatus'; }

    get getallEmploymentstatusesUrl() { return this.configurations.baseUrl + '/api/Person/GetAllEmploymentStatues'; }

    get updateEmploymentstatusesUrl() { return this.configurations.baseUrl + '/api/Person/UpdateEmploymentStatus'; }

    get DeleteEmploymentstatusesUrl() { return this.configurations.baseUrl + '/api/Person/DeleteEmploymentStatus'; }



    get addEmployertypesUrl() { return this.configurations.baseUrl + '/api/Person/PostEmployerType'; }

    get getallEmployertypesUrl() { return this.configurations.baseUrl + '/api/Person/GetAllEmployerType'; }

    get updateEmployertypesUrl() { return this.configurations.baseUrl + '/api/Person/UpdateEmployerType'; }

    get DeleteEmployertypesUrl() { return this.configurations.baseUrl + '/api/Person/DeleteEmployerType'; }


  

  

    
  constructor(private configurations: ConfigurationService, http: HttpClient, authService: AuthService) {
    super(http, authService);
  }

//Employment Type
      AddnewEmploymentType<T>(employmenttypeObject: any): Observable<T> {

        return this.http.post<T>(this.addEmploymenttypesUrl, JSON.stringify(employmenttypeObject), this.requestHeaders).pipe<T>(
          catchError(error => {
            return this.handleError(error, () => this.AddnewEmploymentType(employmenttypeObject));
          }));
      }
    
      UpdateEmploymentType<T>(employmenttypeObject: any): Observable<T> {

        return this.http.post<T>(this.updateEmploymenttypesUrl, JSON.stringify(employmenttypeObject), this.requestHeaders).pipe<T>(
          catchError(error => {
            return this.handleError(error, () => this.UpdateEmploymentType(employmenttypeObject));
          }));
      }

      DeleteEmploymentType<T>(employmenttypeObject: any): Observable<T> {

        return this.http.post<T>(this.DeleteEmploymenttypesUrl, JSON.stringify(employmenttypeObject), this.requestHeaders).pipe<T>(
          catchError(error => {
            return this.handleError(error, () => this.UpdateEmploymentType(employmenttypeObject));
          }));
      }
    
    
      
      GetAllEmploymentTypes<T>(): Observable<T> {
  

    return this.http.get<T>(this.getallEmploymenttypesUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllEmploymentTypes());
      }));
  }


//Employment Status

  AddnewEmploymentStatus<T>(employmentstatusObject: any): Observable<T> {

    return this.http.post<T>(this.addEmploymentstatusesUrl, JSON.stringify(employmentstatusObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.AddnewEmploymentStatus(employmentstatusObject));
      }));
  }

  UpdateEmploymentStatus<T>(employmentstatusObject: any): Observable<T> {

    return this.http.post<T>(this.updateEmploymentstatusesUrl, JSON.stringify(employmentstatusObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateEmploymentStatus(employmentstatusObject));
      }));
  }

  DeleteEmploymentStatus<T>(employmentstatusObject: any): Observable<T> {

    return this.http.post<T>(this.DeleteEmploymentstatusesUrl, JSON.stringify(employmentstatusObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateEmploymentStatus(employmentstatusObject));
      }));
  }


  
  GetAllEmploymentStatuses<T>(): Observable<T> {


return this.http.get<T>(this.getallEmploymentstatusesUrl, this.requestHeaders).pipe<T>(
  catchError(error => {
    return this.handleError(error, () => this.GetAllEmploymentStatuses());
  }));
}

    
//Employer Type

AddnewEmployerType<T>(employertypeObject: any): Observable<T> {

    return this.http.post<T>(this.addEmployertypesUrl, JSON.stringify(employertypeObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.AddnewEmployerType(employertypeObject));
      }));
  }

  UpdateEmployerType<T>(employertypeObject: any): Observable<T> {

    return this.http.post<T>(this.updateEmployertypesUrl, JSON.stringify(employertypeObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateEmployerType(employertypeObject));
      }));
  }

  DeleteEmployerType<T>(employertypeObject: any): Observable<T> {

    return this.http.post<T>(this.DeleteEmployertypesUrl, JSON.stringify(employertypeObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateEmployerType(employertypeObject));
      }));
  }


  
  GetAllEmployerTypes<T>(): Observable<T> {


return this.http.get<T>(this.getallEmployertypesUrl, this.requestHeaders).pipe<T>(
  catchError(error => {
    return this.handleError(error, () => this.GetAllEmployerTypes());
  }));
}

}