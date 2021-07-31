import { TestBed } from '@angular/core/testing';

import { JobseekerLoginService } from './jobseeker-login.service';

describe('JobseekerLoginService', () => {
  let service: JobseekerLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobseekerLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
