import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-2',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Output()
  enviar: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  enviarMayusculas: EventEmitter<string> = new EventEmitter<string>();
  textoHijo: string; 

  botonClick() {
    this.enviar.emit(this.textoHijo);
  }

  botonClickMayusculas(){
    this.enviarMayusculas.emit(this.textoHijo.toUpperCase());
  }
}
