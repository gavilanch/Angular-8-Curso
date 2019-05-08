import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hijo-view-child',
  templateUrl: './hijo-view-child.component.html',
  styleUrls: ['./hijo-view-child.component.css']
})
export class HijoViewChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  mensaje: string;
  editarMensaje(mensaje: string) {
    this.mensaje = mensaje;
  }

}
