import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {RequestService} from '../services/request.service';

@Component({
  selector: 'app-read-note',
  templateUrl: './read-note.component.html',
  styleUrls: ['./read-note.component.css']
})
export class ReadNoteComponent implements OnInit {

  linkId;
  loading = true;
  body;
  status;
  constructor(private dataService: DataService,
              private requestService: RequestService) { }

  ngOnInit(): void {
    this.dataService.currentLinkSource.subscribe(link => {
      if (link) {
        this.linkId = link;
        this.read();
      }
    });
  }

  private read() {
    this.loading = true;
    this.requestService.read(this.linkId).subscribe(res => {
      if (res['status'] === 1){
        this.status = 1;
      }
     else if(res['status'] === 2){
        this.body = res['noteBody'];
        this.status = 2;
      }
      this.loading = false;
      // this.dataService.changeCurrentLink(res['link'] as string);
    });
  }


}
