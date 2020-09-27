import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  isDrawerOpen:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.isDrawerOpen=!this.isDrawerOpen;
  }



}
