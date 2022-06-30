import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RequestService} from '../services/request.service';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-request-read',
  templateUrl: './request-read.component.html',
  styleUrls: ['./request-read.component.css']
})
export class RequestReadComponent implements OnInit {

  linkId = '';
  status;
  loading = true;

  constructor(private router: Router,
              private requestService: RequestService,
              private dataService: DataService) {
    console.log(router.url.split('/')[2]);
    this.linkId = router.url.split('/')[2];
  }

  ngOnInit(): void {
    this.checkIsAvailable();
  }

  // tslint:disable-next-line:typedef
  private checkIsAvailable() {
    this.loading = true;
    this.requestService.requestRead(this.linkId).subscribe(res => {
      if (res['status'] === 0) {
        this.status = 0;
      } else if (res['status'] === 1) {
        this.status = 1;
      } else if (res['status'] === 2) {
        this.status = 2;
      }
      this.loading = false;
      // this.dataService.changeCurrentLink(res['link'] as string);
    });
  }

  // tslint:disable-next-line:typedef
  goToReadPage() {
    this.dataService.changeCurrentLink(this.linkId as string);
    this.router.navigate(['read']);
  }

  // tslint:disable-next-line:typedef
  backHome() {
    this.router.navigate(['create']);
  }

}
