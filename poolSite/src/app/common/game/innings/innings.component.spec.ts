import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InningsComponent } from './innings.component';

describe('InningsComponent', () => {
  let component: InningsComponent;
  let fixture: ComponentFixture<InningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
