import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data_service/data.service';
import { UserService } from 'src/app/service/user_service/user.service';

@Component({
  selector: 'app-trash-button',
  templateUrl: './trash-button.component.html',
  styleUrls: ['./trash-button.component.scss']
})
export class TrashButtonComponent implements OnInit {

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
      isDeleted: true,
      noteIdList: [this.noteId]
    }
    this.userService
    .deleteNote(data)
    .subscribe(
      response => {
        this.dataService
        .sendMessage("data");
      },
      error => console.log(error)
    )
  }
}
