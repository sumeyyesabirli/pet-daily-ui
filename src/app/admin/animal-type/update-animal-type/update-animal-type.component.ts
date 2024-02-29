import { Component, Input, OnInit } from '@angular/core';
import { AnimalType } from 'src/app/_models/animalType/animal-type';
import { AnimalTypeService } from 'src/app/_services/admin/animal-type.service';
import { NotificationService } from 'src/app/_services/notification.service';

@Component({
  selector: 'app-update-animal-type',
  templateUrl: './update-animal-type.component.html',
  styleUrls: ['./update-animal-type.component.css']
})
export class UpdateAnimalTypeComponent implements OnInit {
  @Input() id: any = null;
  data: AnimalType = new AnimalType();
  constructor(private _service: AnimalTypeService, private _notificationService: NotificationService) { }

  ngOnInit(): void {
    if (this.id) {
      this._service.getAnimalTypeById(this.id).subscribe((data) => {
        this.data = data.data;
      });
    }
  }

  updateData() {
    if (this.data.id) {
      let data = {
        code: this.data.code,
        name: this.data.name,
        description: this.data.description
      }
      this._service.updateAnimalType(this.data.id, data).subscribe();
    }
  }
}
