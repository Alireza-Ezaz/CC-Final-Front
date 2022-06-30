import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadNoteComponent } from './read-note.component';

describe('ReadNoteComponent', () => {
  let component: ReadNoteComponent;
  let fixture: ComponentFixture<ReadNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
