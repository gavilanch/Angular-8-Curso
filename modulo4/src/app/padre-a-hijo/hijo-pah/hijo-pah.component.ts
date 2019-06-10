import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hijo-pah',
  templateUrl: './hijo-pah.component.html',
  styleUrls: ['./hijo-pah.component.css']
})
export class HijoPahComponent {
  @Input()
  textoHijo: string;
 
}
