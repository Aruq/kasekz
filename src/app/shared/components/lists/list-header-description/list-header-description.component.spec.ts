import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeaderDescriptionComponent } from './list-header-description.component';

describe('ListHeaderDescriptionComponent', () => {
  let component: ListHeaderDescriptionComponent;
  let fixture: ComponentFixture<ListHeaderDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHeaderDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHeaderDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
