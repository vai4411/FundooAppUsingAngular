import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user_service/user.service';

@Component({
  selector: 'app-trash-button',
  templateUrl: './trash-button.component.html',
  styleUrls: ['./trash-button.component.scss']
})
export class TrashButtonComponent implements OnInit {

  userService:UserService
  constructor(userService:UserService) {
    this.userService = userService;
   }

  @Input() noteId;

  ngOnInit(): void {
  }

  passNoteId(){
    let data={
      isDeleted: true,
      noteIdList: [this.noteId]
    }
    this.userService
    .deleteNote(data)
    .subscribe(
      response => {console.log(response);
      },
      error => console.log(error)
    )
  }
}
