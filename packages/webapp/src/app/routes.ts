import { Routes } from '@angular/router';

import LayoutComponent from './common/layout/layout.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./common/login/login.component'),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./core/dashboard/dashboard.component'),
      },
    ],
  },
];
