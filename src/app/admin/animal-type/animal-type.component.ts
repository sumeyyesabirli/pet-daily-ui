import { Component, OnInit } from '@angular/core';
import { AnimalType } from 'src/app/_models/animal-type';
import { AnimalTypeService } from 'src/app/_services/admin/animal-type.service';

@Component({
  selector: 'app-animal-type',
  templateUrl: './animal-type.component.html',
  styleUrls: ['./animal-type.component.css']
})
export class AnimalTypeComponent implements OnInit {

  constructor(private _service: AnimalTypeService) {

  }
  data: AnimalType[] = [];
  columns: any[] = [
    {
      key: "id",
      caption: "Id"
    }, {
      key: "code",
      caption: "Kod"
    }, {
      key: "name",
      caption: "İsim"
    }, {
      key: "description",
      caption: "Açıklama"
    }
  ];

  ngOnInit() {
    this._service.getAnimalTypes().subscribe(res => {
      if (res.statusCode == 200) {
        this.data = res.data;
        console.log(this.data);
        const keys = Object.keys(this.data)
        const values = keys.map(key => `${key}: ${Reflect.get(this.data, key)}`)
        console.log(values)
      } else {
        //error basabiliriz..
      }
    })
  }
}
