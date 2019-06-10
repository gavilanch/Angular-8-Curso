import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BoardCreateComponent } from '../board-create/board-create.component';
import { BoardsService } from '../services/boards.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Board } from '../models/board';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  user: User;
  boards: Board[];
  constructor(private dialog: MatDialog,
    private boardsService: BoardsService,
    private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.user.subscribe(user => {
      if (user) {
        this.user = user;
        this.loadUserData();
      }
    })
  }

  addBoard() {
    const dialogRef = this.dialog.open(BoardCreateComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.reload) {
        this.loadUserData();
      }
    });
  }

  loadUserData() {
    this.boardsService.getBoards(this.user.uid).subscribe(response => {
      this.boards = [];
      response.docs.forEach(value => {
        const data = value.data();
        const id = value.id;
        const board: Board = {
          title: data.title,
          uid: data.uid,
          id
        };
        this.boards.push(board);
      });
    });
  }

}
