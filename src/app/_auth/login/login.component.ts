import { Component, OnInit } from '@angular/core';
import { ExternalButtonModel } from 'src/app/_layout/_models/external-button-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  passwordVisible: boolean = false;

  ngOnInit() {}

  visible(){
    this.passwordVisible = !this.passwordVisible;//her tıkladığımızda değeri tersine çevirir
    debugger;
    //getElementById metodu, password id ye sahip olan bir hmtl öğesini arıyoruz.
    var  passwordInput = document.getElementById('password') as HTMLInputElement; // input öğesine erişeme değer ve tür değiştirme veya okuma yapabilirz
    if (this.passwordVisible) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }

}
