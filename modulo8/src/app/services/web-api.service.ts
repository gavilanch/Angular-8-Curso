import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(private http: HttpClient) { }

  obtenerUsernames(): Observable<string[]> {
    var url = './assets/usernames.json';
    return this.http.get<string[]>(url);
  }
}
