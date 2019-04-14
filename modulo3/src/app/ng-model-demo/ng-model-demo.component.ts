import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-demo',
  templateUrl: './ng-model-demo.component.html',
  styleUrls: ['./ng-model-demo.component.css']
})
export class NgModelDemoComponent {
  texto: string;

  hacerMayusculas() {
    this.texto = this.texto.toUpperCase();
  }

  hacerMinusculas() {
    this.texto = this.texto.toLowerCase();
  }
}
