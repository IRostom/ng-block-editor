import { Note, SubType, Type } from '../../interfaces/note.interface';

export const FIRST_NOTE: Note = {
  title: {
    title: 'First Note',
    order: 0,
    level: 0,
    type: { name: Type.NOTE_TITLE, subType: null },
  },
  bullets: [
    {
      title: 'Hello, this is the first header entry in the note',
      order: 1,
      level: 1,
      type: { name: Type.TEXT, subType: null },
    },
    {
      title: 'Hello, this is the first text entry in the note',
      order: 1,
      level: 1,
      type: { name: Type.UNORDERED_LIST, subType: null },
    },
    {
      title: 'Hello, this is the first unordered list in the note',
      order: 1,
      level: 1,
      type: { name: Type.TODO_LIST, subType: SubType.TODO_LIST_UNCHECKED },
    },
    {
      title: 'Hello, this is the first entry in the note',
      order: 1,
      level: 1,
      type: { name: Type.TODO_LIST, subType: SubType.TODO_LIST_CHECKED },
    },
  ],
};
