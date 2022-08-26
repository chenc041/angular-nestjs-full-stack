import { Routes } from '@angular/router';
import { LayoutComponent } from '~/app/layout/layout.component';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
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
