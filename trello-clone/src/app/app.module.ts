import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

import {MaterialModule} from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BoardsComponent } from './boards/boards.component';
import { BoardCreateComponent } from './board-create/board-create.component';
import { BoardComponent } from './board/board.component';
import { MenuComponent } from './menu/menu.component';
import { BoardTitleComponent } from './board-title/board-title.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { CardFormComponent } from './card-form/card-form.component';
import { CardEditComponent } from './card-edit/card-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoardsComponent,
    BoardCreateComponent,
    BoardComponent,
    MenuComponent,
    BoardTitleComponent,
    ListHeaderComponent,
    CardFormComponent,
    CardEditComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [BoardCreateComponent, CardEditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
