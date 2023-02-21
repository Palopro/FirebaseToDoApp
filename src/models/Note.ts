export class Note {
  private _id: string;
  private _title: string;
  private _note: string;
  private _createdAt: Date;

  constructor(id: string, title: string, note: string, createdAt: Date) {
    this._id = id;
    this._title = title;
    this._note = note;
    this._createdAt = createdAt;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get note(): string {
    return this._note;
  }

  set note(value: string) {
    this._note = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }
}
