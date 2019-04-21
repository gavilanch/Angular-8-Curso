import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo2-h',
  templateUrl: './hijo2-h.component.html',
  styleUrls: ['./hijo2-h.component.css']
})
export class Hijo2HComponent implements OnInit {

  @Input()
  textoHijo2: string;
  constructor() { }

  ngOnInit() {
  }

}
