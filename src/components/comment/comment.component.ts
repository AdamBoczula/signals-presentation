import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  Output,
  signal,
  SimpleChanges,
} from '@angular/core';
import { CommentSelectionComponent } from '../../app/components/comment-selection/comment-selection.component';
import { Comment } from '../../app/models/comment';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommentSelectionComponent, CommonModule],
  template: `
    <app-comment-selection [(selected)]="selected" />
    <div class="comment-container">
      <p>{{ comment.text }}</p>
    </div>
  `,
  styleUrl: './comment.component.scss',
})
export class CommentComponent implements OnChanges {
  @Input({ required: true })
  public comment!: Comment;
  public selected = signal(false);

  @Output()
  public onToggle = new EventEmitter<Comment>();

  constructor(private readonly injector: Injector) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['comment'].isFirstChange()) {
      this.selected.set(!!(changes['comment'].currentValue as Comment).saved);
      this.initEffect();
    }
  }

  public initEffect(): void {
    effect(
      () => {
        this.comment.saved = this.selected();
        this.onToggle.emit(this.comment);
      },
      { injector: this.injector },
    );
  }
}
