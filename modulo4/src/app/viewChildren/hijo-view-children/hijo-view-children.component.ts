import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hijo-view-children',
  templateUrl: './hijo-view-children.component.html',
  styleUrls: ['./hijo-view-children.component.css']
})
export class HijoViewChildrenComponent implements OnInit {
  colorCheck = true;
  constructor() { }

  ngOnInit() {
  }

  voltearColor() {
    this.colorCheck = !this.colorCheck;
  }

}
