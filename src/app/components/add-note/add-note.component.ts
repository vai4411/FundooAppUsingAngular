import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user_service/user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  isDataPresent:boolean = false

  addNote = new FormGroup({
    title: new FormControl(''),
    note: new FormControl('')
  })

  userService:UserService
  constructor(userService:UserService) {
    this.userService=userService;
  }

  ngOnInit(): void {
  }

  setFlag(value:boolean){
    this.isDataPresent = value;
  }

  addNotes(){
    let data={
      title:this.addNote.value["title"],
      description:this.addNote.value["note"],
      sPined: false,
      color: "#FFFFFF",
      isArchived: false,
      labelIdList: [],
      reminder:"",
      collaberators: []
    }

    this.userService
    .addNotes(data)
    .subscribe(
      response => {
        if(response['status']['success']){
          console.log("success");
          this.setFlag(false);
          this.addNote.reset();
          this.userService
          .getNotes()
          .subscribe(
            response => console.log(response),
            error => console.log(error)
          );
        }
      },
      error => console.log(error)
    )
  }
}
