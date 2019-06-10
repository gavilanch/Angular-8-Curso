import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/comunicacion-service.service';

@Component({
  selector: 'nieto-a-lej',
  templateUrl: './nieto-a-lej.component.html',
  styleUrls: ['./nieto-a-lej.component.css']
})
export class NietoALejComponent implements OnInit {
  mensaje: string;
  constructor(private servicioComunicacion: ComunicacionService) { }

  ngOnInit(): void {
    this.servicioComunicacion.enviarMensajeObservable.subscribe(response => {
      this.mensaje = response;
    });
  }

  cambioTexto(mensaje: string) {
    this.servicioComunicacion.enviarMensaje(mensaje);
  }

}
