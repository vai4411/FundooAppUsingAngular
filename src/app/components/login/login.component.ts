import { Component, OnInit } from '@angular/core';
import { FundooService } from './../../service/fundoo_service/fundoo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide:boolean = true
  userEmail:string
  userPassword:string
  fundooService:FundooService

  constructor(fundooService:FundooService) {
    this.fundooService=fundooService;
  }

  ngOnInit(): void {
  }

  email(data){
    this.userEmail=data.target.value;
  }

  password(data){
    this.userPassword=data.target.value;
  }

  login(){
    console.log(this.userEmail);
    let data={
      email: this.userEmail,
      password: this.userPassword,
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
