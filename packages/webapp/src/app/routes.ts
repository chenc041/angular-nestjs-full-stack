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
];


export const routes: Routes = [
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
