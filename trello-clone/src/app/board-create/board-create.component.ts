import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { BoardsService } from '../services/boards.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Board } from '../models/board';

@Component({
  selector: 'app-board-create',
  templateUrl: './board-create.component.html',
  styleUrls: ['./board-create.component.css']
})
export class BoardCreateComponent implements OnInit {
  user: User;
  title: string;
  constructor(public dialogRef: MatDialogRef<BoardCreateComponent>,
    private boardsService: BoardsService,
    private afAuth : AngularFireAuth) { }
 

  ngOnInit() {
    this.afAuth.user.subscribe(user => this.user = user);
  }

  createBoard() {
    const board: Board = {
      title: this.title,
      uid: this.user.uid
    }

    this.boardsService.saveBoard(board).then(() => this.dialogRef.close({reload: true}));    
  }

  close() {
    this.dialogRef.close({reload: false});
  }

}
