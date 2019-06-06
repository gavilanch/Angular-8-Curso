import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosListadoComponent } from './usuarios-listado/usuarios-listado.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';

@NgModule({
  declarations: [
    UsuariosComponent,
    UsuariosListadoComponent,
    UsuarioDetalleComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
