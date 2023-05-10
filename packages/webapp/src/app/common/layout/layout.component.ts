import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-layout',
  standalone: true,
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
  imports: [RouterOutlet, NzDropDownModule, NzIconModule],
})
export default class LayoutComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
