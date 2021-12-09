import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { PersonalData } from "src/app/models/app-add/personalData";
import { AuthService } from "../auth.service";
import { ConfigurationService } from "../configuration.service";
import { EndpointBase } from "../endpoint-base.service";


@Injectable()
export class PersonEndpoint extends EndpointBase {



  get AddpersonUrl() { return this.configurations.baseUrl + '/api/Person/AddPersonData'; }

  get UpdatePerson() { return this.configurations.baseUrl + '/api/Person/UpdatePerson'; }



  get getGender() { return this.configurations.baseUrl + '/api/Person/GetGender'; }


  get getPersonTypes() { return this.configurations.baseUrl + '/api/Person/GetPersonTypes'; }

  get getPreviousPersonTypes() { return this.configurations.baseUrl + '/api/Person/GetPersonPreviousTypes'; }

  get getAllPersonData() { return this.configurations.baseUrl + '/api/Person/GetAllPersonsData'; }

  get getApProgressBOData() { return this.configurations.baseUrl + '/api/Person/GetApProgressBOData'; }

  get getTrainingData() { return this.configurations.baseUrl + '/api/Person/GetTrainingData'; }

  get getAllVulnerabilityLevelURL() { return this.configurations.baseUrl + '/api/Person/GetAllValnerbilityLevel'; }


  get getAllVulnerabilityTypeURL() { return this.configurations.baseUrl + '/api/Person/GetAllVulnerabilityTypes'; }


  get getMonitorPeriod() { return this.configurations.baseUrl + '/api/Person/GetAllMonitorPeriodData'; }



  get DeletePersonURL() { return this.configurations.baseUrl + '/api/Person/DeletePerson'; }


  get getAllEducationTypes() { return this.configurations.baseUrl + '/api/Person/GetAllEducationTypes'; }

  get getAllMartialTypes() { return this.configurations.baseUrl + '/api/Person/GetAllMatialTypes'; }

  get getAllReallocationTypes() { return this.configurations.baseUrl + '/api/Person/GetAllLivelihoodTypes'; }
  

  constructor(private configurations: ConfigurationService, http: HttpClient, authService: AuthService) {
    super(http, authService);
  }

  AddPersonData<T>(personDataeObject): Observable<T> {
    
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokentest,
    });
    // console.log("sevice log", JSON.stringify(personDataeObject));
    return this.http.post<T>(this.AddpersonUrl,personDataeObject,{headers}).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.AddPersonData(personDataeObject));
      }));
  }

  GetGender<T>(): Observable<T> {

    return this.http.get<T>(this.getGender, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetGender());
      }));
  }

  GetMonitorPeriod<T>(): Observable<T> {

    return this.http.get<T>(this.getMonitorPeriod, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetGender());
      }));
  }


  GetPersonTypes<T>(): Observable<T> {

    return this.http.get<T>(this.getPersonTypes, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetPersonTypes());
      }));
  }


  GetPreviousPersonTypes<T>(): Observable<T> {

    return this.http.get<T>(this.getPreviousPersonTypes, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetPreviousPersonTypes());
      }));
  }


  GetAllPersonData<T>(): Observable<T> {

    return this.http.get<T>(this.getAllPersonData, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllPersonData());
      }));
  }


  GetApProgressBOData<T>(Id:number): Observable<T> {
    
    const endpointUrl = `${this.getApProgressBOData}/${Id}`;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetApProgressBOData(Id));
      }));
  }

  GetTrainingData<T>(Id:number): Observable<T> {
    
    const endpointUrl = `${this.getTrainingData}/${Id}`;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetTrainingData(Id));
      }));
  }



  UpdatePersonData<T>(personDataeObject): Observable<T> {
    return this.http.post<T>(this.UpdatePerson, JSON.stringify(personDataeObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdatePersonData(personDataeObject));
      }));
  }



  GetAllVulnerabilityLevel<T>(): Observable<T> {

    return this.http.get<T>(this.getAllVulnerabilityLevelURL, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllVulnerabilityLevel());
      }));
  }


  GetAllVulnerabilityTypes<T>(): Observable<T> {

    return this.http.get<T>(this.getAllVulnerabilityTypeURL, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllVulnerabilityTypes());
      }));
  }



  DeletePerson<T>(Id): Observable<T> {

    const endpointUrl = `${this.DeletePersonURL}/${Id}`;

    return this.http.post<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.DeletePerson(Id));
      }));
  }


  
  GetAllEducationTypes<T>(): Observable<T> {

    return this.http.get<T>(this.getAllEducationTypes, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllEducationTypes());
      }));
  }

  GetAllMartialTypes<T>(): Observable<T> {

    return this.http.get<T>(this.getAllMartialTypes, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllMartialTypes());
      }));
  }

  GetAllReallocationTypes<T>(): Observable<T> {

    return this.http.get<T>(this.getAllReallocationTypes, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllMartialTypes());
      }));
  }
}