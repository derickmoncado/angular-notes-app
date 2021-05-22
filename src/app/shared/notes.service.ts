import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  // Properties
  public notes: Note[] = new Array<Note>();

  constructor() {}

  getAll(): any {
    return this.notes;
  }

  get(id: number): any {
    return this.notes[id];
  }

  getId(note: Note): any {
    return this.notes.indexOf(note);
  }

  add(note: Note): any {
    // this method will add a note to the notes array and return the id of the note
    // where the id = index
    const newLength = this.notes.push(note);
    const index = newLength - 1;
    return index;
  }

  update(id: number, title: string, body: string): void {
    const note = this.notes[id];
    note.title = title;
    note.body = body;
  }

  delete(id: number): void {
    this.notes.splice(id, 1);
  }
}
