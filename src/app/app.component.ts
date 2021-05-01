import { Component, Injector, OnInit } from '@angular/core';
import { ClientFunction } from 'mam-core';
import { ClientFunctionWrapper } from './functions/client-function.wrapper';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'secondary-entry-points';

  buttons: ClientFunction[] = [];

  functions = [new ClientFunctionWrapper('Aperture', this.injector)];

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.functions.forEach(func => {
      func.checkAvailability().subscribe(result => {
        if (result) {
          this.buttons.push(func);
        }
      });
    });
  }

  trackByFn(index, item) {
    return index;
  }
}
