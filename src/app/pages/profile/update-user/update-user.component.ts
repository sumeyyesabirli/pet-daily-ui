import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/_models/user/user';
import { NotificationService } from 'src/app/_services/notification.service';
import { UserService } from 'src/app/_services/user/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  @Input() id: any = null;
  data: User = new User();
  animalsByUser: any[] = [];
  updatePopupVisible: boolean = false;
  updatedUserId: any;
  constructor(
    private _userService: UserService,
    private _notificationService: ToastrService
  ) {}

  ngOnInit(): void {
    if (this.id) {
      this._userService.getUserById().subscribe((data) => {
        this.data = data.data;
      });
    }
  }

  updatedUser() {
    if (this.data.id) {
      let data = {
        id: this.data.id,
        username: this.data.username,
        mail: this.data.mail,
        firstName: this.data.firstName,
        lastName: this.data.lastName,
        description: this.data.description,
        gender: this.data.gender,
        fullName: this.data.fullName,
      };
      this._userService.updateUser(this.data.id, data).subscribe((res) => {
        if (res.statusCode == 200) {
          this._notificationService.success(res.message);
        } else {
          this._notificationService.warning(res.message);
        }
      }, err => {
        console.log(err);
        this._notificationService.error(err);
      });
    }
  }

}
