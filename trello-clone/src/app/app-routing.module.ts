import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { BoardsComponent } from './boards/boards.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  {path: 'boards', component: BoardsComponent},
  {path: 'boards/:id', component: BoardComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
