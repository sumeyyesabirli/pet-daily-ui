import { Injectable } from '@angular/core';
import { HttpClientService } from '../base-http-client.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private httpService: HttpClientService, private _notificationService: ToastrService, private router: Router
  ) { }
isLogin: boolean = false;

login(loginModel: any){
  return this.httpService.post("/Auth/Login",loginModel).subscribe(res=>{
   if(res.statusCode == 200){
    this._notificationService.success(res.message)
    localStorage.setItem("token",res.data.accessToken);
    this.isLogin = true;
    this.router.navigate(["main-page"]);


   }
  }, err=>{
    console.log(err)
    this._notificationService.error(err.error.message)
  })
}

logOut(){

}

public getToken(){
  let token = localStorage.getItem("token");
  return token != null || token != undefined;
}

public checkLogin(): boolean{
  this.isLogin = this.getToken();
  return this.isLogin;
}

getUserId(){
  var token = this.getToken();

  return 1;
}

}
