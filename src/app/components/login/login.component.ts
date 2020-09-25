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
    email: new FormControl('',Validators.email),
    password: new FormControl('',Validators.required)
  })
  userService:UserService

  constructor(userService:UserService) {
    this.userService=userService;
  }

  ngOnInit(): void {
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
      response => {console.log(response);localStorage.setItem('fundooUserToken',response['id']);},
      error => console.log(error)
    );
  }
}
