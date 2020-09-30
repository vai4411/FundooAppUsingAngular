import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user_service/user.service';

@Component({
  selector: 'app-color-panel',
  templateUrl: './color-panel.component.html',
  styleUrls: ['./color-panel.component.scss']
})
export class ColorPanelComponent implements OnInit {

  userService:UserService
  constructor(userService:UserService) {
    this.userService = userService;
   }

   @Input() noteId;

  ngOnInit(): void {
  }

  getColor(color:string){
    let data={
      color:color,
      noteIdList:[this.noteId]
    }
    this.userService
    .setColor(data)
    .subscribe(
      response => console.log(response),
      error => console.log(error)
      )
  }
}
