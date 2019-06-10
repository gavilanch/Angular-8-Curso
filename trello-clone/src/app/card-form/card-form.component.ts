import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  @ViewChild('cardText')
  cardText: ElementRef;
  @Output()
  cancel = new EventEmitter<void>();
  @Output()
  add = new EventEmitter<any>();
  @Input()
  index: number;

  ngOnInit() {
    this.cardText.nativeElement.focus();
  }

  addCard(cardText: string) {
    this.add.emit({ cardText, index: this.index });
    this.cardText.nativeElement.value = '';
    this.cardText.nativeElement.focus();
  }

  cardTextChange(event, text: string) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.addCard(text);
    }
  }

  handleCancelClick() {
    this.cancel.emit();
  }
}
