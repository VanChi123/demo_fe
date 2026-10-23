import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/ping/ping').then((m) => m.Ping) },
  { path: '**', redirectTo: '' },
];
