import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevBookingComponent } from './prev-booking.component';

describe('PrevBookingComponent', () => {
  let component: PrevBookingComponent;
  let fixture: ComponentFixture<PrevBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
