import { Component, OnInit } from '@angular/core';
import { PuedeDesactivar } from '../can-deactivate.guard';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit, PuedeDesactivar {
  
  enviado = false;
  mensaje: string;
  constructor() { }

  enviar() {
    alert('mensaje enviado: ' + this.mensaje);
    this.enviado = true;
  }

  permitirSalirDeRuta(): boolean | import("rxjs").Observable<boolean> | Promise<boolean> 
  {
    if (!this.mensaje || this.enviado){
      return true;
    }

    const confirmacion = window.confirm('¿Quieres salir del formulario y perder los cambios realizados?');
    return confirmacion;
  }


  ngOnInit() {
  }

}
