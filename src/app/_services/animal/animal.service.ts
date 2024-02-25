import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from '../base-http-client.service';
import { Animal } from 'src/app/_models/animal';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private controllerName = "/Animal";

  constructor(private httpService: HttpClientService) {

  }

  addAnimal(data: Animal) {
    return this.httpService.post(this.controllerName, data);
  }

  getAnimalByUserId(userId: number) {
    return this.httpService.get(`${this.controllerName}/GetAnimalsByUserId/${userId}`);
  }
}
