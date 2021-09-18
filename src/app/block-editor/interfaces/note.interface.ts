export interface Note {
  bullets: Array<Bullet>;
  title: Bullet;
}

export interface Bullet {
  id?: number;
  type: Type;
  order: number;
  data: Data;
  // title: string;
  // level: number;
}

export interface Data {
  text: string; // bullet content
  level?: number; // for headers
  // subtype: SubType;
  style?: List; // for lists
  listOrder?: number; // for numbered list
  items?: Array<Bullet>;
  checked?: boolean; // for checklist
}

// export interface BulletType {
//   name: Type;
//   subType: SubType | null;
// }

export enum Type {
  TEXT,
  // CHECK_LIST,
  LIST,
  HEADER,
  NOTE_TITLE,
}

export enum List {
  NUMBERED,
  UNORDERED,
  CHECK,
}
