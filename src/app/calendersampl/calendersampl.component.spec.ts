import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendersamplComponent } from './calendersampl.component';

describe('CalendersamplComponent', () => {
  let component: CalendersamplComponent;
  let fixture: ComponentFixture<CalendersamplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendersamplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendersamplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
