import { Component, OnInit } from '@angular/core';
import { Route, RouterLink, RouterOutlet } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { routes } from '~/app/routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  imports: [RouterOutlet, NzDropDownModule, NzIconModule, NzToolTipModule, CommonModule, RouterLink],
})
export default class LayoutComponent implements OnInit {
  isCollapsed = false;

  menus: Route | undefined = routes
    .filter((item) => item.title && item.title === 'layout')
    .find((item) => {
      return !item.data || typeof item.data['hideInMenu'] === 'undefined';
    });

  constructor() {}

  ngOnInit(): void {
    console.log(this.menus?.children, 'menus');
  }
}
