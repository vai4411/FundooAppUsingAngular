import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/service/data_service/data.service';
import { UserService } from 'src/app/service/user_service/user.service';

@Component({
  selector: 'app-archive-button',
  templateUrl: './archive-button.component.html',
  styleUrls: ['./archive-button.component.scss']
})
export class ArchiveButtonComponent implements OnInit {

  userService:UserService;
  dataService:DataService;

  constructor(userService:UserService,dataService:DataService) {
    this.userService = userService;
    this.dataService = dataService;
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
      response => {
        this.dataService
        .sendMessage("data");
      },
      error => console.log(error)
    )
  }
}
