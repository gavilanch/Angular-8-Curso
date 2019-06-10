import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'hijo-hap',
  templateUrl: './hijo-hap.component.html',
  styleUrls: ['./hijo-hap.component.css']
})
export class HijoHapComponent {
  @Output()
  enviar: EventEmitter<string> = new EventEmitter<string>();
  textoHijo: string;
 
  botonClick() {
    this.enviar.emit(this.textoHijo);
  } 
}
