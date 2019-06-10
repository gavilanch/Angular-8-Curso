import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hijo1-her',
  templateUrl: './hijo1-her.component.html',
  styleUrls: ['./hijo1-her.component.css']
})
export class Hijo1HerComponent {
  @Output()
  textoCambiado: EventEmitter<string> = new EventEmitter<string>();
  cambioTexto(texto: string) {
    this.textoCambiado.emit(texto);
  }

}
