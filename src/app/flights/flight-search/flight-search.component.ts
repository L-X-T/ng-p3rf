import { Component, computed, DestroyRef, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { BehaviorSubject, Observer } from 'rxjs';

import { pattern } from '../../shared/global';

import { Flight } from '../../entities/flight';
import { FlightService } from '../flight.service';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { FlightStatusToggleComponent } from '../flight-status-toggle/flight-status-toggle.component';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [CommonModule, FormsModule, FlightCardComponent, FlightStatusToggleComponent],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.scss',
})
export class FlightSearchComponent {
  from = 'Hamburg';
  to = 'Graz';

  minLength = 3;
  maxLength = 15;
  pattern = pattern;
  private readonly TEN_MINUTES = 10 * 1000 * 60;

  flights: Flight[] = []; // old school
  readonly flightsSubject = new BehaviorSubject<Flight[]>([]); // RxJS
  private readonly flightsSignal = signal<Flight[]>([]); // Signal
  private readonly anotherFlightsSignal = signal<Flight[]>([]); // Signal

  readonly computedSignal = computed(() => [...this.flightsSignal(), ...this.anotherFlightsSignal()]);

  basket: Record<number, boolean> = {
    3: true,
    5: true,
  };

  private readonly destroyRef = inject(DestroyRef);
  private readonly flightService = inject(FlightService);
  private readonly router = inject(Router);

  constructor() {
    effect(() => console.log('update: ', this.computedSignal()));

    if (this.from && this.to) {
      this.onSearch(); // auto search if default test values are set
    }
  }

  onSearch(): void {
    // 1. my observable
    const flights$ = this.flightService.find(this.from, this.to);

    // 2. my observer
    const flightsObserver: Observer<Flight[]> = {
      next: (flights) => {
        this.flights = flights;
        this.flightsSubject.next(flights);
        this.flightsSignal.set(flights);
        this.anotherFlightsSignal.set(flights);
      },
      error: (errResp) => console.error('Error loading flights', errResp),
      complete: () => {
        // console.log('flight$ completed');
      },
    };

    // 3. my subscription
    flights$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(flightsObserver);
  }

  onDelayFirstFlight(): void {
    // old school
    if (this.flights.length > 0) {
      const flightDate = new Date(this.flights[0].date);
      flightDate.setTime(flightDate.getTime() + this.TEN_MINUTES);

      // Mutable
      this.flights[0].date = flightDate.toISOString();

      // Immutable
      // ?
    }

    // RxJS
    if (this.flightsSubject.value.length > 0) {
      const flights = this.flightsSubject.value;
      const flightDate = new Date(flights[0].date);
      flightDate.setTime(flightDate.getTime() + this.TEN_MINUTES);

      // Mutable
      flights[0].date = flightDate.toISOString();

      // Immutable
      // flights[0] = { ...flights[0], date: flightDate.toISOString() };

      this.flightsSubject.next(flights);
    }

    // Signal
    if (this.flightsSignal().length > 0) {
      // Update
      this.flightsSignal.update((flights) => {
        const flightDate = new Date(flights[0].date);
        flightDate.setTime(flightDate.getTime() + this.TEN_MINUTES);

        // Mutable
        flights[0].date = flightDate.toISOString();

        // Immutable
        // flights[0] = { ...flights[0], date: flightDate.toISOString() };

        return flights;
      });

      this.anotherFlightsSignal.update((flights) => {
        const flightDate = new Date(flights[0].date);
        flightDate.setTime(flightDate.getTime() + this.TEN_MINUTES);

        // Mutable
        flights[0].date = flightDate.toISOString();

        // Immutable
        // flights[0] = { ...flights[0], date: flightDate.toISOString() };

        return flights;
      });
    }
  }

  onEdit(id: number): void {
    this.router.navigate(['/flights/flight-edit', id, { showDetails: true }]);
  }
}
