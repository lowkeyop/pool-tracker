import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerWaitlistComponent } from './player-waitlist.component';

describe('PlayerWaitlistComponent', () => {
  let component: PlayerWaitlistComponent;
  let fixture: ComponentFixture<PlayerWaitlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerWaitlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerWaitlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
