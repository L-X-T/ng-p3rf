import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideImageKitLoader } from '@angular/common';
import { provideRouter, withPreloading } from '@angular/router';

import { quicklinkProviders, QuicklinkStrategy } from 'ngx-quicklink';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideImageKitLoader('https://ik.imagekit.io/LXT'),
    provideRouter(
      appRoutes,
      // withDebugTracing(),
      // withEnabledBlockingInitialNavigation()
      // withPreloading(PreloadAllModules),
      withPreloading(QuicklinkStrategy),
    ),
    quicklinkProviders,
  ],
};
