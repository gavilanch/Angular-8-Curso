import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/comunicacion-service.service';

@Component({
  selector: 'padre-lej',
  templateUrl: './padre-lej.component.html',
  styleUrls: ['./padre-lej.component.css']
})
export class PadreLejComponent {
  constructor(public comunicacionService: ComunicacionService) { }
}
