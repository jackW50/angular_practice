import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPracticeComponent } from './button-practice.component';

describe('ButtonPracticeComponent', () => {
  let component: ButtonPracticeComponent;
  let fixture: ComponentFixture<ButtonPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
