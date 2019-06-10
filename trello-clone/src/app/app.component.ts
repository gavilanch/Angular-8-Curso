import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;
  constructor(private afAuth: AngularFireAuth,
    private router: Router, private zone: NgZone) {

  }

  ngOnInit(): void {
    this.afAuth.auth.onAuthStateChanged(user => {
      this.user = user;
      if (!user) {
        this.zone.run(() => {
          this.router.navigate(['']);
        });
      }
    });

  }

}
