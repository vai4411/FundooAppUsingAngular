import { Component, OnInit ,Inject,ViewEncapsulation} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from 'src/app/service/user_service/user.service';

export interface DialogData {
  title: string;
  description: string;
  noteId:string;
}

@Component({
  selector: 'app-note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.scss']
})
export class NoteDialogComponent implements OnInit {

  title:string
  description:string
  userService:UserService

  changeTitle(value){
    this.title=value
  }

  changeDescription(value){
     this.description=value
  }

  dialogRef: MatDialogRef<NoteDialogComponent>

  constructor(dialogRef: MatDialogRef<NoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, userService: UserService) {
      this.title=data.title;
      this.description=data.description;
      this.userService=userService
      this.dialogRef=dialogRef;
      dialogRef.beforeClosed().subscribe(() => { data.title=this.title; data.description=this.description;dialogRef.close(data)});
    }

  ngOnInit(): void {
  }

  updateNote(){
    let updatedData = {
      description:this.description,
      noteId:this.data.noteId,
      title:this.title
    }
    this.dialogRef.close(updatedData);
  }

}
