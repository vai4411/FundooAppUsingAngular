import { Component, OnInit,Input } from '@angular/core';
import { UserService } from 'src/app/service/user_service/user.service';

@Component({
  selector: 'app-manage-notes',
  templateUrl: './manage-notes.component.html',
  styleUrls: ['./manage-notes.component.scss']
})
export class ManageNotesComponent implements OnInit {

  userService:UserService
  constructor(userService:UserService) {
    this.userService=userService;
  }
  notes:any[]
  type:string='active'

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(){
    this.userService
    .getNotes()
    .subscribe(
      response => {this.notes=response['data']['data']},
      error => console.log(error)
    );
  }
}
