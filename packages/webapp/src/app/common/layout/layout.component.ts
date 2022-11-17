import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  template: ` <router-outlet></router-outlet>`,
  styles: [
    `
      .menu {
        width: 280px;
        max-width: 280px;
        min-width: 280px;
      }
    `,
  ],
  imports: [RouterOutlet],
})
export default class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
