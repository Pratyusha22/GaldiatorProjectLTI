import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpassengerdetailsComponent } from './enterpassengerdetails.component';

describe('EnterpassengerdetailsComponent', () => {
  let component: EnterpassengerdetailsComponent;
  let fixture: ComponentFixture<EnterpassengerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpassengerdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpassengerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
