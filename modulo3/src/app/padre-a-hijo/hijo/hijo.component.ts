import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  // @Input()
  // textoHijo: string;

  private _textoHijo: string;

  @Input()
  set textoHijo(value: string) {
    value = value || '';
    this._textoHijo = value.toUpperCase();
  }

  get textoHijo() {return this._textoHijo;}
}
