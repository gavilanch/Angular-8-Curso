import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-demo',
  templateUrl: './ng-for-demo.component.html',
  styleUrls: ['./ng-for-demo.component.css']
})
export class NgForDemoComponent {
  personas: any[] = [
    { nombre: "Felipe Gavilán", edad: 999 },
    { nombre: "Claudia Rodríguez", edad: 43 },
    { nombre: "Fernando Medina", edad: 23 },
    { nombre: "Milton Encarnación", edad: 53 }
  ];

}
