import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `<h1>{{ title() }}</h1>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = signal('Angular with Signal.');
}
