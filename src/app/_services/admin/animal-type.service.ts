import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from '../base-http-client.service';
import { AnimalType } from 'src/app/_models/animal-type';

@Injectable({
  providedIn: 'root'
})
export class AnimalTypeService {


  constructor(private httpService: HttpClientService) {

  }

  getAnimalTypes() {
    return this.httpService.get("/animalType");
  }
}
