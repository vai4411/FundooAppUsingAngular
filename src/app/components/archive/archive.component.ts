import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user_service/user.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  private userService:UserService
  public notes: any[]

  constructor(userService:UserService) {
    this.userService = userService;
   }

  ngOnInit(): void {
    this.userService
    .getArchiveNotes()
    .subscribe(
      response => {this.notes=response['data']['data'];
      console.log("array:"+this.notes)},
      error => console.log(error)
    );
  }
}
