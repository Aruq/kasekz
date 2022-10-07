import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrpButtonV1Component } from './drp-button-v1.component';

describe('DrpButtonV1Component', () => {
  let component: DrpButtonV1Component;
  let fixture: ComponentFixture<DrpButtonV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrpButtonV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrpButtonV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
