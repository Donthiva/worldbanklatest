import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../auth.service";
import { ConfigurationService } from "../configuration.service";
import { EndpointBase } from "../endpoint-base.service";





@Injectable()
export class AddressEndpoint extends EndpointBase {


    //country
    get addCountryUrl() { return this.configurations.baseUrl + '/api/Address/PostCountry'; }

    get getallCountriesUrl() { return this.configurations.baseUrl + '/api/Address/GetAllCountries'; }

    get updateCountryUrl() { return this.configurations.baseUrl + '/api/Address/UpdateCountry'; }

    get DeleteCountryUrl() { return this.configurations.baseUrl + '/api/Address/DeleteCountry'; }

    //state
    get addStateUrl() { return this.configurations.baseUrl + '/api/Address/PostState'; }

    get getallStateUrl() { return this.configurations.baseUrl + '/api/Address/GetAllStates'; }

    get updateStateUrl() { return this.configurations.baseUrl + '/api/Address/UpdateState'; }

    get DeleteStateUrl() { return this.configurations.baseUrl + '/api/Address/DeleteState'; }


    //district
    get addDistrictUrl() { return this.configurations.baseUrl + '/api/Address/PostDistrict'; }

    get getallDistrictUrl() { return this.configurations.baseUrl + '/api/Address/GetAllDistrict'; }

    get updateDistrictUrl() { return this.configurations.baseUrl + '/api/Address/UpdateDistrict'; }

    get DeleteDistrictUrl() { return this.configurations.baseUrl + '/api/Address/DeleteDistrict'; }

    //cities
    get addCityUrl() { return this.configurations.baseUrl + '/api/Address/PostCity'; }

    get getallCityUrl() { return this.configurations.baseUrl + '/api/Address/GetAllCities'; }

    get updateCityUrl() { return this.configurations.baseUrl + '/api/Address/UpdateCity'; }

    get DeleteCityUrl() { return this.configurations.baseUrl + '/api/Address/DeleteCity'; }

    constructor(private configurations: ConfigurationService, http: HttpClient, authService: AuthService) {
        super(http, authService);
      }

      //country CRUD
      AddnewCountry<T>(countryObject: any): Observable<T> {

        return this.http.post<T>(this.addCountryUrl, JSON.stringify(countryObject), this.requestHeaders).pipe<T>(
          catchError(error => {
            return this.handleError(error, () => this.AddnewCountry(countryObject));
          }));
      }
    
      UpdateCountry<T>(countryObject: any): Observable<T> {

        return this.http.post<T>(this.updateCountryUrl, JSON.stringify(countryObject), this.requestHeaders).pipe<T>(
          catchError(error => {
            return this.handleError(error, () => this.UpdateCountry(countryObject));
          }));
      }

      DeleteCountry<T>(countryObject: any): Observable<T> {

        return this.http.post<T>(this.DeleteCountryUrl, JSON.stringify(countryObject), this.requestHeaders).pipe<T>(
          catchError(error => {
            return this.handleError(error, () => this.UpdateCountry(countryObject));
          }));
      }
    
      GetAllCountries<T>(): Observable<T> {
  

    return this.http.get<T>(this.getallCountriesUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetAllCountries());
      }));
  }



  //state CRUD
  AddnewState<T>(stateObject: any): Observable<T> {
     console.log("state post",stateObject)
    return this.http.post<T>(this.addStateUrl, JSON.stringify(stateObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.AddnewState(stateObject));
      }));
  }

  UpdateState<T>(stateObject: any): Observable<T> {

    return this.http.post<T>(this.updateStateUrl, JSON.stringify(stateObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateState(stateObject));
      }));
  }

  DeleteState<T>(stateObject: any): Observable<T> {

    return this.http.post<T>(this.DeleteStateUrl, JSON.stringify(stateObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateState(stateObject));
      }));
  }

  GetAllStates<T>(countrId:number): Observable<T> {

    const endpointUrl = `${this.getallStateUrl}/${countrId}`;

return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
  catchError(error => {
    return this.handleError(error, () => this.GetAllStates(countrId));
  }));
}


   //district CRUD
   AddnewDistrict<T>(districtObject: any): Observable<T> {

    return this.http.post<T>(this.addDistrictUrl, JSON.stringify(districtObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.AddnewDistrict(districtObject));
      }));
  }

  UpdateDistrict<T>(districtObject: any): Observable<T> {

    return this.http.post<T>(this.updateDistrictUrl, JSON.stringify(districtObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateDistrict(districtObject));
      }));
  }

  DeleteDistrict<T>(districtObject: any): Observable<T> {

    return this.http.post<T>(this.DeleteDistrictUrl, JSON.stringify(districtObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdateDistrict(districtObject));
      }));
  }

  GetAllDistricts<T>(countryId:number,stateId:number): Observable<T> {

    const endpointUrl = `${this.getallDistrictUrl}/${countryId}/${stateId}`;
return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
  catchError(error => {
    return this.handleError(error, () => this.GetAllDistricts(countryId,stateId));
  }));
}
      

//cities CRUD
AddnewCity<T>(cityObject: any): Observable<T> {

  return this.http.post<T>(this.addCityUrl, JSON.stringify(cityObject), this.requestHeaders).pipe<T>(
    catchError(error => {
      return this.handleError(error, () => this.AddnewCity(cityObject));
    }));
}

UpdateCity<T>(cityObject: any): Observable<T> {

  return this.http.post<T>(this.updateCityUrl, JSON.stringify(cityObject), this.requestHeaders).pipe<T>(
    catchError(error => {
      return this.handleError(error, () => this.UpdateCity(cityObject));
    }));
}

DeleteCity<T>(cityObject: any): Observable<T> {

  return this.http.post<T>(this.DeleteCityUrl, JSON.stringify(cityObject), this.requestHeaders).pipe<T>(
    catchError(error => {
      return this.handleError(error, () => this.UpdateCity(cityObject));
    }));
}

GetAllCities<T>(countryId:number,stateId:number,districtID:number): Observable<T> {

  const endpointUrl = `${this.getallCityUrl}/${countryId}/${stateId}/${districtID}`;
return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
catchError(error => {
  return this.handleError(error, () => this.GetAllCities(countryId,stateId,districtID));
}));
}


}
