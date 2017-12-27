import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBuycarComponent } from './admin-buycar.component';

describe('AdminBuycarComponent', () => {
  let component: AdminBuycarComponent;
  let fixture: ComponentFixture<AdminBuycarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBuycarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuycarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
