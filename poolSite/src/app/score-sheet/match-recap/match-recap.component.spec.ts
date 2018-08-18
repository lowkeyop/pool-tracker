import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchRecapComponent } from './match-recap.component';

describe('MatchRecapComponent', () => {
  let component: MatchRecapComponent;
  let fixture: ComponentFixture<MatchRecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchRecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
