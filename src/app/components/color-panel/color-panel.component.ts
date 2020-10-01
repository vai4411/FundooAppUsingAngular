import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data_service/data.service';
import { UserService } from 'src/app/service/user_service/user.service';

@Component({
  selector: 'app-color-panel',
  templateUrl: './color-panel.component.html',
  styleUrls: ['./color-panel.component.scss']
})
export class ColorPanelComponent implements OnInit {

  userService:UserService;
  dataService:DataService;

  constructor(userService:UserService,dataService:DataService) {
    this.userService = userService;
    this.dataService = dataService;
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
      response => {
        this.dataService
        .sendMessage("data");
      },
      error => console.log(error)
      )
  }
}
