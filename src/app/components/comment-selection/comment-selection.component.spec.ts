import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSelectionComponent } from './comment-selection.component';

describe('CommentSelectionComponent', () => {
  let component: CommentSelectionComponent;
  let fixture: ComponentFixture<CommentSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
