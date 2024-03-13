import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LocalStorageService } from './services/local-storage.service';
import { initTasks } from './utils/init-functions';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: initTasks,
      deps: [LocalStorageService],
    },
  ],
};
