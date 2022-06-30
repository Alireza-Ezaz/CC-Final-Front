import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteLinkComponent } from './note-link.component';

describe('NoteLinkComponent', () => {
  let component: NoteLinkComponent;
  let fixture: ComponentFixture<NoteLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
