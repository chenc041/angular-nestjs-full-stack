import { Routes } from '@angular/router';
import { demo } from '~/utils';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '**',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
  },
];
