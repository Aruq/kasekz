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
          link: "/#"
        },
        {  
          title: 'История биржы',
          link: "/#"
        },
        {  
          title: 'Руководство',
          link: "/#"
        },
        {
          title: 'Коммитеты и комиссии',
          link: "/#"
        },
        {
         
          title: 'Раскрытие информации компаниями',
         
          link: "/#"
        },
        {
         
          title: 'Участие в профессиональных организациях',
          link: "/#"
        },
        {
         
          title: 'Корпаративные документы',
          link: "/#"
        },
      ]);
  });
});
