import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'webapp';
  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/v1/example/current/user').subscribe(console.log);
  }
}
