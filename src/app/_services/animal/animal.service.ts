import { Injectable } from '@angular/core';
import { HttpClientService } from '../base-http-client.service';
import { Animal } from 'src/app/_models/animal/animal';


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

  deleteAnimal(id: number) {
    return this.httpService.delete(`${this.controllerName}/${id}`);
  }
  getAnimalById(id: number){
    return this.httpService.get(`${this.controllerName}/${id}`);
  }
}
