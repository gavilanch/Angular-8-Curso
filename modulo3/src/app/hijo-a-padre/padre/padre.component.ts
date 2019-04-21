import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre-2',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  textoPadre: string;

  recibirMensaje(mensaje: string) {
    this.textoPadre = mensaje;
  }
}
