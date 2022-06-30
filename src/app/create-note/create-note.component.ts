import {Component, OnInit} from '@angular/core';
import {RequestService} from '../services/request.service';
import {Router} from "@angular/router";
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  note;

  constructor(private requestService: RequestService,
              private router: Router,
              private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  createNote() {
    this.requestService.create(this.note).subscribe(res => {
      this.note = '';
      this.router.navigate(['noteLink']);
      this.dataService.changeCurrentLink(res['link'] as string);
    });
  }

}
