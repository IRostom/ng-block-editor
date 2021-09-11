import { Note, Type } from '../../interfaces/note.interface';

export const FIRST_NOTE: Note = {
  title: {
    title: 'First Note',
    order: 0,
    level: 0,
    type: { name: Type.NOTE_TITLE, type: null },
  },
  bullets: [
    {
      title: 'Hello, this is the first header entry in the note',
      order: 1,
      level: 1,
      type: { name: Type.TEXT, type: null },
    },
    {
      title: 'Hello, this is the first text entry in the note',
      order: 1,
      level: 1,
      type: { name: Type.TEXT, type: null },
    },
    {
      title: 'Hello, this is the first entry in the note',
      order: 1,
      level: 1,
      type: { name: Type.TEXT, type: null },
    },
    {
      title: 'Hello, this is the first entry in the note',
      order: 1,
      level: 1,
      type: { name: Type.TEXT, type: null },
    },
  ],
};
