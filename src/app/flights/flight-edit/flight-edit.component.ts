import { Component, inject, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Observable } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

import { pattern } from '../../shared/global';

import { FlightService } from '../flight.service';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'app-flight-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './flight-edit.component.html',
})
export class FlightEditComponent implements OnChanges {
  flight$?: Observable<Flight>;
  @Input() flight?: Flight;

  id?: number;
  showDetails = false;
  message = '';
  pattern = pattern;
  editForm!: FormGroup;

  private readonly DEBOUNCE_MS = 250;
  private readonly DELAY_MS = 3_000;
  private readonly fb = inject(FormBuilder);
  private readonly flightService = inject(FlightService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  constructor() {
    this.setupEditForm();

    this.editForm.valueChanges
      .pipe(
        debounceTime(this.DEBOUNCE_MS),
        distinctUntilChanged((a, b) => a.id === b.id && a.from === b.from && a.to === b.to && a.date === b.date),
        takeUntilDestroyed(),
      )
      .subscribe((value) => {
        console.log(value);
      });

    this.flight$ = this.route.paramMap.pipe(
      tap((paramMap: ParamMap) => {
        this.id = Number(paramMap.get('id'));
        this.showDetails = paramMap.get('showDetails') === 'true';
      }),
      switchMap((paramMap: ParamMap) => this.flightService.findById('' + paramMap.get('id'))),
    );

    this.flight$.pipe(takeUntilDestroyed()).subscribe({
      next: (flight) => {
        this.flight = flight;
        this.patchFormValue();
        this.message = 'Success loading!';
      },
      error: (errResponse) => {
        if (this.showDetails) {
          console.error(errResponse);
        }
        this.message = 'Error Loading!';
      },
    });
  }

  ngOnChanges(): void {
    this.patchFormValue();
  }

  onSave(): void {
    this.message = 'Is saving ...';

    const flightToSave: Flight = this.editForm.value;

    this.flightService
      .save(flightToSave)
      .pipe(delay(this.DELAY_MS))
      .subscribe({
        next: (flight) => {
          // console.warn('FlightEditComponent - onSave()');
          // console.log(flight);
          this.flight = flight;
          this.patchFormValue();
          this.message = 'Success saving! Navigating ...';

          setTimeout(() => this.router.navigate(['/flights/flight-search']), this.DELAY_MS);
        },
        error: (errResponse) => {
          console.error(errResponse);
          this.message = 'Error saving!';
        },
      });
  }

  private setupEditForm(): void {
    this.editForm = this.fb.group({
      id: [0, Validators.required],
      from: [
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(15),
            Validators.pattern(this.pattern),
          ],
          updateOn: 'blur',
        },
      ],
      to: [
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(15),
            Validators.pattern(this.pattern),
          ],
          updateOn: 'blur',
        },
      ],
      date: ['', [Validators.required, Validators.minLength(33), Validators.maxLength(33)], []],
    });
  }

  private patchFormValue(): void {
    if (this.editForm && this.flight) {
      this.editForm.patchValue(this.flight);
    }
  }
}
