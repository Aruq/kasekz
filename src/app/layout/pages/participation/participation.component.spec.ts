import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ParticipationComponent } from './participation.component';



describe('BoardComponent', () => {
  let component:ParticipationComponent;
  let fixture: ComponentFixture<ParticipationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ParticipationComponent]
    });
    fixture = TestBed.createComponent(ParticipationComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });


  it(`pathTree has default value`, () => {
    expect(component.pathTree).toEqual([
      {
        name: 'Торги'
      },
      {
        name: 'Финансовые инструменты'
      }]);
  });




});
