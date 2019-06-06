import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuarioLogueado = false;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.usuarioLogueado = this.authService.isLoggedIn('');
    this.authService.changeLoginStatus$.subscribe((loggedStatus: boolean) => {
      this.usuarioLogueado = loggedStatus;
    })
  }

  logout() {
    this.authService.logout();
  }


}
