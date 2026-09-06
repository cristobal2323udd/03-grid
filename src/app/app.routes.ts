import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./grilla/grilla.page').then((m) => m.GrillaPage),
  },
];
