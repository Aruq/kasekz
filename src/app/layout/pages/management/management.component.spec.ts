import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManagementComponent } from './management.component';


describe('MissionValueComponent', () => {
  let component: ManagementComponent;
  let fixture: ComponentFixture<ManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ManagementComponent]
    });
    fixture = TestBed.createComponent(ManagementComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });


  it(`pathTree has default value`, () => {
    expect(component.pathTree).toEqual([
      {
        name: 'О Бирже'
      },
      {
        name: 'Руководство'
      }]);
  });




});
