import type { Routes } from '@angular/router';
import { childrenRoutes } from '~/app/app.children.routes';

export const appRootRoutes: Routes = [
  {
    path: 'login',
    title: '登录',
    loadComponent: () => import('~/app/pages/login/login.component'),
  },
  {
    path: '',
    redirectTo: 'dashboard/demo',
    pathMatch: 'full',
  },
  {
    path: '',
    title: 'layout',
    loadComponent: () => import('~/app/layout/layout.component'),
    children: childrenRoutes,
  },
];
