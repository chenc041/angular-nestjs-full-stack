import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    title: '登录',
    loadComponent: () => import('./common/login/login.component'),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    title: 'layout',
    loadComponent: () => import('./common/layout/layout.component'),
    children: [
      {
        path: 'dashboard',
        title: 'dashboard',
        data: {
          icon: 'setting',
        },
        children: [
          {
            path: 'demo',
            title: '大屏展示',
            data: {
              icon: 'appstore',
            },
            loadComponent: () => import('./core/dashboard/dashboard.component'),
          },
        ],
      },
      {
        path: 'table',
        title: '表单',
        data: {
          icon: 'setting',
        },
        loadComponent: () => import('./core/dashboard/dashboard.component'),
      },
    ],
  },
];
