import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-nieto-b-s',
  templateUrl: './nieto-b-s.component.html',
  styleUrls: ['./nieto-b-s.component.css']
})
export class NietoBSComponent implements OnInit {
  mensaje: string;
  constructor(private servicioComunicacion: ComunicacionService) { }

  ngOnInit() {
    this.servicioComunicacion.enviarMensajeObservable.subscribe(mensaje => {
      this.mensaje = mensaje;
    });
  }

  cambioTexto(mensaje: string) {
    this.servicioComunicacion.enviarMensaje(mensaje);
  }

}
