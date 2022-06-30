import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {PNInterceptor} from './utilities/PNInterceptor';
import {RouterModule} from '@angular/router';
import { CreateNoteComponent } from './create-note/create-note.component';
import { ReadNoteComponent } from './read-note/read-note.component';
import { RequestReadComponent } from './request-read/request-read.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateNoteComponent,
    ReadNoteComponent,
    RequestReadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: 'create', component: CreateNoteComponent, pathMatch: 'full'},
        {path: 'read', component: ReadNoteComponent, pathMatch: 'full'},
        {path: 'requestRead', component: RequestReadComponent, pathMatch: 'full'},
        {path: '**', redirectTo: '/create', pathMatch: 'full'},
      ],
      {
        onSameUrlNavigation: 'reload',
      }
    ),
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PNInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
