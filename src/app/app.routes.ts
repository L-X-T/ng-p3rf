import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';

import flightRoutes from './flights/flights.routes';

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
    children: flightRoutes,
    // loadChildren: () => import('./flights/flights.routes').then((f) => f.flightBookingRoutes),
  },

  /*{
    path: '**',
    redirectTo: '',
  },*/
];
