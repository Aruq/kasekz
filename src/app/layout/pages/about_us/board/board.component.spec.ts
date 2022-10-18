import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BoardComponent } from './board.component';



describe('BoardComponent', () => {
  let component:BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [BoardComponent]
    });
    fixture = TestBed.createComponent(BoardComponent);
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
