import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextsampleComponent } from './textsample.component';

describe('TextsampleComponent', () => {
  let component: TextsampleComponent;
  let fixture: ComponentFixture<TextsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
