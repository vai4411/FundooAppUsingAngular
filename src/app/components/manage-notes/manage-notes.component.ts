import { Component, OnInit,Input } from '@angular/core';
import { DataService } from 'src/app/service/data_service/data.service';
import { UserService } from 'src/app/service/user_service/user.service';

@Component({
  selector: 'app-manage-notes',
  templateUrl: './manage-notes.component.html',
  styleUrls: ['./manage-notes.component.scss']
})
export class ManageNotesComponent implements OnInit {

  userService:UserService;
  dataService:DataService;

  constructor(userService:UserService,dataService:DataService) {
    this.userService=userService;
    dataService.getMessage().subscribe(message=>{
      this.getNotes();
    });
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
