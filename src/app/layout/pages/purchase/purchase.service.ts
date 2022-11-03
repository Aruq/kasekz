import {Injectable} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";
@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  start() {
    throw new Error('Method not implemented.');
  }

  public currentTab: TabsInterface = <TabsInterface>{};

  public tabs: TabsInterface[] = [
    {
      header: '2021',
      translateCode: '',
      link: 'official-list',
      active: false
    },
    {
      header: '2020',
      translateCode: '',
      link: 'unlisted',
      active: false
    },
    {
        header: '2019',
        translateCode: '',
        link: 'unlisted',
        active: false
      },
      {
        header: '2018',
        translateCode: '',
        link: 'unlisted',
        active: false
      },
      {
        header: '2017',
        translateCode: '',
        link: 'unlisted',
        active: false
      },
      {
        header: '2016',
        translateCode: '',
        link: 'unlisted',
        active: false
      },
      {
        header: '2015',
        translateCode: '',
        link: 'unlisted',
        active: false
      }
  ]



  constructor() {
  }

  
 
}
