import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCarFormComponent } from './buy-car-form.component';

describe('BuyCarFormComponent', () => {
  let component: BuyCarFormComponent;
  let fixture: ComponentFixture<BuyCarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
