import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, Routes } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CommonModule, Location } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { childrenRoutes } from '~/app/routes';
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

  menus: Routes = childrenRoutes || [];

  constructor(private readonly location: Location) {
  }

  ngOnInit(): void {
    console.log(this.location.path(), 'location');
  }
}
