import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EightBallComponent } from './eight-ball.component';

describe('EightBallComponent', () => {
  let component: EightBallComponent;
  let fixture: ComponentFixture<EightBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EightBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EightBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
