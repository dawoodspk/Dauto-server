import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRentcarComponent } from './admin-rentcar.component';

describe('AdminRentcarComponent', () => {
  let component: AdminRentcarComponent;
  let fixture: ComponentFixture<AdminRentcarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRentcarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRentcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
