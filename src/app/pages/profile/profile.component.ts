import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Animal } from 'src/app/_models/animal/animal';
import { User } from 'src/app/_models/user/user';
import { AnimalService } from 'src/app/_services/animal/animal.service';
import { UserService } from 'src/app/_services/user/user.service';
import {
  SpinnerBaseComponent,
  SpinnerType,
} from 'src/app/spinner-base/spinner-base.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent extends SpinnerBaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _notificationService: ToastrService
  ) {
    super(spinner);
  }

  user: User = new User();
  animal: Animal = new Animal();
  animalsByUser: any[] = [];
  updatePopupVisible: boolean = false;
  updatedUserId: any;

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.showSpinner(SpinnerType.Timer);
    this._userService.getUserById(1).subscribe((res) => {
      this.user = res.data;
      this.hideSpinner(SpinnerType.Timer);
      this.getAnimalsByUser(this.user.id);
    });
  }

  getAnimalsByUser(userId: number) {
    this._animalService.getAnimalByUserId(userId).subscribe((res) => {
      this.animalsByUser = res.data;
    });
  }



  update() {}

  deleteAnimalByUser(animalId: number) {
    this._animalService.deleteAnimal(animalId).subscribe(
      (res) => {
        if (res.statusCode == 200) {
          this._notificationService.success(res.message);
          this.getAnimalsByUser(1);
        } else {
          this._notificationService.error(res.message);
        }
      },
      (err) => {
        this._notificationService.error(err.message);
      }
    );
  }

  displayStyleUpdate = 'none';

  openUpdatePopup(userId: any) {
    this.displayStyleUpdate = 'block';
    if (userId) {
      this.updatePopupVisible = true;
      this.updatedUserId = userId;
    } else {
      //err
    }
  }

  closeUpdatePopup() {
    this.getUserInfo();
    this.displayStyleUpdate = 'none';
    this.updatePopupVisible = false;
  }
}
