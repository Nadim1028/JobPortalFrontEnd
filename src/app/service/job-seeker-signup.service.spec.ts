import { TestBed } from '@angular/core/testing';

import { JobSeekerSignupService } from './job-seeker-signup.service';

describe('JobSeekerSignupService', () => {
  let service: JobSeekerSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobSeekerSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
