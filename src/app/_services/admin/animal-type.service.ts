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

  getAnimalTypes(pagining: any) {
    return this.httpService.get("/animalType", pagining);
  }

  addAnimalType(data: AnimalType) {
    return this.httpService.post("/animalType", data);
  }

  deleteAnimalType(id: number) {
    return this.httpService.delete(`/animalType/${id}`);
  }
  updateAnimalType(id: number, data: AnimalType){
    return this.httpService.put(`/animalType/${id}`, data);
  }
  getAnimalTypeById(id: number) {
    return this.httpService.get(`/animalType/${id}`);
  }
}
