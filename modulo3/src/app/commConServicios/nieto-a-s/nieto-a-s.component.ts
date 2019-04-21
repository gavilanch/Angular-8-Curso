import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-nieto-a-s',
  templateUrl: './nieto-a-s.component.html',
  styleUrls: ['./nieto-a-s.component.css']
})
export class NietoASComponent implements OnInit {
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
