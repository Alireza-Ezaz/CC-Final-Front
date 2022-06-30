import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {

  }

  private linkSource = new BehaviorSubject<string>(null);
  currentLinkSource = this.linkSource.asObservable();

  changeCurrentLink(link: string) {
    this.linkSource.next(link);
  }
}
