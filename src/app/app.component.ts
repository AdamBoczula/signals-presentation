import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBomb,
  faHouse,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';
import { ApplicationSidebarComponent } from './application-sidebar/application-sidebar.component';
import { MenuModel } from './menu.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ApplicationSidebarComponent, FontAwesomeModule],
  template: `
    <div class="app-container">
      <app-application-sidebar
        [(isOpened)]="isMenuOpen"
        [menuModel]="menuModel()"
      />

      <div class="app-content">
        <h1>{{ title() }}</h1>
        <p>You are here {{ duration() }} seconds.</p>
        <p>==> {{ durationInHrs() | number: '1.2-2' }} minutes.</p>

        <hr />

        <button (click)="expandMenu()">Expand menu</button>
        <button (click)="addSecretMenu()">Add secret menu</button>
      </div>
    </div>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = signal('Angular with Signal.');
  public duration = signal(0);
  public durationInHrs = computed(() => this.duration() / 60);
  public readonly menuModel = signal<MenuModel[]>(
    [
      { text: 'Home', icon: faHouse },
      { text: 'Cool things', icon: faBomb },
    ],
    {
      equal: (a, b) => {
        console.log('🚀 ~ AppComponent ~ b:', b);
        console.log('🚀 ~ AppComponent ~ a:', a);
        return a === b;
      },
    },
  );
  public isMenuOpen = signal(false);
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

    effect(() => {
      console.log('🎉🎉CHANGED MENU🎉🎉 ', this.menuModel());
    });
  }

  public expandMenu(): void {
    this.isMenuOpen.set(true);
  }

  public addSecretMenu(): void {
    this.menuModel.update((actualMenu) => {
      return [...actualMenu, { text: 'Secret Spot', icon: faUserSecret }];
    });
  }

  public ngOnDestroy() {
    console.log('🚀 ~ AppComponent ~ ngOnDestroy ~ ngOnDestroy:');
    clearTimeout(this.timeoutHandler);
    clearInterval(this.intervalHandler);
  }
}
