import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hijo2-her',
  templateUrl: './hijo2-her.component.html',
  styleUrls: ['./hijo2-her.component.css']
})
export class Hijo2HerComponent {
  @Input()
  textoHijo2: String;

}
