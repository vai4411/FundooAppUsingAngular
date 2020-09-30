import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject = new Subject<any>();

  constructor() { }

  sendStatus(message: string) {
    this.subject.next({ text: message });
  }

  clearStatus() {
      this.subject.next();
  }

  getStatus(): Observable<any> {
      return this.subject.asObservable();
  }
}
