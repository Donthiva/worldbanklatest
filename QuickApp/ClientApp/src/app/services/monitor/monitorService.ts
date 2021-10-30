import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../auth.service";
import { ConfigurationService } from "../configuration.service";
import { EndpointBase } from "../endpoint-base.service";


@Injectable()
export class MonitorEndpoint extends EndpointBase {

  get addEmployeeMonitorURL() { return this.configurations.baseUrl + '/api/Monitor/AddEmployeeMonitor'; }

  get getAllJobEngagement() { return this.configurations.baseUrl + '/api/Monitor/GetAllJobEngagement'; }

  get getAllEmployementStatus() { return this.configurations.baseUrl + '/api/Monitor/GetAllEmployementStatus'; }

  get getAllEmployerTypes() { return this.configurations.baseUrl + '/api/Monitor/GetAllEmployerTypes'; }

  get getAllEmployeeDataURL() { return this.configurations.baseUrl + '/api/Monitor/GetAllEmployeeData'; }

  get updateEmployeeMonitorURL() { return this.configurations.baseUrl + '/api/Monitor/UpdateEmployeeMonitor'; }

  get addBusinessMonitorURL() { return this.configurations.baseUrl + '/api/Business/AddBusinessMonitor'; }

  get getAlldBusinessMonitorURL() { return this.configurations.baseUrl + '/api/Business/GetAllBusinessMonitors'; }

  get getupdateBusinessMonitor() { return this.configurations.baseUrl + '/api/Business/UpdateBusinessMonitor'; }

  get getAddThreeWheelMonitor() { return this.configurations.baseUrl + '/api/Monitor/AddThreeWheelMonitor'; }

  get getAllThreeWheelMonitorURL() { return this.configurations.baseUrl + '/api/Monitor/GetThreeWheelMonitor'; }

  get getUpdateThreeWheelMonitor() { return this.configurations.baseUrl + '/api/Monitor/UpdateThreeWheelMonitor'; }


  get getAddPhaseOutMonitorURL() { return this.configurations.baseUrl + '/api/Monitor/AddPhaseOutMonitor'; }

  get getGetPhaseOutMonitorURL() { return this.configurations.baseUrl + '/api/Monitor/GetPhaseOutMonitor'; }

  get getUpdatePhaseOutMonitor() { return this.configurations.baseUrl + '/api/Monitor/UpdatePhaseOutMonitor'; }
  
  get getAddVulnerability() { return this.configurations.baseUrl + '/api/Person/AddVulnerability'; }

  get getAllVulnerabilityMonitorsURL() { return this.configurations.baseUrl + '/api/Person/GetAllVulnerabilityMonitors'; }


  get getUpdateVulnerabilityMonitorURL() { return this.configurations.baseUrl + '/api/Person/UpdateVulnerabilityMonitor'; }

  get updateEmployeeMonitorFilesURL() { return this.configurations.baseUrl + '/api/Person/UpdateEmployeeMonitorFiles'; }

  get deleteImagesMonitorURL() { return this.configurations.baseUrl + '/api/Monitor/DeleteImagesMonitor'; }

  get getAllEmployeeMonitorImagesURL() { return this.configurations.baseUrl + '/api/Monitor/GetAllEmployeeMonitorImages'; }

  get getAllBusinessMonitorImagesURL() { return this.configurations.baseUrl + '/api/Monitor/GetAllBusinessImages'; }

  get getAllThreeWheelMonitorImagesURL() { return this.configurations.baseUrl + '/api/Monitor/GetAllThreeWheelImages'; }

  get getAllPhaseOutMonitorImagesURL() { return this.configurations.baseUrl + '/api/Monitor/GetAllPhaseOutImages'; }


  get deleteBusinessImagesMonitorURL() { return this.configurations.baseUrl + '/api/Monitor/DeleteBusinessImagesMonitor'; }
  

  

  constructor(private configurations: ConfigurationService, http: HttpClient, authService: AuthService) {
    super(http, authService);
  }


  GetAllEmployeeMonitorImages<T>(id): Observable<T> {

    const endpointUrl = `${this.getAllEmployeeMonitorImagesURL}/${id}`;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllEmployeeMonitorImages(id));
      }));
  }

  
  GetAllBusinessMonitorImages<T>(id): Observable<T> {

    const endpointUrl = `${this.getAllBusinessMonitorImagesURL}/${id}`;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllBusinessMonitorImages(id));
      }));
  }


  GetAllThreeWheelMonitorImages<T>(id): Observable<T> {

    const endpointUrl = `${this.getAllThreeWheelMonitorImagesURL}/${id}`;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllThreeWheelMonitorImages(id));
      }));
  }

  GetAllPhaseOutMonitorImages<T>(id): Observable<T> {

    const endpointUrl = `${this.getAllPhaseOutMonitorImagesURL}/${id}`;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllPhaseOutMonitorImages(id));
      }));
  }



  AddEmployeeMonitor<T>(monitorObject: any): Observable<T> {

      
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokentest,
    });

    return this.http.post<T>(this.addEmployeeMonitorURL,monitorObject,{headers}).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.AddEmployeeMonitor(monitorObject));
      }));
  }



  DeleteImagesMonitor<T>(id,type): Observable<T> {

    const endpointUrl = `${this.deleteImagesMonitorURL}/${id}/${type}`;

    return this.http.post<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.DeleteImagesMonitor(id,type));
      }));

  }


  
  DeleteBusinessImagesMonitor<T>(id,type): Observable<T> {

    const endpointUrl = `${this.deleteBusinessImagesMonitorURL}/${id}/${type}`;

    return this.http.post<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.DeleteBusinessImagesMonitor(id,type));
      }));

  }



  UpdateEmployeeMonitor<T>(monitorObject: any): Observable<T> {

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokentest,
    });

    return this.http.post<T>(this.updateEmployeeMonitorURL,monitorObject,{headers}).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateEmployeeMonitor(monitorObject));
      }));
  }

  UpdateEmployeeMonitorFiles<T>(monitorObject: any,id): Observable<T> {

    const endpointUrl = `${this.updateEmployeeMonitorFilesURL}/${id}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokentest,
    });

    return this.http.post<T>(endpointUrl,monitorObject, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateEmployeeMonitor(monitorObject));
      }));
  }

  GetAllJobEngagement<T>(): Observable<T> {

    return this.http.get<T>(this.getAllJobEngagement, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllJobEngagement());
      }));
  }

  GetAllEmployementStatus<T>(): Observable<T> {

    return this.http.get<T>(this.getAllEmployementStatus, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllEmployementStatus());
      }));
  }

  GetAllEmployerTypes<T>(): Observable<T> {

    return this.http.get<T>(this.getAllEmployerTypes, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllEmployerTypes());
      }));
  }


  GetAllEmployeeData<T>(): Observable<T> {

    return this.http.get<T>(this.getAllEmployeeDataURL, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllEmployeeData());
      }));
  }



  AddBusinessMonitor<T>(monitorObject: any): Observable<T> {  
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokentest,
    });

    return this.http.post<T>(this.addBusinessMonitorURL,monitorObject,{headers}).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.AddBusinessMonitor(monitorObject));
      }));
  }


  GetAlldBusinessMonitor<T>(): Observable<T> {

    return this.http.get<T>(this.getAlldBusinessMonitorURL, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAlldBusinessMonitor());
      }));
  }


  UpdateBusinessMonitor<T>(monitorObject: any): Observable<T> {

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokentest,
    });

    return this.http.post<T>(this.getupdateBusinessMonitor, monitorObject, {headers}).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.AddBusinessMonitor(monitorObject));
      }));
  }




  AddThreeWheelMonitor<T>(monitorObject: any): Observable<T> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokentest,
    });


    return this.http.post<T>(this.getAddThreeWheelMonitor,monitorObject, {headers}).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.AddThreeWheelMonitor(monitorObject));
      }));
  }



  GetAllThreeWheelMonitor<T>(): Observable<T> {

    return this.http.get<T>(this.getAllThreeWheelMonitorURL, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllThreeWheelMonitor());
      }));
  }

  UpdateThreeWheelMonitor<T>(monitorObject: any): Observable<T> {

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokentest,
    });

    return this.http.post<T>(this.getUpdateThreeWheelMonitor, monitorObject, {headers}).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateThreeWheelMonitor(monitorObject));
      }));
  }




  AddPhaseOutMonitor<T>(monitorObject: any): Observable<T> {

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokentest,
    });

    return this.http.post<T>(this.getAddPhaseOutMonitorURL,monitorObject,  {headers}).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.AddPhaseOutMonitor(monitorObject));
      }));
  }



  GetPhaseOutMonitor<T>(): Observable<T> {

    return this.http.get<T>(this.getGetPhaseOutMonitorURL, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetPhaseOutMonitor());
      }));
  }

  UpdatePhaseOutMonitor<T>(monitorObject: any): Observable<T> {

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokentest,
    });

    return this.http.post<T>(this.getUpdatePhaseOutMonitor, monitorObject, {headers}).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdatePhaseOutMonitor(monitorObject));
      }));
  }



  
  AddVulnerability<T>(monitorObject: any): Observable<T> {

    return this.http.post<T>(this.getAddVulnerability, JSON.stringify(monitorObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.AddVulnerability(monitorObject));
      }));
  }


  updateVulnerabilityMonitor<T>(monitorObject: any): Observable<T> {

    return this.http.post<T>(this.getUpdateVulnerabilityMonitorURL, JSON.stringify(monitorObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.updateVulnerabilityMonitor(monitorObject));
      }));
  }



  GetAllVulnerabilityMonitors<T>(): Observable<T> {

    return this.http.get<T>(this.getAllVulnerabilityMonitorsURL, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllVulnerabilityMonitors());
      }));
  }



}