import { Component, computed, signal } from '@angular/core';
import { CommentAppListComponent } from '../../components/comment-app-list/comment-app-list.component';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { Comment } from '../models/comment';
import { CommentsFacadeService } from '../services/comments/comments-facade.service';

@Component({
  selector: 'app-comment-app-container',
  standalone: true,
  imports: [AddCommentComponent, CommentAppListComponent],
  template: `
    <div class="app-container">
      <app-add-comment (commentAdded)="commentAdded($event)" />
      <app-comment-app-list
        [comments]="comments()"
        (updateComment)="updateComment($event)"
      />
      <p>Number of comments: {{ numberOfComments() }}</p>
      <p>Number of saved comments: {{ numberOfSavedComments() }}</p>
    </div>
  `,
  styleUrl: './comment-app-container.component.scss',
})
export class CommentAppContainerComponent {
  public comments = this.commentsFacadeService.comments;
  // niestety isEqual nie uruchamia się, kiedy parametry wewnątrz array się niezgadzają
  public numberOfSavedComments = signal(0);
  public numberOfComments = computed(() => {
    return this.comments().length;
  });

  constructor(private readonly commentsFacadeService: CommentsFacadeService) {
    this.commentsFacadeService.fetchComments();
  }

  public commentAdded(comment: Comment): void {
    this.commentsFacadeService.addComment(comment);
  }

  public updateComment(comment: Comment): void {
    // to się uruchamia zawsze!
    if (comment.saved) {
      this.commentsFacadeService.saveComment(comment);
    } else {
      this.removeComment(comment);
    }
    this.numberOfSavedComments.set(
      this.comments().filter((c) => c.saved).length,
    );
  }

  private removeComment(removedComment: Comment): void {
    this.commentsFacadeService.removeComment(removedComment);
  }
}
