import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { BoardsService } from '../services/boards.service';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.css']
})
export class ListHeaderComponent {
  @ViewChild('listTitle')
  titleTextArea: ElementRef;
  isEditingTitle = false;
  @Input()
  list: any;
  @Input()
  boardId: string;
  @Input()
  index: number;
  @Output()
  listDeleted = new EventEmitter<number>();
  constructor(private boardsService: BoardsService) { }

  titleClicked() {
    this.isEditingTitle = true;
    setTimeout(() => {
      this.titleTextArea.nativeElement.focus();
      this.titleTextArea.nativeElement.select();
    }, 0);
  }

  editListTitle(title: string) {
    this.isEditingTitle = false;
    if (title === this.list.title) {
      return;
    }
    this.list.title = title;
    this.boardsService.updateList(this.boardId, this.list);
  }

  focusInTitle($event) {
    $event.target.select();
  }

  deleteList() {
    if (!confirm('Are you sure you want to delete the list?')) {
      return;
    }

    this.boardsService.deleteList(this.boardId, this.list.id).then(() => this.listDeleted.emit(this.index));

  }
}
