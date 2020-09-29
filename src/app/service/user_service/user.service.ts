import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpService } from '../http_service/http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpService) { }

  login(data) {
    return this.http
    .postService(data, this.baseUrl + 'user/login');
  }

  addNotes(data) {
    return this.http
    .postNoteService(data, this.baseUrl + 'notes/addNotes');
  }

  getNotes() {
    return this.http
    .getNotesService(this.baseUrl + 'notes/getNotesList');
  }

  getArchiveNotes() {
    return this.http
    .getNotesService(this.baseUrl + 'notes/getArchiveNotesList');
  }

  getTranshNotes() {
    return this.http
    .getNotesService(this.baseUrl + 'notes/getTrashNotesList');
  }

  logout(data) {
    return this.http
    .postNoteService(data,this.baseUrl + 'user/logout');
  }

  archiveNote(data){
    return this.http
    .postNoteService(data,this.baseUrl + 'notes/archiveNotes');
  }

  deleteNote(data){
    return this.http
    .postNoteService(data,this.baseUrl + 'notes/trashNotes');
  }
}
