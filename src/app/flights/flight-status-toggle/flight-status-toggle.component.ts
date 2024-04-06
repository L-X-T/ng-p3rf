import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-flight-status-toggle',
  standalone: true,
  templateUrl: './flight-status-toggle.component.html',
})
export class FlightStatusToggleComponent {
  @Input({ required: true }) status = false;
  @Output() statusChange = new EventEmitter<boolean>();

  onToggle(): void {
    this.statusChange.emit(!this.status);
  }
}
