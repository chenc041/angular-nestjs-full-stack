import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent implements OnInit {
  @Input() icon?: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.icon, 'icon');
  }
}
