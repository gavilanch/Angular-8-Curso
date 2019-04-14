import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-demo',
  templateUrl: './ng-if-demo.component.html',
  styleUrls: ['./ng-if-demo.component.css']
})
export class NgIfDemoComponent {
  dataCargada: any;
  ngOnInit() {
    setTimeout(() => {
      this.dataCargada = 'cargada!';
    }, 3000);
  }
}
