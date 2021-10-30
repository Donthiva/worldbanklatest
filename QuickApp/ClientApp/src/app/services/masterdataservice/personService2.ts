import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { PersonalData } from "src/app/models/app-add/personalData";
import { TrainingModelMultiple } from "src/app/models/MoniorModels/trainingModel";
import { AuthService } from "../auth.service";
import { ConfigurationService } from "../configuration.service";
import { EndpointBase } from "../endpoint-base.service";


@Injectable()
export class PersonEndpoint2 extends EndpointBase {

  get AddpersonUrl() { return this.configurations.baseUrl + '/api/Person/AddPersonData'; }

  get UpdatePerson() { return this.configurations.baseUrl + '/api/Person/UpdatePerson'; }

  

  get getAllGenders() { return this.configurations.baseUrl + '/api/Person/GetGender'; }

  get addGender() { return this.configurations.baseUrl + '/api/Person/PostGender'; }

  get updateGender() { return this.configurations.baseUrl + '/api/Person/UpdateGender'; }

  get deleteGender() { return this.configurations.baseUrl + '/api/Person/DeleteGender'; }

  
  get getPersonTypes() { return this.configurations.baseUrl + '/api/Person/GetPersonTypes'; }

  get addPersonType() { return this.configurations.baseUrl + '/api/Person/PostPersonType'; }

  get updatePersonType() { return this.configurations.baseUrl + '/api/Person/UpdatePersonType'; }

  get deletePersonType() { return this.configurations.baseUrl + '/api/Person/DeletePersonType'; }

  get getAllPersonData() { return this.configurations.baseUrl + '/api/Person/GetAllPersonsData'; }

  get GetAllPersonsDataWithoutRelatedURL() { return this.configurations.baseUrl + '/api/Person/GetAllPersonsDataWithoutRelated'; }



  get getAllTrainingTypes() { return this.configurations.baseUrl + '/api/Person/GetAllTrainingTypes'; }

  get addTrainingType() { return this.configurations.baseUrl + '/api/Person/PostTrainingType'; }

  get updateTrainingType() { return this.configurations.baseUrl + '/api/Person/UpdateTrainingType'; }

  get deleteTrainingType() { return this.configurations.baseUrl + '/api/Person/DeleteTrainingType'; }



  get getAllVulnerabilityTypes() { return this.configurations.baseUrl + '/api/Person/GetAllVulnerabilityTypes'; }

  get addVulnerabilityType() { return this.configurations.baseUrl + '/api/Person/PostVulnerabilityType'; }

  get updateVulnerabilityType() { return this.configurations.baseUrl + '/api/Person/UpdateVulnerabilityType'; }

  get deleteVulnerabilityType() { return this.configurations.baseUrl + '/api/Person/DeleteVulnerabilityType'; }


  get getAllVulnerabilityLevels() { return this.configurations.baseUrl + '/api/Person/GetAllValnerbilityLevel'; }

  get addVulnerabilityLevel() { return this.configurations.baseUrl + '/api/Person/PostVulnerabilityLevel'; }

  get updateVulnerabilityLevel() { return this.configurations.baseUrl + '/api/Person/UpdateVulnerabilityLevel'; }

  get deleteVulnerabilityLevel() { return this.configurations.baseUrl + '/api/Person/DeleteVulnerabilityLevel'; }


  get addTrainingDataURL() { return this.configurations.baseUrl + '/api/Person/AddTrainingData'; }


  get addTrainingMultipleDataURL() { return this.configurations.baseUrl + '/api/Person/addTrainingMultipleDataURL'; }
  

  get GetAllTrainingDataURL() { return this.configurations.baseUrl + '/api/Person/GetAllTrainigData'; }


  get UpdateAllTrainingDataURL() { return this.configurations.baseUrl + '/api/Person/UpdateTrainingData'; }



  constructor(private configurations: ConfigurationService, http: HttpClient, authService: AuthService) {
    super(http, authService);
  }

     AddPersonData<T>(personDataeObject: PersonalData): Observable<T> {

      console.log("sevice log",JSON.stringify(personDataeObject));
        return this.http.post<T>(this.AddpersonUrl, JSON.stringify(personDataeObject), this.requestHeaders).pipe<T>(
          catchError(error => {
            return this.handleError(error, () => this.AddPersonData(personDataeObject));
          }));
      }
    
      GetGender<T>(): Observable<T> {
  
        return this.http.get<T>(this.getAllGenders, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.GetGender());
      }));
    }

    AddnewGender<T>(genderObject: any): Observable<T> {

      return this.http.post<T>(this.addGender, JSON.stringify(genderObject), this.requestHeaders).pipe<T>(
        catchError(error => {
          return this.handleError(error, () => this.AddnewGender(genderObject));
        }));
    }
  
    UpdateGender<T>(genderObject: any): Observable<T> {
  
      return this.http.post<T>(this.updateGender, JSON.stringify(genderObject), this.requestHeaders).pipe<T>(
        catchError(error => {
          return this.handleError(error, () => this.UpdateGender(genderObject));
        }));
    }
  
    DeleteGender<T>(genderObject: any): Observable<T> {
  
      return this.http.post<T>(this.deleteGender, JSON.stringify(genderObject), this.requestHeaders).pipe<T>(
        catchError(error => {
          return this.handleError(error, () => this.UpdateGender(genderObject));
        }));
    }


    GetPersonTypes<T>(): Observable<T> {
  
      return this.http.get<T>(this.getPersonTypes, this.requestHeaders).pipe<T>(
    catchError(error => {
      return this.handleError(error, () => this.GetPersonTypes());
    }));
  }

  AddnewPersonType<T>(personTypeObject: any): Observable<T> {

    return this.http.post<T>(this.addPersonType, JSON.stringify(personTypeObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.AddnewPersonType((personTypeObject)));
      }));
  }

  UpdatePersonType<T>(personTypeObject: any): Observable<T> {

    return this.http.post<T>(this.updatePersonType, JSON.stringify(personTypeObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdatePersonType(personTypeObject));
      }));
  }

  DeletePersonType<T>(personTypeObject: any): Observable<T> {

    return this.http.post<T>(this.deletePersonType, JSON.stringify(personTypeObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdatePersonType(personTypeObject));
      }));
  }
    



  UpdatePersonData<T>(personDataeObject): Observable<T> {
    return this.http.post<T>(this.UpdatePerson, JSON.stringify(personDataeObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.UpdatePersonData(personDataeObject));
      }));
  }


  GetAllTrainingTypes<T>(): Observable<T> {
  
    return this.http.get<T>(this.getAllTrainingTypes, this.requestHeaders).pipe<T>(
  catchError(error => {
    return this.handleError(error, () => this.GetAllTrainingTypes());
  }));
}

AddnewTrainingType<T>(trainingTypeObject: any): Observable<T> {

  return this.http.post<T>(this.addTrainingType, JSON.stringify(trainingTypeObject), this.requestHeaders).pipe<T>(
    catchError(error => {
      return this.handleError(error, () => this.AddnewTrainingType(trainingTypeObject));
    }));
}

UpdateTrainingType<T>(trainingTypeObject: any): Observable<T> {

  return this.http.post<T>(this.updateTrainingType, JSON.stringify(trainingTypeObject), this.requestHeaders).pipe<T>(
    catchError(error => {
      return this.handleError(error, () => this.UpdateTrainingType(trainingTypeObject));
    }));
}

DeleteTrainingType<T>(trainingTypeObject: any): Observable<T> {

  return this.http.post<T>(this.deleteTrainingType, JSON.stringify(trainingTypeObject), this.requestHeaders).pipe<T>(
    catchError(error => {
      return this.handleError(error, () => this.UpdateTrainingType(trainingTypeObject));
    }));
}


GetAllVulnerabilityTypes<T>(): Observable<T> {
  
  return this.http.get<T>(this.getAllVulnerabilityTypes, this.requestHeaders).pipe<T>(
catchError(error => {
  return this.handleError(error, () => this.GetAllVulnerabilityTypes());
}));
}

AddnewVulnerabilityType<T>(vulnerabilityTypeObject: any): Observable<T> {

return this.http.post<T>(this.addVulnerabilityType, JSON.stringify(vulnerabilityTypeObject), this.requestHeaders).pipe<T>(
  catchError(error => {
    return this.handleError(error, () => this.AddnewVulnerabilityType(vulnerabilityTypeObject));
  }));
}

UpdateVulnerabilityType<T>(vulnerabilityTypeObject: any): Observable<T> {

return this.http.post<T>(this.updateVulnerabilityType, JSON.stringify(vulnerabilityTypeObject), this.requestHeaders).pipe<T>(
  catchError(error => {
    return this.handleError(error, () => this.UpdateVulnerabilityType(vulnerabilityTypeObject));
  }));
}

DeleteVulnerabilityType<T>(vulnerabilityTypeObject: any): Observable<T> {

return this.http.post<T>(this.deleteVulnerabilityType, JSON.stringify(vulnerabilityTypeObject), this.requestHeaders).pipe<T>(
  catchError(error => {
    return this.handleError(error, () => this.UpdateVulnerabilityType(vulnerabilityTypeObject));
  }));
}




GetAllVulnerabilityLevels<T>(): Observable<T> {
  
  return this.http.get<T>(this.getAllVulnerabilityLevels, this.requestHeaders).pipe<T>(
catchError(error => {
  return this.handleError(error, () => this.GetAllVulnerabilityLevels());
}));
}

AddnewVulnerabilityLevel<T>(vulnerabilityLevelObject: any): Observable<T> {

return this.http.post<T>(this.addVulnerabilityLevel, JSON.stringify(vulnerabilityLevelObject), this.requestHeaders).pipe<T>(
  catchError(error => {
    return this.handleError(error, () => this.AddnewVulnerabilityLevel(vulnerabilityLevelObject));
  }));
}

UpdateVulnerabilityLevel<T>(vulnerabilityLevelObject: any): Observable<T> {

return this.http.post<T>(this.updateVulnerabilityLevel, JSON.stringify(vulnerabilityLevelObject), this.requestHeaders).pipe<T>(
  catchError(error => {
    return this.handleError(error, () => this.UpdateVulnerabilityLevel(vulnerabilityLevelObject));
  }));
}

DeleteVulnerabilityLevel<T>(vulnerabilityLevelObject: any): Observable<T> {

return this.http.post<T>(this.deleteVulnerabilityLevel, JSON.stringify(vulnerabilityLevelObject), this.requestHeaders).pipe<T>(
  catchError(error => {
    return this.handleError(error, () => this.UpdateVulnerabilityLevel(vulnerabilityLevelObject));
  }));
}



AddTrainingData<T>(TrainingDataObject: any): Observable<T> {

  return this.http.post<T>(this.addTrainingDataURL, JSON.stringify(TrainingDataObject), this.requestHeaders).pipe<T>(
    catchError(error => {
      return this.handleError(error, () => this.AddTrainingData(TrainingDataObject));
    }));
}



GetAllTrainingData<T>(): Observable<T> {

  return this.http.get<T>(this.GetAllTrainingDataURL, this.requestHeaders).pipe<T>(
    catchError(error => {
      return this.handleError(error, () => this.GetAllTrainingData());
    }));
}

UpdateTrainingData<T>(TrainingDataObject: any): Observable<T> {

  return this.http.post<T>(this.UpdateAllTrainingDataURL, JSON.stringify(TrainingDataObject), this.requestHeaders).pipe<T>(
    catchError(error => {
      return this.handleError(error, () => this.AddTrainingData(TrainingDataObject));
    }));
}


GetAllPersonData<T>(): Observable<T> {
  
  return this.http.get<T>(this.getAllPersonData, this.requestHeaders).pipe<T>(
catchError(error => {
  return this.handleError(error, () => this.GetPersonTypes());
}));
}


GetAllPersonsDataWithoutRelated<T>(): Observable<T> {
  
  return this.http.get<T>(this.GetAllPersonsDataWithoutRelatedURL, this.requestHeaders).pipe<T>(
catchError(error => {
  return this.handleError(error, () => this.GetPersonTypes());
}));
}



AddTrainingDataMultiple<T>(TrainingDataObject: any): Observable<T> {

  console.log('json',JSON.stringify(TrainingDataObject) );

  console.log('data',TrainingDataObject);

  const headers = new HttpHeaders({
    Authorization: 'Bearer ' + this.tokentest,
  });
  return this.http.post<T>(this.addTrainingMultipleDataURL,JSON.stringify(TrainingDataObject), this.requestHeaders).pipe<T>(
    catchError(error => {
      return this.handleError(error, () => this.AddTrainingDataMultiple(TrainingDataObject));
    }));
}



}