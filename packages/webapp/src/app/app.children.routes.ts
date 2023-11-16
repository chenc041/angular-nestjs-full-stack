import type { Routes } from '@angular/router';

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
        title: 'child',
        data: {
          icon: 'appstore',
        },
        loadComponent: () => import('~/app/pages/dashboard/dashboard.component'),
      },
    ],
  },
  {
    path: 'table',
    title: '表单',
    data: {
      icon: 'setting',
    },
    loadComponent: () => import('~/app/pages/dashboard/dashboard.component'),
  },
  {
    path: '404',
    title: '404',
    data: {
      hideInMenu: true,
    },
    loadComponent: () => import('~/app/exception/not-found.component'),
  },
  {
    path: '500',
    title: '500',
    data: {
      hideInMenu: true,
    },
    loadComponent: () => import('~/app/exception/server-error.component'),
  },
];
