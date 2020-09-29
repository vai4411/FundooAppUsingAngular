import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user_service/user.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  userService:UserService
  notes:any[]
  type:string='trash'

  constructor(userService:UserService) {
    this.userService = userService;
   }

  ngOnInit(): void {
    this.userService
    .getTranshNotes()
    .subscribe(
      response => {this.notes=response['data']['data'];
      console.log("array:"+this.notes)},
      error => console.log(error)
    )
  }

}
