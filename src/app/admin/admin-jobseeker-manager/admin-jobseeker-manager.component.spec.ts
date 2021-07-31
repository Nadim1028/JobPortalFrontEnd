import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobseekerManagerComponent } from './admin-jobseeker-manager.component';

describe('AdminJobseekerManagerComponent', () => {
  let component: AdminJobseekerManagerComponent;
  let fixture: ComponentFixture<AdminJobseekerManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminJobseekerManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJobseekerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
