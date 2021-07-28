import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerInfoComponent } from './jobseeker-info.component';

describe('JobseekerInfoComponent', () => {
  let component: JobseekerInfoComponent;
  let fixture: ComponentFixture<JobseekerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseekerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
