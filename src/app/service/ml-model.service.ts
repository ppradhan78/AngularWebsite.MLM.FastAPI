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

  getAllFileTokenization(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', ApiUrlConstants.TokenizationFileAPI, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
  }
  getAllNgramTokenization(file: File, ngram: any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('ngram', ngram);

    const req = new HttpRequest('POST', ApiUrlConstants.GetNGramFileAPI + ngram, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
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
 
  pos(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', ApiUrlConstants.PosFileAPI, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
  }


  GetBoW(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', ApiUrlConstants.BowFileAPI, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
  }
}
