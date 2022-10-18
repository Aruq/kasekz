import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AboutUsComponent } from "./about_us.component";

describe('AboutUsComponent', () => {
  let component:AboutUsComponent ;
  let fixture: ComponentFixture<AboutUsComponent >;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [AboutUsComponent ]
    });
    fixture = TestBed.createComponent(AboutUsComponent );
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`default value`, () => {
    expect(component.links).toEqual([
        {
          title: 'Миссия и ценности',
          link: "/mission-value"
        },
        {
          title: 'История Биржи',
          link: "/#"
        },
        {
          title: 'Руководство',
          link: "/management"
        },
        {
          title: 'Комитеты и омиссии',
          link: "/board"
        },
        {

          title: 'Раскрытие информации компаниями',

          link: "/#"
        },
        {

          title: 'Участие в профессиональных организациях',
          link: "/participation"
        },
        {

          title: 'Корпаративные документы',
          link: "/#"
        },
      ]);
  });
});
