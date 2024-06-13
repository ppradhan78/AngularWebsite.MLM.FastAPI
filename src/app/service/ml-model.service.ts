import { HttpClient,  HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrlConstants } from '../common/constants/apiUrl.constants';

@Injectable({
  providedIn: 'root'
})
export class MlModelService {

  constructor(private http: HttpClient) {
  }

  getAllTokenization(searchText: string): Observable<any> {
    return this.http.get<any>(ApiUrlConstants.TokenizationAPI + searchText)
  }

  upload(file: File): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', ApiUrlConstants.SummarizeAPI, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
  }
 
 
    
}
