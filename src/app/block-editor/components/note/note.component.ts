import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../../interfaces/note.interface';
import { NoteQuery } from '../../state/note.query';
import { NoteService } from '../../state/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  note$: Observable<Note> | undefined;

  constructor(private noteService: NoteService, private noteQuery: NoteQuery) {}

  ngOnInit(): void {
    this.note$ = this.noteQuery.note$;
  }
}
