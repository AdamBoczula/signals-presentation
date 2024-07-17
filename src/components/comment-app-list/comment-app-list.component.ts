import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { Comment } from '../../app/models/comment';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-comment-app-list',
  standalone: true,
  imports: [CommonModule, CommentComponent],
  template: `
    <app-comment
      *ngFor="let comment of comments()"
      [comment]="comment"
      (onToggle)="onToggle($event)"
    />
  `,
  styleUrl: './comment-app-list.component.scss',
})
export class CommentAppListComponent {
  @Output()
  public updateComment = new EventEmitter<Comment>();
  comments = input.required<Comment[]>();

  public onToggle(comment: Comment): void {
    // to jest najgorsze, że to się uruchamia
    this.updateComment.emit(comment);
  }
}
