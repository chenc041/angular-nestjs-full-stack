import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, Routes } from '@angular/router';
import { ShortTextPipe } from '~/app/shared/pipes/short-text.pipe';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { childrenRoutes } from '~/app/app.children.routes';
import { CommonModule } from '@angular/common';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  imports: [RouterOutlet, RouterLink, CommonModule, ShortTextPipe, NzToolTipModule, NzDropDownModule],
  providers: [],
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

  menus: Routes = childrenRoutes || [];

  constructor() {
  }

  ngOnInit() {
  }
}
