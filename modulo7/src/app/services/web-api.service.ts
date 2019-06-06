import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Post } from '../models/post';

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
