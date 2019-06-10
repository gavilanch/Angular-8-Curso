import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { Board } from '../models/board';
import { BoardsService } from '../services/boards.service';

@Component({
  selector: 'app-board-title',
  templateUrl: './board-title.component.html',
  styleUrls: ['./board-title.component.css']
})
export class BoardTitleComponent {
  isEditingBoardTitle = false;
  @Input()
  board: Board;
  @ViewChild('boardTitleInput')
  boardTitleInput: ElementRef;
  constructor(private boardsService: BoardsService) { }

  boardTitleClicked() {
    this.isEditingBoardTitle = true;
    setTimeout(() => {
      this.boardTitleInput.nativeElement.focus();
      this.boardTitleInput.nativeElement.select();
    }, 0);
  }

  boardTitleInputFocusOut() {
    this.isEditingBoardTitle = false;
    this.boardsService.updateBoard(this.board.id, this.board);
  }
}
