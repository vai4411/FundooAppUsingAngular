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
      response => {this.notes=response['data']['data'];
      console.log("array:"+this.notes)},
      error => console.log(error)
    );
  }

    archiveOrDeleteNote(noteId){
    let data;
    if(noteId['type']==='archieve')
    {
      data={
        isArchived: true,
        noteIdList: [noteId['id']]
      }
      this.userService
      .archiveNote(data)
      .subscribe(
        response => {console.log(response);
          this.getNotes();
        },
        error => console.log(error)
      )
    }
    else{
      data={
        isDeleted: true,
        noteIdList: [noteId['id']]
      }
      this.userService
      .deleteNote(data)
      .subscribe(
        response => {console.log(response);
          this.getNotes();
        },
        error => console.log(error)
      )
    }
  }
}
