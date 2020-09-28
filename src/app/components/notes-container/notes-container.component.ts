import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {

  constructor() { }

  @Input()
  notes: any[] ;

  @Input()
  type: string="active"

  ngOnInit(): void {
  }

}
