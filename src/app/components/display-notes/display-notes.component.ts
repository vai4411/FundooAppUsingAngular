import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  constructor() { }

  @Input() notes: any[]
  @Output() noteId = new EventEmitter<any>();

  ngOnInit(): void {
  }

  passNoteId(id,type){
    let data={'id':id,'type':type};
    this.noteId.emit(data);
  }

}
