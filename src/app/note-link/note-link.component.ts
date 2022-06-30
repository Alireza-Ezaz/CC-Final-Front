import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-note-link',
  templateUrl: './note-link.component.html',
  styleUrls: ['./note-link.component.css']
})
export class NoteLinkComponent implements OnInit {
  public link = '';

  constructor(private router: Router,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.currentLinkSource.subscribe(link => {
      if (link) {
        this.link = link;
      }
    });
  }

}
