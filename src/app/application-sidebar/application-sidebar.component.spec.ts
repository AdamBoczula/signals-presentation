import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationSidebarComponent } from './application-sidebar.component';

describe('ApplicationSidebarComponent', () => {
  let component: ApplicationSidebarComponent;
  let fixture: ComponentFixture<ApplicationSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
