import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/_models/animal';
import { User } from 'src/app/_models/user';
import { AnimalService } from 'src/app/_services/animal/animal.service';
import { UserService } from 'src/app/_services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _userService: UserService, private _animalService: AnimalService) {

  }

  user: User = new User();
  animalsByUser: any[] = [];
  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this._userService.getUserById(1).subscribe(res => {
      this.user = res.data;
      this.getAnimalsByUser(this.user.id);
    })
  }

  getAnimalsByUser(userId: number) {
    this._animalService.getAnimalByUserId(userId).subscribe(res => {
      this.animalsByUser = res.data;
    })
  }

  update() {

  }
}
