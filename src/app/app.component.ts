import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <h1>Dropdown</h1>

    <div class="container">
      <pre>Form Control Value: {{ browser.value | json }}</pre>
    </div>

    <b-dropdown [formControl]="browser" placeholder="Choose browser">
      <ng-container *bSelectMatch="let selected">
        <i class="fa fa-{{selected?.icon}}"></i> {{selected?.title}}
      </ng-container>

      <ng-container *ngFor="let browser of browsers;">
        <ng-container *bSelectOption="browser">
          <i class="fa fa-{{browser.icon}}"></i> {{browser.title}}
        </ng-container>
      </ng-container>

    </b-dropdown>
  `
})
export class AppComponent {
  browser = new FormControl();
  browsers = [
    {
      id: 1,
      title: 'Chrome',
      icon: 'chrome'
    },
    {
      id: 2,
      title: 'Firefox',
      icon: 'firefox'
    },
    {
      id: 3,
      title: 'Edge',
      icon: 'edge'
    }
  ];

  constructor() {

  }


}
