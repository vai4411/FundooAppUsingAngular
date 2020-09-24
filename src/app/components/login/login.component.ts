import { Component, OnInit } from '@angular/core';
import { FundooService } from './../../service/fundoo_service/fundoo.service';
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
  fundooService:FundooService

  constructor(fundooService:FundooService) {
    this.fundooService=fundooService;
  }

  ngOnInit(): void {
  }

  login(){
    let data={
      email: this.loginForm.value["email"],
      password: this.loginForm.value["password"],
      cartId: ""
    }

    this.fundooService
    .login(data)
    .subscribe(
      result => console.log(result),
      error => console.log(error)
    );
  }
}
