import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
})
export class NoteDetailsComponent implements OnInit {
  constructor(private notesService: NotesService, private router: Router) {}

  // Properties
  public note!: Note;

  // On noteForm submit
  onSubmit(form: NgForm): void {
    this.notesService.add(form.value);
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    this.note = new Note();
  }
}
