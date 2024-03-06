import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {


  constructor(private router: Router, private _authService : AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let isLogin = this._authService.checkLogin();

    if(!isLogin)
      this.router.navigate(["auth/login"]);
    return true;
  }

  logOut(){
    this._authService.logOut();
  }
}
