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
}