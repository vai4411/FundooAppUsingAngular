import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private http: HttpClient) {  }

  postService(data,url: string,isRequired = false,header=null) {
    return this.http.post(url,data,isRequired && header);
  }

  getService(url:string,isRequired = false,header=null){
    return this.http.get(url,isRequired && header);
  }
}