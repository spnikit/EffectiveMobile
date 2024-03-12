import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./pages/task-details/task-details.component').then(
        (mod) => mod.TaskDetailsComponent
      ),
  },

  {
    path: 'main',
    loadComponent: () =>
      import('./pages/main/main.component').then((mod) => mod.MainComponent),
  },

  {
    path: 'create',
    loadComponent: () =>
      import('./pages/task-create/task-create.component').then(
        (mod) => mod.TaskCreateComponent
      ),
  },

  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },

  {
    path: '**',
    redirectTo: '/',
  },
];
