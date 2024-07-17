import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentAppContainerComponent } from './comment-app-container.component';

describe('CommentAppContainerComponent', () => {
  let component: CommentAppContainerComponent;
  let fixture: ComponentFixture<CommentAppContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentAppContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentAppContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
