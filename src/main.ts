import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: '',
        loadComponent: () =>
          import('./app/components/child_1/child_1.component').then(
            (c) => c.Child1Component
          ),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./app/components/child_2/child_2.component').then(
                (c) => c.Child2Component
              ),
          },
        ],
      },
    ]),
  ],
}).catch((err) => console.error(err));
