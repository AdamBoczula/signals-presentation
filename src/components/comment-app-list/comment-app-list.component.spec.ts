import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentAppListComponent } from './comment-app-list.component';

describe('CommentAppListComponent', () => {
  let component: CommentAppListComponent;
  let fixture: ComponentFixture<CommentAppListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentAppListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
