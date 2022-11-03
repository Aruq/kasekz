import { Component, OnInit } from '@angular/core';
import {SocialService} from "@layout/pages/social-governance/social.service";
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {TabsService} from "@shared/components/tabs/tabs.service";

interface news{
  date:string,
  info:string
}
@Component({
  selector: 'app-news-env',
  templateUrl: './news-env.component.html',
  styleUrls: ['./news-env.component.scss']
})
export class NewsEnvComponent implements OnInit {
   n:news[]=[{
    date:'23.09.21 09:09',
    info:'Акционеры АО "Kaspi Bank" приняли решение о выплате дивидендов по простым и привилегированным акциям за второй квартал 2021 года'
   },
   {
    date:'23.09.21 09:09',
    info:'АО "Kaspi Bank" сообщило о подтверждении агентством S&P Global Ratings рейтинговых оценок банка, прогноз "Позитивный"'
   },
   {
    date:'23.09.21 09:09',
    info:'С 16 сентября ценные бумаги девяти наименований будут включены в Список Т+'
   },
   {
    date:'23.09.21 09:09',
    info:'/ПОВТОР/ KASE СФОРМИРОВАЛА СПИСКИ ЦЕННЫХ БУМАГ ПЕРВОГО, ВТОРОГО И ТРЕТЬЕГО КЛАССОВ ЛИКВИДНОСТИ  НА СЕНТЯБРЬ 2021 ГОДА'
   },
   {
    date:'23.09.21 09:09',
    info:'Акционеры АО Kaspi.kz приняли решение о выплате дивидендов по простым акциям KZ1C00001536 (KSPI) за второй квартал 2021 года'
   },
   {
    date:'23.09.21 09:09',
    info:'KASE СФОРМИРОВАЛА СПИСКИ ЦЕННЫХ БУМАГ ПЕРВОГО, ВТОРОГО И ТРЕТЬЕГО КЛАССОВ ЛИКВИДНОСТИ НА СЕНТЯБРЬ 2021 ГОДА'
   },
   {
    date:'23.09.21 09:09',
    info:'АО "Kaspi Bank" сообщило о выплате 17-го купона по своим облигациям KZ2C00001964 (CSBNb12)'
   }
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
