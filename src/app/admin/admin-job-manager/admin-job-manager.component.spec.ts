import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobManagerComponent } from './admin-job-manager.component';

describe('AdminJobManagerComponent', () => {
  let component: AdminJobManagerComponent;
  let fixture: ComponentFixture<AdminJobManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminJobManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJobManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
