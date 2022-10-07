import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoverningBodiesComponent } from './governing-bodies.component';

describe('GoverningBodiesComponent', () => {
  let component: GoverningBodiesComponent;
  let fixture: ComponentFixture<GoverningBodiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoverningBodiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoverningBodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
