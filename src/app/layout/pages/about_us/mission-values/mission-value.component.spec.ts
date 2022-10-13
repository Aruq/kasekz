import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MissionValueComponent } from './mission-value.component';

import {equitiesCols} from "@layout/pages/financial-tools/table-cols/equities-cols";
import {FinancialToolsComponent} from "@layout/pages/financial-tools/financial-tools.component";

describe('MissionValueComponent', () => {
  let component: MissionValueComponent;
  let fixture: ComponentFixture<MissionValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [MissionValueComponent]
    });
    fixture = TestBed.createComponent(MissionValueComponent);
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
