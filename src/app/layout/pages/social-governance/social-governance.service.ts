import {Injectable} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {
  ListHeaderDescriptionInterface
} from "@shared/components/lists/list-header-description/interfaces/list-header-description-interface";
import {
  ListFileDescriptionInterface
} from "@shared/components/lists/list-file-description/interfaces/list-file-description-interface";
import { flatten } from '@shared/export-data/flatten';

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
      link: '',
      active: false
    },
    {
      header: 'Социальные облигации',
      translateCode: '',
      link: '',
      active: false
    },
    {
      header: 'Компании, раскрывающие ESG информацию',
      translateCode: '',
      link: '',
      active: false
    },
    {
        header: 'ESG верификаторы',
        translateCode: '',
        link: '',
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

  end() {
  }

}