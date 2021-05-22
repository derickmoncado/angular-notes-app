import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  constructor(private notesService: NotesService) {}

  // Properties
  public notes: Note[] = new Array<Note>();

  ngOnInit(): void {
    this.notes = this.notesService.getAll();
  }
}
