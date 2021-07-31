import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerUpdateComponent } from './jobseeker-update.component';

describe('JobseekerUpdateComponent', () => {
  let component: JobseekerUpdateComponent;
  let fixture: ComponentFixture<JobseekerUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseekerUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
