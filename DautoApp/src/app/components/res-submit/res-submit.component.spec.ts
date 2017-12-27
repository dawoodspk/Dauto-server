import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResSubmitComponent } from './res-submit.component';

describe('ResSubmitComponent', () => {
  let component: ResSubmitComponent;
  let fixture: ComponentFixture<ResSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
