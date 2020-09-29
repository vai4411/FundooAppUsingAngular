import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/service/user_service/user.service';

@Component({
  selector: 'app-archive-button',
  templateUrl: './archive-button.component.html',
  styleUrls: ['./archive-button.component.scss']
})
export class ArchiveButtonComponent implements OnInit {

  userService:UserService
  constructor(userService:UserService) {
    this.userService = userService;
   }

  @Input() noteId;

  ngOnInit(): void {
  }

  passNoteId(){
    let data={
      isArchived: true,
      noteIdList: [this.noteId]
    }
    this.userService
    .archiveNote(data)
    .subscribe(
      response => {console.log(response);
      },
      error => console.log(error)
    )
  }
}
