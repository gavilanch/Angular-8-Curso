import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion-demo',
  templateUrl: './interpolacion-demo.component.html',
  styleUrls: ['./interpolacion-demo.component.css']
})
export class InterpolacionDemoComponent {
  direccion = 'Avenida siempreviva 742';
  persona = {
    nombre: 'Felipe',
    apellido: 'Gavilán'
  }

  duplicarTexto(valor: string): string {
    return valor + valor;
  }
}