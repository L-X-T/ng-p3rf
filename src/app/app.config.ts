import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(
      appRoutes,
      // withDebugTracing(),
      // withEnabledBlockingInitialNavigation()
    ),
  ],
};
