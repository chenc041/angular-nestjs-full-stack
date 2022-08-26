import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
    `
      .menu {
        width: 280px;
        max-width: 280px;
        min-width: 280px;
      }
    `,
  ],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
