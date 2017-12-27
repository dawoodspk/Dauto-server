import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserentryComponent } from './admin-userentry.component';

describe('AdminUserentryComponent', () => {
  let component: AdminUserentryComponent;
  let fixture: ComponentFixture<AdminUserentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
