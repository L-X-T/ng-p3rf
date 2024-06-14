import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  input,
  Input,
  isDevMode,
  model,
  OnChanges,
  OnDestroy,
  OnInit,
  output,
  Output,
} from '@angular/core';

import { DatePipe } from '@angular/common';

import { Flight } from '../../entities/flight';
import { CityPipe } from '../../pipes/city.pipe';
import { BlinkService } from '../../shared/blink.service';
import { FlightDatePipe } from '../shared/pipes/flight-date.pipe';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [DatePipe, CityPipe, FlightDatePipe],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightCardComponent implements OnChanges, OnInit, OnDestroy {
  debug = false;

  item = input.required<Flight>();
  selected = input(false);
  edit = output<void>();

  readonly datePipe = new DatePipe('en-US');

  private readonly blinkService = inject(BlinkService);
  private readonly elementRef = inject(ElementRef);

  ngOnChanges(): void {
    if (this.debug) {
      console.warn('[FlightCardComponent - ngOnChanges()]');
      console.log(this.item);
      console.log('selected: ' + this.selected);
    }
  }

  ngOnInit(): void {
    if (this.debug) {
      console.warn('[FlightCardComponent - ngOnInit()]');
      console.log(this.item);
      console.log('selected: ' + this.selected);
    }
  }

  ngOnDestroy(): void {
    if (this.debug) {
      console.warn('[FlightCardComponent - ngOnDestroy()]');
      console.log(this.item);
      console.log('selected: ' + this.selected);
    }
  }

  blink(): void {
    this.blinkService.blinkElementsFirstChild(this.elementRef);
  }
}
