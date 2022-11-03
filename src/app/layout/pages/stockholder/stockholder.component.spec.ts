import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StockholderComponent } from './stockholder.component';


describe('MissionValueComponent', () => {
  let component: StockholderComponent;
  let fixture: ComponentFixture<StockholderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [StockholderComponent]
    });
    fixture = TestBed.createComponent(StockholderComponent);
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
        name: 'Акционерам биржи'
      }]);
  });




});
