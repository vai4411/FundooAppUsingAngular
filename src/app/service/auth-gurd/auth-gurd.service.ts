import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
    let token:string =localStorage.getItem('fundooUserToken');
    console.log("Token:"+token)
    if (token == null || token == undefined || token.length == 0) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}