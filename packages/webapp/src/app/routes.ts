import { Routes } from '@angular/router';
import { LayoutComponent } from '~/app/common/layout/layout.component';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./common/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./core/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },
];
