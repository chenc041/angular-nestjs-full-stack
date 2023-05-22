import { Routes } from '@angular/router';
import { routes } from '~/app/routes';

export const RoutesBase: Routes = [
  {
    path: 'login',
    title: '登录',
    loadComponent: () => import('./common/login/login.component'),
  },
  {
    path: '',
    redirectTo: 'dashboard/demo',
    pathMatch: 'full',
  },
  {
    path: '',
    title: 'layout',
    loadComponent: () => import('./common/layout/layout.component'),
    children: routes,
  },
];
