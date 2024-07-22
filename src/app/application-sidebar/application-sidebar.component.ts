import { CommonModule } from '@angular/common';
import { Component, input, model, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuModel } from '../menu.model';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-application-sidebar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div
      [ngClass]="{
        'menu-container': true,
        expand: isOpened(),
        collapsed: !isOpened(),
      }"
    >
      <div class="menu-item-wrapper" *ngFor="let menuItem of menuModel()">
        <fa-icon [icon]="menuItem.icon"></fa-icon>
        <p *ngIf="isOpened()">{{ menuItem.text }}</p>
      </div>
      <div class="expand-icon-wrapper" (click)="toggleMenu()">
        <fa-icon [ngClass]="{ rotate180: isOpened() }" [icon]="expandIcon" />
      </div>
    </div>
  `,
  styleUrl: './application-sidebar.component.scss',
})
export class ApplicationSidebarComponent {
  isOpened = model.required<boolean>();
  menuModel = input.required<MenuModel[]>();
  expandIcon = faAnglesRight;

  public toggleMenu(): void {
    this.isOpened.update((prev) => !prev);
  }
}
