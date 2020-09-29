import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  constructor() { }

  @Input() notes: any[]
  @Input() type: string
  @Output() noteId = new EventEmitter<any>();

  ngOnInit(): void {
  }

  passNoteId(id,type){
    let data={'id':id,'type':type};
    this.noteId.emit(data);
  }

  evaluateType(note){
    console.log("Type:"+this.type)
    switch(this.type){
      case "active":
        return (!note.isArchived && !note.isDeleted);
      break;
      case "archive":
        return (note.isArchived && !note.isDeleted);
        break;
      case "trash":
        return (note.isDeleted);
        break;
    }
  }

}
