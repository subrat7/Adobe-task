import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }


  getStaticContent(): Observable<User[]> {
    return this.http.get<User[]>('/assets/twitter-search.json');
  }
}
