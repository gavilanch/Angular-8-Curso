import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  baseURLUsers = environment.apiURL + 'users/';
  baseURLPosts = environment.apiURL + 'posts/';
  constructor(private http: HttpClient) { }
 
  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseURLUsers);
  }
 
  obtenerPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseURLPosts);
  }
 
  obtenerPostsPorUsuario(id: string): Observable<Post[]> {
    const url = `${this.baseURLPosts}?userId=${id}`;
    return this.http.get<Post[]>(url);
  }
 }
 
