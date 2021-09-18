import { List, Note, Type } from '../../interfaces/note.interface';

export const FIRST_NOTE: Note = {
  title: {
    order: 0,
    type: Type.NOTE_TITLE,
    data: {
      text: 'First Note',
    },
  },
  bullets: [
    {
      order: 1,
      type: Type.TEXT,
      data: {
        text: 'Hello, this is the first text entry in the note',
      },
    },
    {
      order: 1,
      type: Type.LIST,
      data: {
        text: 'Hello, this is an ordered list item',
        style: List.UNORDERED,
        items: [
          {
            order: 1,
            type: Type.LIST,
            data: {
              text: 'Hello, this is an indented ordered list item',
              style: List.UNORDERED,
              items: [
                {
                  order: 1,
                  type: Type.LIST,
                  data: {
                    text: 'Hello, this is an indented ordered list item',
                    style: List.UNORDERED,
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      order: 1,
      type: Type.LIST,
      data: {
        text: 'Hello, this is a numbered list item',
        style: List.NUMBERED,
        listOrder: 1,
      },
    },
    {
      order: 1,
      type: Type.LIST,
      data: {
        text: 'Hello, this is a numbered list item',
        style: List.NUMBERED,
        listOrder: 2,
      },
    },
    {
      order: 1,
      type: Type.LIST,
      data: {
        text: 'Hello, this is a numbered list item',
        style: List.NUMBERED,
        listOrder: 3,
      },
    },
    {
      order: 1,
      type: Type.LIST,
      data: {
        text: 'Hello, this is a check list item',
        checked: true,
        style: List.CHECK,
      },
    },
    {
      order: 1,
      type: Type.LIST,
      data: {
        text: 'Hello, this is a check list item',
        checked: false,
        style: List.CHECK,
      },
    },
  ],
};
