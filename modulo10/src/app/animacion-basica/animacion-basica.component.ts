import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animacion-basica',
  templateUrl: './animacion-basica.component.html',
  styleUrls: ['./animacion-basica.component.css'],
  animations: [
    trigger('animacionCuadro', [
      state('estado1', style({
        backgroundColor: 'red',
        width: '100px',
        height: '100px'
      })),
      state('estado2', style({
        backgroundColor: 'blue',
        width: '150px',
        height: '150px'
      })),
      transition('estado1 => estado2', [
        animate(1000, style({backgroundColor: 'blue'})),
        animate(500, style({width: '150px'})),
        animate(1500, style({height: '150px'}))
      ]
      ), 
      transition('estado2 => estado1', [
        animate(1000, style({backgroundColor: 'red'})),
        animate(500, style({width: '100px'})),
        animate(1500, style({height: '100px'}))
      ])
    ])
  ]
})
export class AnimacionBasicaComponent implements OnInit {
 estadoCuadro = 'estado1';
  constructor() { }

  ngOnInit() {
  }

  animar(){
    this.estadoCuadro = this.estadoCuadro === 'estado1' ? 'estado2' : 'estado1';
  }

}
