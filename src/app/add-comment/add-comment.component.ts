import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Comment } from '../models/comment';
import { v1 } from 'uuid';

@Component({
  selector: 'app-add-comment',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="newComment">
      <label for="name">Comment:</label>
      <input id="name" type="text" formControlName="text" required />

      <button (click)="publishComment()">Add comment</button>
    </form>
  `,
  styleUrl: './add-comment.component.scss',
})
export class AddCommentComponent {
  @Output() commentAdded = new EventEmitter<Comment>();
  public newComment = new FormGroup({ text: new FormControl('') });

  constructor() {}

  public publishComment(): void {
    if (this.newComment.valid) {
      const comment: Comment = {
        text: this.newComment.get('text')?.value ?? '',
        id: v1(),
      };

      this.commentAdded.emit(comment);
      this.newComment.reset();
    }
  }
}
