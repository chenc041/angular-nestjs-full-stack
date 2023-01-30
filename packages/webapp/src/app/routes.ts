import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./common/login/login.component'),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: '',
    loadComponent: () => import('./common/layout/layout.component'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./core/dashboard/dashboard.component'),
      },
    ],
  },
];
