import { Component } from '@angular/core';

@Component({
  selector: 'app-application-sidebar',
  standalone: true,
  imports: [],
  template: ` <p>Application sidebar works!</p> `,
  styleUrl: './application-sidebar.component.scss',
})
export class ApplicationSidebarComponent {
  public ngOnDestroy() {
    console.log('🚀 ~ ApplicationSidebarComponent ~ ngOnDestroy ');
  }
}
