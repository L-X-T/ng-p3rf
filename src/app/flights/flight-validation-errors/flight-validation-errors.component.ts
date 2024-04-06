import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-flight-validation-errors',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './flight-validation-errors.component.html',
  styleUrl: './flight-validation-errors.component.scss',
})
export class FlightValidationErrorsComponent {
  @Input({ required: true }) errors: ValidationErrors | null = null;
  @Input() fieldLabel = 'Field';
}
