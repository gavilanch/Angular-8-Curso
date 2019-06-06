import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PostsComponent } from './posts/posts.component';
import { BotonPanicoComponent } from './boton-panico/boton-panico.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'panico', component: BotonPanicoComponent, outlet: 'popup'},
  {path: 'login', component: LoginComponent},
  {path: 'contacto', component: ContactoComponent, canDeactivate: [CanDeactivateGuard]},
  {path: '', redirectTo: '/usuarios', pathMatch: 'full'},
  { path: "**", redirectTo: '/usuarios', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
