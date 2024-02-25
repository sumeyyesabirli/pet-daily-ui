import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/admin/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  addedUser: User = new User();
  passwordVisible: boolean = false;

  constructor(private _service: UserService, private _notificationService: ToastrService) { }

  ngOnInit() {
  }

  visible(){
    this.passwordVisible = !this.passwordVisible;
    var  passwordInput = document.getElementById('password') as HTMLInputElement;
    if (this.passwordVisible) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }

  register(){
      this._service.addUser(this.addedUser).subscribe((res) => {
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
