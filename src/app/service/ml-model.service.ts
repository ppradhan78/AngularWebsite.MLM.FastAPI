import { HttpClient,  HttpHeaders,  HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  GetPhraseMatcher(file: File, phrase: any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('ngram', phrase);

    const req = new HttpRequest('POST', ApiUrlConstants.GetPhraseMatcherAPI + phrase, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req)
  }
  GetNamedEntity(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', ApiUrlConstants.GetNamedEntityFileAPI , formData, {
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

  GetPlot(): Observable<any> {
    return this.http.get<any>(ApiUrlConstants.GetPlotAPI)
  }
  getImageUrl(): Observable<string> {
    return  of(ApiUrlConstants.GetPlotAPI);
  }
  generateWordcloudGet(text: string): Observable<Blob> {
    //return this.http.get(`${"http://127.0.0.1:8000/wordcloudGet"}?text=${encodeURIComponent(text)}`, { responseType: 'blob' });
    return this.http.get(ApiUrlConstants.GetWordcloudAPI +encodeURIComponent(text), { responseType: 'blob' });
  }

  GetPlotFromFile(file: File): Observable<Blob> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(ApiUrlConstants.GetPlotFromFileAPI, formData, { responseType: 'blob' });
  }
}
