import { Component, OnInit,Input } from '@angular/core';
import { SubjectService } from 'src/app/service/data_behavior_subject/subject.service';
import { DataService } from 'src/app/service/data_service/data.service';
import { UserService } from 'src/app/service/user_service/user.service';

@Component({
  selector: 'app-manage-notes',
  templateUrl: './manage-notes.component.html',
  styleUrls: ['./manage-notes.component.scss']
})
export class ManageNotesComponent implements OnInit {

  userService:UserService;
  subject:SubjectService;

  constructor(userService:UserService,dataService:DataService,subject:SubjectService) {
    this.userService=userService;
    subject.currentMessage.subscribe(message => {
      this.getNotes();
    })
    dataService.getMessage().subscribe(message=>{
      this.getNotes();
    });
  }

  notes:any[]
  type:string='active'
  message:string;

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
