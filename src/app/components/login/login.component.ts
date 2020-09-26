import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user_service/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide:boolean = true
  loginForm = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
    ])
  })
  userService:UserService

  constructor(userService:UserService) {
    this.userService=userService;
  }

  ngOnInit(): void {
  }

  getErrorMessageForEmail(){
    return this.loginForm.value["email"].hasError('required') ? 'Email feild cannot be blank' :
    this.loginForm.value["email"].hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageForPassword(){
    return this.loginForm.value["password"].hasError('required') ? 'Password feild cannot be blank' :
    this.loginForm.value["password"].hasError('password') ? 'Not a valid password' : '';
  }

  login(){
    let data={
      email: this.loginForm.value["email"],
      password: this.loginForm.value["password"],
      cartId: ""
    }
    this.userService
    .login(data)
    .subscribe(
      response => {
        localStorage.setItem('fundooUserToken',response['id']);
      },
      error => console.log(error)
    );
  }
}
