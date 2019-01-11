import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-demo',
  templateUrl: './property-binding-demo.component.html',
  styleUrls: ['./property-binding-demo.component.css']
})
export class PropertyBindingDemoComponent implements OnInit {

  imagenURL: string;

  ngOnInit(): void {
    this.imagenURL = (<HTMLInputElement>document.getElementById('selectImagen')).value;
  }
}
