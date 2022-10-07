import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationDisclosureComponent } from './information-disclosure.component';

describe('InformationDisclosureComponent', () => {
  let component: InformationDisclosureComponent;
  let fixture: ComponentFixture<InformationDisclosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationDisclosureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
