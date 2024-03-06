import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _authService:AuthService) { }

  ngOnInit() {
  }

  logout() {
    this._authService.logOut();
    console.log("çıkış yapıldı")
  }


}
