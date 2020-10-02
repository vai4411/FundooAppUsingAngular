import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user_service/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data_service/data.service';
import { Subject } from 'rxjs';
import { SubjectService } from 'src/app/service/data_behavior_subject/subject.service';

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

  userService:UserService;
  router:Router;
  dataService:DataService;
  message:string;
  subject:SubjectService;

  constructor(userService:UserService,router:Router,subject:SubjectService) {
    this.userService=userService;
    this.router=router;
    this.subject=subject;
  }

  ngOnInit(): void {
    this.subject
    .currentMessage
    .subscribe(message => this.message = message);
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
          this.setFlag(false);
          this.addNote.reset();
          this.subject
          .changeMessage("data");
        }
      },
      error => console.log(error)
    )
  }
}
