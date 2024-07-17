import { Injectable, Signal, signal } from '@angular/core';
import { isEqual } from 'lodash';
import { Comment, SAVED_COMMENTS } from '../../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  public comments = signal<Comment[]>([], {
    equal: (a, b) => {
      console.log('🚀 ~ CommentsService ~ isEqual(a, b):', isEqual(a, b));

      return isEqual(a, b);
    },
  });

  public fetchComments(): Signal<Comment[]> {
    this.comments.set(this.getSavedComments());
    return this.comments;
  }

  public addComment(newComment: Comment): void {
    this.comments.set([...this.comments(), newComment]);
  }

  public getSavedComments(): Comment[] {
    const savedComments = JSON.parse(
      localStorage.getItem(SAVED_COMMENTS) || '[]',
    );
    return savedComments;
  }

  public saveComment(savedComment: Comment): void {
    const savedComments = this.getSavedComments();
    const updatedComments = [
      ...savedComments.filter((c) => c.id !== savedComment.id),
    ];
    updatedComments.push(savedComment);
    localStorage.setItem(SAVED_COMMENTS, JSON.stringify(updatedComments));
  }

  public removeComment(removedComment: Comment): void {
    const savedComments = this.getSavedComments();
    const updatedComments = [
      ...savedComments.filter((c) => c.id !== removedComment.id),
    ];
    localStorage.setItem(SAVED_COMMENTS, JSON.stringify(updatedComments));
  }
}
