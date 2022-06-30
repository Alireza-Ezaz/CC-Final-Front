import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NoteDTO} from "../models/NoteDTO";


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {

  }

  requestRead(link: string): Observable<any> {
    return this.http.get<any>('/requestRead/' + link);
  }

  read(link: string): Observable<any> {
    return this.http.put<string>('/read/' + link, {});
  }

  create(note: string): Observable<HttpEvent<any>> {
    return this.http.post <HttpEvent<any>>('/create', {'noteBody': note});
  }
}
