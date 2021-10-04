import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatconfirmationComponent } from './seatconfirmation.component';

describe('SeatconfirmationComponent', () => {
  let component: SeatconfirmationComponent;
  let fixture: ComponentFixture<SeatconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatconfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
