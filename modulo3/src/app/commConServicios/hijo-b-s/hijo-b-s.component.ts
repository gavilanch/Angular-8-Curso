import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-hijo-b-s',
  templateUrl: './hijo-b-s.component.html',
  styleUrls: ['./hijo-b-s.component.css']
})
export class HijoBSComponent implements OnInit {
  mensaje: string;
  constructor(public comunicacionService: ComunicacionService) { }

  ngOnInit() {
  }

  recibirCambios() {
    this.mensaje = this.comunicacionService.mensaje;
  }
}
