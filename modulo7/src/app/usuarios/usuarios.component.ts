import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebApiService } from '../services/web-api.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[];
  constructor(private router: Router,
    private webApiService: WebApiService) { }

  ngOnInit() {
    this.webApiService.obtenerUsuarios().subscribe((usuariosDelApi: Usuario[]) => this.usuarios = usuariosDelApi);
  }

  verPosts(idUsuario: number){
    this.router.navigate(['/usuarios', idUsuario, 'posts']);
  }

}
