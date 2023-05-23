import { Routes } from '@angular/router';
import { childrenRoutes } from '~/app/children.routes';

export const routes: Routes = [
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
    children: childrenRoutes,
  },
];
