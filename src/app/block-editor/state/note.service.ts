import { Injectable } from '@angular/core';
import { NoteStore } from './note.store';

@Injectable({ providedIn: 'root' })
export class NoteService {
  constructor(private noteStore: NoteStore) {}
}
