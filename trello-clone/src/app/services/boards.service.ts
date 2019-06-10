import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Board } from '../models/board';
import { List } from '../models/list';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {
  private readonly boards = 'boards';
  private readonly lists = 'lists';

  constructor(private db: AngularFirestore) { }

  getBoards(uid: string): Observable<firebase.firestore.QuerySnapshot> {
    return this.db
      .collection<any>(this.boards, ref => ref.where('uid', '==', uid)).get();
  }
  getBoard(uid: string, boardId: string) {
    return this.db.collection<any>(this.boards, ref => ref.where('uid', '==', uid)).doc(boardId).get();
  }
  saveBoard(board: Board): Promise<DocumentReference> {
    delete board.id;
    return this.db.collection(this.boards).add(board);
  }
  updateBoard(boardId: string, obj: any) {
    return this.db.collection(this.boards).doc(boardId).update(obj);
  }
  deleteBoard(boardId: string) {
    return this.db.collection(this.boards).doc(boardId).delete();
  }
  getLists(boardId: string): Observable<firebase.firestore.QuerySnapshot> {
    return this.db.collection<any>(this.boards).doc(boardId).collection(this.lists, ref => ref.orderBy('order', 'asc')).get();
  }
  addList(boardId: string, list: List) {
    delete list.displayComposer;
    return this.db.collection(this.boards).doc(boardId).collection(this.lists).add(list);
  }
  updateList(boardId: string, list: List) {
    delete list.displayComposer;
    return this.db.collection(this.boards).doc(boardId).collection(this.lists).doc(list.id).update(list);
  }
  updateLists(boardId: string, lists: List[]) {
    lists.forEach(list => delete list.displayComposer);
    var batch = this.db.firestore.batch();

    lists.forEach(list => {
      const ref = this.db.collection(this.boards).doc(boardId).collection(this.lists).doc(list.id).ref;
      batch.update(ref, list);
    });

    batch.commit();
  }
  deleteList(boardId: string, listId: string) {
    return this.db.collection(this.boards).doc(boardId).collection(this.lists).doc(listId).delete();
  }
}
