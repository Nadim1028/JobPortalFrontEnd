import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployerManagerComponent } from './admin-employer-manager.component';

describe('AdminEmployerManagerComponent', () => {
  let component: AdminEmployerManagerComponent;
  let fixture: ComponentFixture<AdminEmployerManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployerManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
