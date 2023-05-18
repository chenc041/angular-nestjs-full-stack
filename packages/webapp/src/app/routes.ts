import { Routes } from '@angular/router';

import LayoutComponent from './common/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    title: '登录',
    loadComponent: () => import('./common/login/login.component'),
  },
  {
    path: '',
    title: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        title: 'dashboard',
        data: {
          iconName: 'appstore',
        },
        children: [
          {
            path: 'demo',
            title: 'dashboard - 1',
            data: {
              iconName: 'appstore',
            },
            loadComponent: () => import('./core/dashboard/dashboard.component'),
          },
        ],
      },
      {
        path: 'table',
        title: '表单',
        data: {
          iconName: 'setting',
        },
        loadComponent: () => import('./core/dashboard/dashboard.component'),
      },
    ],
  },
];
