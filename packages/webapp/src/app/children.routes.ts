import { Routes } from '@angular/router';

export const childrenRoutes: Routes = [
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
];
