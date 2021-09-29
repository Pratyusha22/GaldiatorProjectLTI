import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HIreBusComponent } from './hire-bus.component';

describe('HIreBusComponent', () => {
  let component: HIreBusComponent;
  let fixture: ComponentFixture<HIreBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HIreBusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HIreBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
