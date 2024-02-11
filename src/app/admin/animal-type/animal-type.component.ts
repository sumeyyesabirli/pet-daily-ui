import { Component, OnInit } from '@angular/core';
import { ExternalButtonModel } from 'src/app/_layout/_models/external-button-model';
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

  externalButtons: ExternalButtonModel[] = [{
    id: "refresh",
    action: () => this.getData(),
    text: "Yeniden Yükle",
    styleCss: "btn btn-info",
    order: 1,
    icon: "fa fa-refresh"
  }, {
    id: "add",
    action: () => this.openPopup(),
    text: "Ekle",
    styleCss: "btn btn-success",
    order: 2,
    icon: "fa fa-plus"
  }, {
    id: "update",
    action: () => this.updateData(this),
    text: "Düzenle",
    styleCss: "btn btn-warning",
    order: 2,
    icon: "fa fa-edit"
  }, {
    id: "delete",
    action: () => this.deleteData(this),
    text: "Sil",
    styleCss: "btn btn-danger",
    order: 2,
    icon: "fa fa-trash"
  }]

  ngOnInit() {
    this.getData();
  }

  updateData(id: any) {
    console.log("update data tetiklendi " + id);
  }

  deleteData(id: any) {
    console.log("delete data tetiklendi ");
    console.log(id);
  }

  getData() {
    this.data = [];
    this._service.getAnimalTypes().subscribe(res => {
      if (res.statusCode == 200) {
        this.data = res.data;
      } else {
        //error basabiliriz..
      }
    })
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    this.getData();
  }
}
