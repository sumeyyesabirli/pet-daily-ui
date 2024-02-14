import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from '../_models/base-response';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private url = "http://localhost:5000/api";

  constructor(private http: HttpClient) {

  }

  get(path: string, params?: HttpParams): Observable<BaseResponse> {
    return this.http.get<BaseResponse>(this.url + path, { params: params });
  }

  post(path: string, model: any): Observable<BaseResponse> {
    return this.http.post<BaseResponse>(this.url + path, model);
  }

  put(path: string, model: any): Observable<BaseResponse> {
    return this.http.put<BaseResponse>(this.url + path, model);
  }

  delete(path: string): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>(this.url + path);
  }
}
