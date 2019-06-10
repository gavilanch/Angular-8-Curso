import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hijo-pah',
  templateUrl: './hijo-pah.component.html',
  styleUrls: ['./hijo-pah.component.css']
})
export class HijoPahComponent {
  // Ejemplo 1.
  // @Input()
  // textoHijo: string;

  // Ejemplo 2.
  private _textoHijo: string;

  @Input()
  set textoHijo(value: string) {
    value = value || '';
    this._textoHijo = value.toUpperCase();
  }

  get textoHijo() { return this._textoHijo; }
}
