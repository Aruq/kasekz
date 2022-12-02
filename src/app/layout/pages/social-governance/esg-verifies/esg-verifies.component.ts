import { Component, OnInit } from '@angular/core';
import {SocialService} from "@layout/pages/social-governance/social-governance.service";
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {TabsService} from "@shared/components/tabs/tabs.service";
interface title{
    title:string
}
interface info{
  img:string,
    name:string,
    fact:string,
    contact:string,
    url:string,
    site:string
}
@Component({
  selector: 'app-esg-verifies',
  templateUrl: './esg-verifies.component.html',
  styleUrls: ['./esg-verifies.component.scss']
})
export class EsgVerifiesComponent implements OnInit {
   titles:title[]=[{
    title:'Наименование'
   },
   {
    title:'Фактический адрес'
   },
   {
    title:'Контактный телефон'
   },
   {
    title:'Сайт'
   }
]
 
   ins:info[]=[
    {
      img:'assets/images/const-svgs/about-us/esg-verifies/price.svg',
    name:'PriceWaterhouseCoopers',
    fact:'пр-т Аль-Фараби, 34А Алматы',
    contact:'(727) 330 32 00',
    url:'https://www.pwc.com/kz/ru.html',
    site:'pwc.kz'
   },
   {
    img:'assets/images/const-svgs/about-us/esg-verifies/ex.svg',
  name:'Эксперт РА',
  fact:'Москва, ул. Николоямская, дом 13, стр.2',
  contact:'7 (495) 225-34-44',
  url:'https://raexpert.ru/',
  site:'raexpert.ru'
 },
 {
  img:'assets/images/const-svgs/about-us/esg-verifies/ana.svg',
name:'Аналитическое кредитное рейтинговое агентство',
fact:'Москва, 115035 Садовническая набережная, 75',
contact:'7 (495) 139 04 80',
url:'https://acra-ratings.ru',
site:'acra-ratings.ru'
},
{
  img:'assets/images/const-svgs/about-us/esg-verifies/aifc.svg',
name:'AIFC Green Finance Center Ltd',
fact:'пр-т Мангилик Ел, 55/18 Астана',
contact:'(7172) 959 000',
url:'https://gfc.aifc.kz',
site:'gfc.aifc.kz'
},
{
  img:'assets/images/const-svgs/about-us/esg-verifies/yang.svg',
name:'ТОО "Эрнст энд Янг"',
fact:'пр-т Аль Фараби, 77/7 Алматы',
contact:'(727) 258 59 60',
url:'https://www.ey.com/en_kz',
site:'ey.com'
},
]
  public tabsSecId: string = '';

  constructor(private socialService: SocialService,
              private tabsService: TabsService) { }

  ngOnInit(): void {
  }

  getTabsSec() {
    return this.socialService.tabsSec;
  }



  getTabCurrentTab(id: string): TabsInterface {
    return this.tabsService.getByKey(id);
  }


}
