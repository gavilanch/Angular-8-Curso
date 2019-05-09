import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'padre-proyeccion',
  templateUrl: './padre-proyeccion.component.html',
  styleUrls: ['./padre-proyeccion.component.css']
})
export class PadreProyeccionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleClick(){
    alert('click');
  }

}
