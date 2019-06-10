import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/comunicacion-service.service';

@Component({
  selector: 'hijo-b-lej',
  templateUrl: './hijo-b-lej.component.html',
  styleUrls: ['./hijo-b-lej.component.css']
})
export class HijoBLejComponent {

  mensaje: string;
 constructor(private comunicacionService: ComunicacionService) { }

 recibirCambios() {
   this.mensaje = this.comunicacionService.mensaje;
 }


}
