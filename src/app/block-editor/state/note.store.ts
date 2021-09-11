import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Note } from '../interfaces/note.interface';
import { FIRST_NOTE } from '../utilities/defines/first-note';

export interface NoteState extends Note {}

export function createInitialState(): NoteState {
  return FIRST_NOTE;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'note' })
export class NoteStore extends Store<NoteState> {
  constructor() {
    super(createInitialState());
  }
}
