import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-demo',
  templateUrl: './event-binding-demo.component.html',
  styleUrls: ['./event-binding-demo.component.css']
})
export class EventBindingDemoComponent {

  cantidad = 0;

  incrementar() {
    this.cantidad++;
  }

  textoEscrito;
  onTextboxInput(event) {
    console.log(event);
    this.textoEscrito = event.target.value;
  }


}
