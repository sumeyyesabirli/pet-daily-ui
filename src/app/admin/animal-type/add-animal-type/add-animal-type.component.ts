import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AnimalType } from 'src/app/_models/animal-type';
import { AnimalTypeService } from 'src/app/_services/admin/animal-type.service';


@Component({
  selector: 'app-add-animal-type',
  templateUrl: './add-animal-type.component.html',
  styleUrls: ['./add-animal-type.component.scss']
})
export class AddAnimalTypeComponent implements OnInit {
  @Input() id: any = null;
  addedData: AnimalType = new AnimalType();

  constructor(private _service: AnimalTypeService, private _notificationService: ToastrService) {

  }
  ngOnInit(): void {
    if (this.id) {
      //getById çalışcak
    }
  }

  addData() {
    console.log('addData');
    console.log(this.addedData);
    this._service.addAnimalType(this.addedData).subscribe((res) => {
      if (res.statusCode == 200) {
        this._notificationService.success(res.message);
      } else {
        this._notificationService.warning(res.message);
      }
    }, err => {
      console.log(err);
      this._notificationService.error(err.message);
    });
  }
}
