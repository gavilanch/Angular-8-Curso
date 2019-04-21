import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-padre-s',
  templateUrl: './padre-s.component.html',
  styleUrls: ['./padre-s.component.css']
})
export class PadreSComponent implements OnInit {

  constructor(public comunicacionService: ComunicacionService) { }

  ngOnInit() {
  }

}
