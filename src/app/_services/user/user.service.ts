import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from '../base-http-client.service';
import { User } from 'src/app/_models/user/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private controllerName = "/User";

  constructor(private httpService: HttpClientService) {

  }

  addUser(data: User) {
    return this.httpService.post(this.controllerName, data);
  }

  getUserById() {
    return this.httpService.get(`${this.controllerName}`);
  }

  updateUser(id: number, data: any) {
    return this.httpService.put(`/User/${id}`, data);
  }
}
