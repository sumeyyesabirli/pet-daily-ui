import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from '../base-http-client.service';
import { User } from 'src/app/_models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpService: HttpClientService) {

  }

  addUser(data: User) {
    return this.httpService.post("/User", data);
  }
}
