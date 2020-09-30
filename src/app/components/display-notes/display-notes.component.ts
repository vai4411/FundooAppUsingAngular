import { Component, Input, OnInit, Output, EventEmitter,ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user_service/user.service';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  userService:UserService

  constructor(public dialog: MatDialog,userService:UserService) {
    this.userService=userService;
  }

  @Input() notes: any[]
  @Input() type: string
  @Output() noteId = new EventEmitter<any>();
  noteData:any

  ngOnInit(): void {
  }

  passNoteId(id,type){
    this.noteData={'id':id,'type':type};
    this.noteId.emit(this.noteData);
  }

  evaluateType(note){
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

  openDialog(note){
    const dialogRef = this.dialog.open(NoteDialogComponent, {
      panelClass: 'myapp-no-padding-dialog',
      data: {'title': note.title, 'description': note.description,'noteId':note.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result['id']);

    this.userService
    .updateNote(result)
    .subscribe(
      response => {console.log(response);
     },
      error => console.log(error)
    );
    });
  }
}
