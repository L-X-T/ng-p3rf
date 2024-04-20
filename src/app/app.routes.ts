import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';

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
    // children: flightRoutes,
    loadChildren: () => import('./flights/flights.routes'),
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
