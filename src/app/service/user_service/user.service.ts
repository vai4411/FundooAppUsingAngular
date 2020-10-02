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
    .postService(data,`${this.baseUrl}user/login`);
  }

  addNotes(data) {
    return this.http
    .postService(data,`${this.baseUrl}notes/addNotes`,true,
    {headers: {'Authorization':localStorage.getItem('fundooUserToken')}});
  }

  getNotes() {
    return this.http
    .getService(`${this.baseUrl}notes/getNotesList`,true,
    {headers: {'Authorization':localStorage.getItem('fundooUserToken')}});
  }

  getArchiveNotes() {
    return this.http
    .getService(`${this.baseUrl}notes/getArchiveNotesList`,true,
    {headers: {'Authorization':localStorage.getItem('fundooUserToken')}});
  }

  getTranshNotes() {
    return this.http
    .getService(`${this.baseUrl}notes/getTrashNotesList`,true,
    {headers: {'Authorization':localStorage.getItem('fundooUserToken')}});
  }

  logout(data) {
    return this.http
    .postService(data,`${this.baseUrl}user/logout`,true,
    {headers: {'Authorization':localStorage.getItem('fundooUserToken')}});
  }

  archiveNote(data){
    return this.http
    .postService(data,`${this.baseUrl}notes/archiveNotes`,true,
    {headers: {'Authorization':localStorage.getItem('fundooUserToken')}});
  }

  deleteNote(data){
    return this.http
    .postService(data,`${this.baseUrl}notes/trashNotes`,true,
    {headers: {'Authorization':localStorage.getItem('fundooUserToken')}});
  }

  updateNote(data) {
    return this.http
    .postService(data,`${this.baseUrl}notes/updateNotes`,true,
    {headers: {'Authorization':localStorage.getItem('fundooUserToken')}});
  }

  setColor(data) {
    return this.http
    .postService(data,`${this.baseUrl}notes/changesColorNotes`,true,
    {headers: {'Authorization':localStorage.getItem('fundooUserToken')}});
  }
}
