import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data_service/data.service';
import { UserService } from 'src/app/service/user_service/user.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  userService:UserService
  notes:any[]
  type:string='trash'

  constructor(userService:UserService,dataService:DataService) {
    this.userService = userService;
    dataService.getMessage().subscribe(message=>{
      this.getTrashNotes();
    });
   }

  ngOnInit(): void {
    this.getTrashNotes();
  }

  getTrashNotes(){
    this.userService
    .getTranshNotes()
    .subscribe(
      response => {this.notes=response['data']['data'];
      console.log("array:"+this.notes)},
      error => console.log(error)
    );
  }
}
