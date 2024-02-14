import { Component, OnInit } from '@angular/core';
import { ExternalButtonModel } from 'src/app/_layout/_models/external-button-model';
import { AnimalType } from 'src/app/_models/animal-type';
import { PageResult } from 'src/app/_models/page-result';
import { AnimalTypeService } from 'src/app/_services/admin/animal-type.service';
import { NotificationService } from 'src/app/_services/notification.service';

@Component({
  selector: 'app-animal-type',
  templateUrl: './animal-type.component.html',
  styleUrls: ['./animal-type.component.css']
})
export class AnimalTypeComponent implements OnInit {
  constructor(private _service: AnimalTypeService, private _notificationService: NotificationService) { }

  itemPerPage = 5;
  currentPage = 1;
  pageResult: PageResult = new PageResult();
  columns: any[] = [
    { key: "id", caption: "Id" },
    { key: "code", caption: "Kod" },
    { key: "name", caption: "İsim" },
    { key: "description", caption: "Açıklama" }
  ];

  externalButtons: ExternalButtonModel[] = [
    {
      id: "refresh",
      action: (page: any, perPage: any) => this.getData(page, perPage),
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
    this.getData(this.page, this.perPage);
  }

  updateData(id: any) {
    console.log("update data tetiklendi " + id);
  }

  deleteData(id: number) {
    this._service.deleteAnimalType(id).subscribe(res => {
      if (res.statusCode == 200) {
        this.getData(this.page, this.perPage);
      } else {
        //error basabiliriz..
      }
    });
  }
  page: number = 1;
  perPage: number = 5;
  getData(page: number, perPage: number) {
    this.page = page;
    this.perPage = perPage;
    this.pageResult.data = [];
    let pagining = {
      page: page,
      perPage: perPage
    };
    this._service.getAnimalTypes(pagining).subscribe(res => {
      if (res.statusCode == 200) {
        this.pageResult.count = res.count;
        this.pageResult.data = res.data;
        this.pageResult.totalCount = res.totalCount;
        console.log(res);
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
    this.getData(this.page, this.perPage);
  }

}
