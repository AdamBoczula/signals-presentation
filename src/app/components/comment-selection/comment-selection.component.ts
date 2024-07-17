import { Component, model } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faFlag as farFlag } from '@fortawesome/free-regular-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-comment-selection',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <div class="icon-container" (click)="toggleSelect()">
      <fa-icon [icon]="[selected() ? 'fas' : 'far', 'flag']" />
    </div>
  `,
  styleUrl: './comment-selection.component.scss',
})
export class CommentSelectionComponent {
  selected = model.required<boolean>();

  constructor(library: FaIconLibrary) {
    library.addIcons(faFlag, farFlag);
  }

  public toggleSelect(): void {
    this.selected.update((prev) => !prev);
  }
}
