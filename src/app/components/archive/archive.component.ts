import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data_service/data.service';
import { UserService } from '../../service/user_service/user.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  private userService:UserService
  public notes: any[]
  type:string='archive'

  constructor(userService:UserService,dataService:DataService) {
    this.userService = userService;
    dataService.getMessage().subscribe(message=>{
      this.getArchiveNotes();
    });
   }

  ngOnInit(): void {
    this.getArchiveNotes();
  }

  getArchiveNotes(){
    this.userService
    .getArchiveNotes()
    .subscribe(
      response => {this.notes=response['data']['data'];
      console.log("array:"+this.notes)},
      error => console.log(error)
    );
  }
}
