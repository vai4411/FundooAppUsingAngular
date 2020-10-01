import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../service/user_service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user:string
  email:string
  @Output() public sidenavToggle = new EventEmitter();
  userService: UserService
  private route:Router

  constructor(route:Router,userService:UserService) {
    this.userService=userService;
    this.route=route;
  }

  ngOnInit(): void {
    this.user=localStorage.getItem("user");
    this.email=localStorage.getItem("email");
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  logout(){
    let data={}
    this.userService.logout(data).subscribe(
      response => {
        localStorage.removeItem('fundooUserToken');
        this.route.navigate(['/login']);
      },
      error => console.log(error)
    );
  }
}
