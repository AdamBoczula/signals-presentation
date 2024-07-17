import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CommentAppContainerComponent } from './comment-app-container/comment-app-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddCommentComponent, CommentAppContainerComponent],
  template: `
    <h1>Comment App!</h1>

    <app-comment-app-container />
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
