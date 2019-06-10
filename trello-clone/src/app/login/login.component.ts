import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage = '';

  constructor(public afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.ngZone.run(() => {
          this.router.navigate(['/boards']);
        })
      }
    })
  }

  createUser(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['/boards']);
    }).catch(response => {
      this.errorMessage = response.message;
    });
  }

  signIn(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['/boards']);
    }).catch(response => {
      this.errorMessage = response.message;
    });
  }

}
