import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-panico',
  templateUrl: './boton-panico.component.html',
  styleUrls: ['./boton-panico.component.css']
})
export class BotonPanicoComponent implements OnInit {

  enviado = false;
  constructor(private router: Router) { }

  cerrar() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }


  ngOnInit() {
  }

}
