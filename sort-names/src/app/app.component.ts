import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <app-list-names></app-list-names>
  `,
  styles: []
})
export class AppComponent {
  title = 'sort-names';
}
