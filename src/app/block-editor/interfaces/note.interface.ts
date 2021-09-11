export interface Note {
  bullets: Array<Bullet>;
  title: Bullet;
}

export interface Bullet {
  id?: number;
  title: string;
  order: number;
  level: number;
  type: BulletType;
}

export interface BulletType {
  name: Type;
  type: SubType | null;
}

export enum Type {
  TEXT,
  NUMBERED_LIST,
  UNORDERED_LIST,
  TODO_LIST,
  HEADER,
  NOTE_TITLE,
}

export enum SubType {
  TODO_LIST_CHECKED,
  TODO_LIST_UNCHECKED,
  HEADER_H1,
  HEADER_H2,
  HEADER_H3,
}
