import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Share } from 'src/app/_models/share/share';
import { UserService } from 'src/app/_services/user/user.service';
import { ShareService } from 'src/app/_services/share/share.service';
import { AnimalService } from 'src/app/_services/animal/animal.service';
import { AnimalByUser } from 'src/app/_models/animalByUser/animalByUser';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css'],
})
export class ShareComponent implements OnInit {
  shareData: Share = new Share();
  animalsByUser: AnimalByUser[] = [];
  userId: any;

  constructor(
    private _shareService: ShareService,
    private _notificationService: ToastrService,
    private _userService: UserService,
    private _animalService: AnimalService,
  ) {}

  ngOnInit(): void {
    this.getUserId();
    this.getAnimalsByUser();
  }

  getUserId() {
    this._userService.getUserById().subscribe((res) => {
      this.userId = res.data.id;
    });
  }
  getAnimalsByUser() {
    this._animalService.getAnimalByUserId().subscribe((res) => {
      this.animalsByUser = res.data;
    });
  }
  addShare() {
    this.shareData.userId = this.userId;
    this._shareService.addShare(this.shareData).subscribe(
      (res) => {
        if (res.statusCode == 200) {
          this._notificationService.success(res.message);
        } else {
          this._notificationService.warning(res.message);
        }
      },
      (err) => {
        console.log(err);
        this._notificationService.error(err.message);
      }
    );
  }
}
