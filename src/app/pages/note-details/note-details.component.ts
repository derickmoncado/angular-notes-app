import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
})
export class NoteDetailsComponent implements OnInit {
  constructor() {}

  // Properties
  public note!: Note;

  // On noteForm submit
  onSubmit(form: NgForm): void {
    // Save the note...
  }

  ngOnInit(): void {
    this.note = new Note();
  }
}
