import { Injectable, Signal } from '@angular/core';
import { Comment } from '../../models/comment';
import { CommentsService } from './comments.service';

@Injectable({
  providedIn: 'root',
})
export class CommentsFacadeService {
  public comments = this.commentsService.comments;

  constructor(private readonly commentsService: CommentsService) {}

  public fetchComments(): Signal<Comment[]> {
    return this.commentsService.fetchComments();
  }

  public addComment(newComment: Comment): void {
    return this.commentsService.addComment(newComment);
  }

  public saveComment(newComment: Comment): void {
    return this.commentsService.saveComment(newComment);
  }
  public removeComment(removedComment: Comment): void {
    return this.commentsService.removeComment(removedComment);
  }
}
