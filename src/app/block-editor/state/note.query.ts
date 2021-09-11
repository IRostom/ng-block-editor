import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { NoteStore, NoteState } from './note.store';

@Injectable({ providedIn: 'root' })
export class NoteQuery extends Query<NoteState> {
  selectNoteTitle$ = this.select('title');
  selectNoteBullets$ = this.select('bullets');
  note$ = this.select();

  constructor(protected store: NoteStore) {
    super(store);
  }
}
