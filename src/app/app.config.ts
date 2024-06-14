import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideImageKitLoader } from '@angular/common';
import { NoPreloading, provideRouter, withPreloading } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideImageKitLoader('https://ik.imagekit.io/LXT'),
    provideRouter(
      appRoutes,
      // withDebugTracing(),
      // withEnabledBlockingInitialNavigation()
      // withPreloading(PreloadAllModules),
      // withPreloading(QuicklinkStrategy),
      withPreloading(NoPreloading),
    ),
    // quicklinkProviders,
    provideClientHydration(withEventReplay()),
  ],
};
