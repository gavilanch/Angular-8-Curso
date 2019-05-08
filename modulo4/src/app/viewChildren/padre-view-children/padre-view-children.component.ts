import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { HijoViewChildrenComponent } from '../hijo-view-children/hijo-view-children.component';

@Component({
  selector: 'padre-view-children',
  templateUrl: './padre-view-children.component.html',
  styleUrls: ['./padre-view-children.component.css']
})
export class PadreViewChildrenComponent implements AfterViewInit {
  
  arr = [1, 2, 3];

  @ViewChildren(HijoViewChildrenComponent)
  hijos: QueryList<HijoViewChildrenComponent>;

  ngAfterViewInit(): void {
    this.hijos.changes.subscribe((componentes: QueryList<HijoViewChildrenComponent>) => {
      componentes.forEach(componente => {

      })
    });
  }

  agregar() {
    this.arr.push(this.arr.length + 1);
  }

  remover() {
    this.arr.pop();
  }

  voltearColor(index: number) {
    if (!index) { return; }
    const componente = this.hijos.toArray()[index];
    componente.voltearColor();
  }

  voltearColores(){
    this.hijos.forEach((componente: HijoViewChildrenComponent) => {
      componente.voltearColor();
    });
  }


}
