import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable()
export class PNInterceptor implements HttpInterceptor {

  DomainName = environment.production ? 'http://127.0.0.1:8080' : 'http://127.0.0.1:8080';
  constructor(private router: Router) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.handlePath(request));
  }

  // tslint:disable-next-line:typedef
  private handlePath(request: HttpRequest<any>) {
    return request.clone({
      url: this.DomainName + request.url,
    });
  }


}
