import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFileDescriptionComponent } from './list-file-description.component';

describe('ListFileDescriptionComponent', () => {
  let component: ListFileDescriptionComponent;
  let fixture: ComponentFixture<ListFileDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFileDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFileDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
