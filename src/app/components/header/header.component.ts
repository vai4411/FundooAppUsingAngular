import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../service/user_service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  userService: UserService
  private route:Router

  constructor(route:Router,userService:UserService) {
    this.userService=userService;
    this.route=route;
  }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  logout(){
    this.userService.logout().subscribe(
      response => {
        this.route.navigate(['/login']);
      },
      error => console.log(error)
    );
  }
}
