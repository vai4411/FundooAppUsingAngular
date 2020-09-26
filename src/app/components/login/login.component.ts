import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user_service/user.service';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide:boolean = true
  userService:UserService
  private route:Router

  constructor(route:Router,userService:UserService) {
    this.userService=userService;
    this.route=route;
  }

  Email = new FormControl('', [Validators.email, Validators.required]);
  Password = new FormControl('', [
    Validators.minLength(8),
    Validators.required,
  ]);

  getEmailErrorMessage() {
    return this.Email.hasError('required')
      ? 'Email is Required'
      : 'please enter valid email';
  }

  getPasswordErrorMessage() {
    return this.Password.hasError('required')
      ? 'Password is Required '
      : 'Password should be minimum of 8 characters';
  }
  ngOnInit(): void {
  }

  login(){
    let data={
      email: this.Email.value,
      password: this.Password.value,
      cartId: ""
    }
    if(!(this.Email.hasError('required')) && !(this.Email.hasError('email'))
      && !(this.Password.hasError('required')) && !(this.Password.value.length < 8))
    {
    this.userService
    .login(data)
    .subscribe(
      response => {
        localStorage.setItem('fundooUserToken',response['id']);
        if(response['id'] != null){
          this.route.navigate(['/dashBoard']);
        }
      },
      error => console.log(error)
    );
  }
}
}
