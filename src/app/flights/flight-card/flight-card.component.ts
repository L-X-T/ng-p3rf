import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  isDevMode,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { DatePipe } from '@angular/common';

import { Flight } from '../../entities/flight';
import { CityPipe } from '../../pipes/city.pipe';
import { BlinkService } from '../../shared/blink.service';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CityPipe, DatePipe],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightCardComponent implements OnChanges, OnInit, OnDestroy {
  debug = !isDevMode();

  @Input({ required: true }) item!: Flight;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();
  @Output() edit = new EventEmitter<void>();

  private readonly blinkService = inject(BlinkService);
  private readonly elementRef = inject(ElementRef);

  static getRandomCssColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

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

  onSelect(): void {
    if (this.debug) {
      console.warn('[FlightCardComponent - onSelect()]');
      console.log('selected: ' + true);
    }
    this.selectedChange.emit(true);
  }

  onDeselect(): void {
    if (this.debug) {
      console.warn('[FlightCardComponent - onDeselect()]');
      console.log('selected: ' + false);
    }
    this.selectedChange.emit(false);
  }

  blink(): void {
    this.blinkService.blinkElementsFirstChild(this.elementRef);
  }
}
