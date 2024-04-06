import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';

import flights from './flights/flights.routes';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'flights',
    children: flights,
    // loadChildren: () => import('./flights/flights.routes').then((f) => f.flightBookingRoutes),
  },

  {
    path: 'charts',
    component: ChartsComponent,
  },

  /*{
    path: '**',
    redirectTo: '',
  },*/
];
