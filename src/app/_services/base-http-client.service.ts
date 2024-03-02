import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from '../_models/base-response';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private url = "http://localhost:5000/api";

  constructor(private http: HttpClient) {

  }

  httpJsonOptions(){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let token = localStorage.getItem("token");
    headers = headers.append('Authorization', `Bearer ${token}` );
    return headers;
  }

  get(path: string, params?: HttpParams): Observable<BaseResponse> {
    return this.http.get<BaseResponse>(this.url + path, { params: params , headers : this.httpJsonOptions() });
  }

  post(path: string, model: any): Observable<BaseResponse> {
    return this.http.post<BaseResponse>(this.url + path, model, {headers : this.httpJsonOptions() });
  }

  put(path: string, model: any): Observable<BaseResponse> {
    return this.http.put<BaseResponse>(this.url + path, model, {headers : this.httpJsonOptions() });
  }

  delete(path: string): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>(this.url + path, {headers : this.httpJsonOptions() });
  }
}
