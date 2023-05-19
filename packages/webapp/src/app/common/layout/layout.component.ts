import { Component, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Route,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { routes } from '~/app/routes';
import { CommonModule } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { ShortTextPipe } from '~/app/shared/pipes/short-text.pipe';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  imports: [
    RouterOutlet,
    NzDropDownModule,
    NzIconModule,
    NzToolTipModule,
    CommonModule,
    RouterLink,
    NzSpinModule,
    ShortTextPipe,
  ],
  styles: [
    `
      .menuWidth {
        min-width: 280px;
      }
    `,
  ],
})
export default class LayoutComponent implements OnInit {
  isLoading = false;
  isCollapsed = false;

  menus: Route | undefined = routes
    .filter((item) => item.title && item.title === 'layout')
    .find((item) => {
      return !item.data || typeof item.data['hideInMenu'] === 'undefined';
    });

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd || event instanceof NavigationError || event instanceof NavigationCancel) {
        this.isLoading = false;
      }
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }
    });
  }
}
