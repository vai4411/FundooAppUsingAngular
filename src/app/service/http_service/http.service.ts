import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private http: HttpClient) {  }

  postService(data,url: string) {
    return this.http.post(url,data);
  }

  postNoteService(data,url:string){
    return this.http.post(url,data,{
      headers: {'Authorization':localStorage.getItem('fundooUserToken')}});
  }

  getNotesService(url:string){
    return this.http.get(url,{
      headers: {'Authorization':localStorage.getItem('fundooUserToken')}});
  }
}