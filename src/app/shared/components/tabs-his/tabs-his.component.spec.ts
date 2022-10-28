import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { TabsHisComponent } from './tabs-his.component';

describe('TabsSecComponent', () => {
  let component: TabsHisComponent;
  let fixture: ComponentFixture<TabsHisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [TabsHisComponent]
    });
    fixture = TestBed.createComponent(TabsHisComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`tabs has default value`, () => {
    expect(component.tabs).toEqual([]);
  });
});
