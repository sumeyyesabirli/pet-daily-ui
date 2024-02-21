import { Component, Input, OnInit } from '@angular/core';
import { AnimalType } from 'src/app/_models/animal-type';
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
  constructor(private _service: AnimalTypeService, private _notificationService: NotificationService) {}

  ngOnInit(): void {
    this._service.getAnimalTypeById(this.id);
  }

  updateData() {
    if (this.data.id) {
      this._service.updateAnimalType(this.data.id, this.data).subscribe();
    }
}}
