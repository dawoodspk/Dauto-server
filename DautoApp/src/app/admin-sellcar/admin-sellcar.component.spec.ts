import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSellcarComponent } from './admin-sellcar.component';

describe('AdminSellcarComponent', () => {
  let component: AdminSellcarComponent;
  let fixture: ComponentFixture<AdminSellcarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSellcarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSellcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
