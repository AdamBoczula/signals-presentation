import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { ApplicationSidebarComponent } from './application-sidebar/application-sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ApplicationSidebarComponent],
  template: `<h1>{{ title() }}</h1>
    <p>You are here {{ duration() }} seconds.</p>
    <p>==> {{ durationInHrs() | number: '1.2-2' }} minutes.</p>
    <app-application-sidebar *ngIf="duration() > 3 && duration() < 10" /> `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = signal('Angular with Signal.');
  public duration = signal(0);
  public durationInHrs = computed(() => this.duration() / 60);
  public intervalHandler;
  public timeoutHandler;

  constructor() {
    this.timeoutHandler = setTimeout(() => {
      this.title.set('This is New Angular Title for this page.');
    }, 3000);

    this.intervalHandler = setInterval(
      () => this.duration.update((prev) => prev + 1),
      1000,
    );

    effect(() => {
      // save on LocalStorage every change for duration().
      localStorage.setItem('timeInSec', this.duration() + '');

      // get from LocalStorage and print to the console.
      const seconds = localStorage.getItem('timeInSec');
      console.log('🍕 Logger function for duration: ', seconds);
    });
  }

  public ngOnDestroy() {
    console.log('🚀 ~ AppComponent ~ ngOnDestroy ~ ngOnDestroy:');
    clearTimeout(this.timeoutHandler);
    clearInterval(this.intervalHandler);
  }
}
