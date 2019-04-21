import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1-h',
  templateUrl: './hijo1-h.component.html',
  styleUrls: ['./hijo1-h.component.css']
})
export class Hijo1HComponent {

  @Output()
  textoCambiado: EventEmitter<string> = new EventEmitter<string>();

  cambioTexto(texto: string){
    this.textoCambiado.emit(texto);
  }
}
