import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../auth.service";
import { ConfigurationService } from "../configuration.service";
import { EndpointBase } from "../endpoint-base.service";


@Injectable()
export class AddressService extends EndpointBase {

    get getAllCountries() { return this.configurations.baseUrl + '/api/Address/GetAllCountries'; }

    get getAllCities() { return this.configurations.baseUrl + '/api/Address/GetAllCities'; }

    get getAllStates() { return this.configurations.baseUrl + '/api/Address/GetAllStates'; }

    get getAllDistricts() { return this.configurations.baseUrl + '/api/Address/GetAllDistrict'; }

    

  constructor(private configurations: ConfigurationService, http: HttpClient, authService: AuthService) {
    super(http, authService);
  }

      GetAllCountries<T>(): Observable<T> {
  
        return this.http.get<T>(this.getAllCountries, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllCountries());
      }));
  }


  GetAllCities<T>(countryId:number,stateId:number,districtID:number): Observable<T> {

    const endpointUrl = `${this.getAllCities}/${countryId}/${stateId}/${districtID}`;
  
    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
  catchError(error => {
    return this.handleError(error, () => this.GetAllCities(countryId,stateId,districtID));
  }));
}


GetAllStates<T>(countrId:number): Observable<T> {
  
  const endpointUrl = `${this.getAllStates}/${countrId}`;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
  catchError(error => {
    return this.handleError(error, () => this.GetAllStates(countrId));
  }));
}


GetAllDistricts<T>(countryId:number,stateId:number): Observable<T> {

  const endpointUrl = `${this.getAllDistricts}/${countryId}/${stateId}`;
  
  return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
catchError(error => {
  return this.handleError(error, () => this.GetAllDistricts(countryId,stateId));
}));
}


}