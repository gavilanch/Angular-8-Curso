import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'padre-hap',
  templateUrl: './padre-hap.component.html',
  styleUrls: ['./padre-hap.component.css']
})
export class PadreHapComponent {
  textoPadre: string;

  recibirMensaje(mensaje: string) {
    this.textoPadre = mensaje;
  }
}
