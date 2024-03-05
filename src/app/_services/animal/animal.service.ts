import { Injectable } from '@angular/core';
import { HttpClientService } from '../base-http-client.service';
import { AnimalByUser } from 'src/app/_models/animalByUser/animalByUser';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private controllerName = "/Animal";

  constructor(private httpService: HttpClientService) {

  }

  addAnimal(data: AnimalByUser) {
    return this.httpService.post(this.controllerName, data);
  }

  getAnimalByUserId() {
    return this.httpService.get(`${this.controllerName}/GetAnimalsByUserId`);
  }

  deleteAnimal(id: number) {
    return this.httpService.delete(`${this.controllerName}/${id}`);
  }
  getAnimalById(id: number){
    return this.httpService.get(`${this.controllerName}/${id}`);
  }
}
