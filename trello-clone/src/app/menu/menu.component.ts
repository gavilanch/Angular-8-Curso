import { Component, OnInit, Input } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input()
  user: User;

  constructor(public afAuth: AngularFireAuth) { }

  logout() {
    this.afAuth.auth.signOut();
  }
}
