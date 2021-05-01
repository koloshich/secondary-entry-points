import { Component, Injector, OnInit } from '@angular/core';
import { ClientFunction } from 'mam-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'secondary-entry-points';

  buttons = [];

  constructor(private injector: Injector) {
  }

  ngOnInit() {
  }

  trackByFn(index, item) {
    return index;
  }
}
