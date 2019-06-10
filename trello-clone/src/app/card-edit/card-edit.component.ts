import { Component, Inject } from '@angular/core';
import { BoardsService } from '../services/boards.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent {
  cardText: string;
  list: any;
  index: number;
  boardId: string;

  constructor(public dialogRef: MatDialogRef<CardEditComponent>,
    private boardsService: BoardsService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.list = data.list;
    this.index = data.index;
    this.boardId = data.boardId;
    this.cardText = data.cardText;
  }

  deleteCard() {

    if (!confirm('Are you sure you want to delete this card?')) {
      return;
    }

    const cards = this.list.cards;
    cards.splice(this.index, 1);
    this.list.cards = cards;
    this.boardsService.updateList(this.boardId, this.list).then(() => this.dialogRef.close())
  }

  cardFocusout() {
    this.list.cards[this.index] = this.cardText;
    this.boardsService.updateList(this.boardId, this.list).then(() => () => this.dialogRef.close());
  }

  close() {
    this.dialogRef.close();
  }
}
