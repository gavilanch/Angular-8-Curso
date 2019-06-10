import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'firebase';
import { BoardsService } from '../services/boards.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material';
import { CardEditComponent } from '../card-edit/card-edit.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  displayListComposer = false;
  user: User;
  boardId: string;
  board: any;
  lists: any[] = [];

  @ViewChild('listTitle')
  inputList: ElementRef;

  constructor(
    private boardsService: BoardsService,
    private route: ActivatedRoute,
    private router: Router,
    private afAuth: AngularFireAuth,
    private dialog: MatDialog) { }

  ngOnInit() {
    const paramMap = this.route.snapshot.paramMap;
    if (!paramMap.has('id')) {
      this.router.navigate(['/boards']);
    }

    this.boardId = paramMap.get('id');

    this.afAuth.user.subscribe(user => {
      if (user) {
        this.user = user;
        this.loadBoardData();
        this.loadLists();
      }
    });
  }

  loadBoardData() {
    this.boardsService.getBoard(this.user.uid, this.boardId).subscribe(response => {
      this.board = response.data();
      this.board.id = response.id;
    })
  }

  deleteBoard() {
    if (!confirm('Are you sure you want to delete this board?')) {
      return;
    }

    this.boardsService.deleteBoard(this.boardId).then(() => this.router.navigate(['/boards']));

  }

  loadLists() {
    this.boardsService.getLists(this.boardId).subscribe(response => {
      this.lists = [];
      response.docs.forEach(value => {
        const lista = value.data();
        lista.id = value.id;
        this.lists.push(lista);
      });
    });
  }

  displayCreateListForm() {
    this.displayListComposer = true
    setTimeout(() => {
      this.inputList.nativeElement.focus();
    }, 0);
  }

  changeTitleList(event, texto: string) {
    if (event.keyCode === 13) {
      this.addList(texto);
    }
  }

  addList(texto: string) {
    const list: any = {
      title: texto,
      order: this.lists.length,
      cards: [],
    };
    this.lists.push(list);
    this.boardsService.addList(this.boardId, list).then(response => {
      list.id = response.id;
    });
    if (this.inputList) {
      this.inputList.nativeElement.value = '';
      this.inputList.nativeElement.focus();
    }
  }

  listDeleted(index: number) {
    this.lists.splice(index, 1);
  }

  dropList(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.lists, event.previousIndex, event.currentIndex);
    this.markOrderInArray(this.lists);
    this.boardsService.updateLists(this.boardId, this.lists);
  }

  markOrderInArray(arr: any[]) {
    arr.forEach((value, index) => value.order = index);
  }

  displayCardForm(index: number) {
    this.lists[index].displayComposer = true;
  }

  addCard({ cardText, index }) {
    this.lists[index].cards.push(cardText);
    this.boardsService.updateList(this.boardId, this.lists[index]);
    this.displayCardForm(index);
  }

  dropCard(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      const index = event.container.id;
      this.boardsService.updateList(this.boardId, this.lists[index]);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      const previousIndex = event.previousContainer.id;
      const index = event.container.id;
      const listToUpdate = [this.lists[previousIndex], this.lists[index]];
      this.boardsService.updateLists(this.boardId, listToUpdate);
    }
  }

  getConnectedList(): any[] {
    return this.lists.map(x => `${x.order}`);
  }

  cardClicked(index: number, list: any, cardText: string) {
    this.dialog.open(CardEditComponent, {
      width: '300px',
      data: { boardId: this.boardId, index: index, list: list, cardText: cardText }
    });
  }



}
