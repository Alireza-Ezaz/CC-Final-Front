import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestReadComponent } from './request-read.component';

describe('RequestReadComponent', () => {
  let component: RequestReadComponent;
  let fixture: ComponentFixture<RequestReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
