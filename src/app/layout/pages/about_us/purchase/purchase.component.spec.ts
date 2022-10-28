import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PurchaseComponent } from './purchase.component';


describe('MissionValueComponent', () => {
  let component: PurchaseComponent;
  let fixture: ComponentFixture<PurchaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [PurchaseComponent]
    });
    fixture = TestBed.createComponent(PurchaseComponent);
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
        name: 'План закупок'
      }]);
  });




});
