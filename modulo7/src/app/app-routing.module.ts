import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'usuarios/:id/posts', component: PostsComponent},
  {path: 'posts', component: PostsComponent},
  {path: '', redirectTo: '/usuarios', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
