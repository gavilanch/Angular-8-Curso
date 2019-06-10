import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/comunicacion-service.service';

@Component({
  selector: 'nieto-b-lej',
  templateUrl: './nieto-b-lej.component.html',
  styleUrls: ['./nieto-b-lej.component.css']
})
export class NietoBLejComponent {

  mensaje: string;
 constructor(private servicioComunicacion: ComunicacionService) {}

 ngOnInit(): void {
   this.servicioComunicacion.enviarMensajeObservable.subscribe(response => {
     this.mensaje = response;
   });
 }

 cambioTexto(mensaje: string) {
   this.servicioComunicacion.enviarMensaje(mensaje);
 }
}
