import {Injectable} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {
  ListHeaderDescriptionInterface
} from "@shared/components/lists/list-header-description/interfaces/list-header-description-interface";
import {
  ListFileDescriptionInterface
} from "@shared/components/lists/list-file-description/interfaces/list-file-description-interface";

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  public currentTab: TabsInterface = <TabsInterface>{};

  public pathTree: any = [
    {
      name: 'О Бирже',
    },
    {
      name: 'Устойчивое развитие',
    }
  ]

  public tabs: TabsInterface[] = [
    {
      header: 'ESG облигации',
      translateCode: '',
      link: 'asts-stock',
      active: false
    },
    {
      header: 'Зеленые облигации',
      translateCode: '',
      link: 'asts-currency',
      active: false
    },
    {
      header: 'Социальные облигации',
      translateCode: '',
      link: 'spectra',
      active: false
    },
    {
      header: 'Компании, раскрывающие ESG информацию',
      translateCode: '',
      link: 'next',
      active: false
    },
    {
        header: 'ESG верификаторы',
        translateCode: '',
        link: 'next',
        active: false
      }
  ]

  public tabsSec: TabsInterface[] = [
    {
      header: 'Новости',
      translateCode: 'trading-system',
      link: '',
      active: false
    },
    {
      header: 'Sustainable Literacy',
      translateCode: '',
      link: 'fix',
      active: false
    }
   
  ]

 

  constructor() {
  }

  setCurrentTab(link: string) {
    this.tabs.forEach(tab => {
      if (tab.link === link) {
        tab.active = true;
        this.currentTab = tab;
      } else {
        tab.active = false;
      }
    })
  }

}