import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightValidationErrorsComponent } from './flight-validation-errors.component';

describe('FlightValidationErrorsComponent', () => {
  let component: FlightValidationErrorsComponent;
  let fixture: ComponentFixture<FlightValidationErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightValidationErrorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightValidationErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
