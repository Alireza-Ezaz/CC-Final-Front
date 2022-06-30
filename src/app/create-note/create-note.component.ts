import {Component, OnInit} from '@angular/core';
import {RequestService} from "../services/request.service";

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  note;

  constructor(private requestService: RequestService) {
  }

  ngOnInit(): void {
  }

  createNote() {
    this.requestService.create(this.note).subscribe(res => {
      this.note = '';
    });
  }

}
