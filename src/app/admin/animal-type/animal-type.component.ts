import { Component, OnInit } from '@angular/core';
import { ExternalButtonModel } from 'src/app/_layout/_models/external-button-model';
import { AnimalType } from 'src/app/_models/animal-type';
import { AnimalTypeService } from 'src/app/_services/admin/animal-type.service';
import { NotificationService } from 'src/app/_services/notification.service';

@Component({
  selector: 'app-animal-type',
  templateUrl: './animal-type.component.html',
  styleUrls: ['./animal-type.component.css']
})
export class AnimalTypeComponent implements OnInit {
  constructor(private _service: AnimalTypeService, private _notificationService: NotificationService) {}

  itemPerPage = 3;
  currentPage = 1;

  data: AnimalType[] = [];
  columns: any[] = [
    { key: "id", caption: "Id" },
    { key: "code", caption: "Kod" },
    { key: "name", caption: "İsim" },
    { key: "description", caption: "Açıklama" }
  ];

  externalButtons: ExternalButtonModel[] = [
    {
      id: "refresh",
      action: () => this.getData(),
      text: "Yeniden Yükle",
      styleCss: "btn btn-info",
      order: 1,
      icon: "fa fa-refresh"
    },
    {
      id: "add",
      action: () => this.openPopup(),
      text: "Ekle",
      styleCss: "btn btn-success",
      order: 2,
      icon: "fa fa-plus"
    },
    {
      id: "update",
      action: () => this.updateData(this),
      text: "Düzenle",
      styleCss: "btn btn-warning",
      order: 3,
      icon: "fa fa-edit"
    },
    {
      id: "delete",
      action: (animalTypeId: number) => this.deleteData(animalTypeId),
      text: "Sil",
      styleCss: "btn btn-danger",
      order: 4,
      icon: "fa fa-trash"
    }
  ];

  ngOnInit() {
    this.getData();
  }

  updateData(id: any) {
    console.log("update data tetiklendi " + id);
  }

  deleteData(id: number) {
    this._service.deleteAnimalType(id).subscribe(res => {
      if (res.statusCode == 200) {
        this.getData();
      } else {
          //error basabiliriz..
      }
    });
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

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemPerPage;
    const end = start + this.itemPerPage;
    return this.data.slice(start, end);
  }

  changePage(page: number) {
    this.currentPage = page;
  }
}
