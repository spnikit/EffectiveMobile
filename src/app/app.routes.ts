import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () =>
      import('./pages/main/main.component').then((mod) => mod.MainComponent),
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./pages/task-edit/task-edit.component').then(
        (mod) => mod.TaskEditComponent
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
