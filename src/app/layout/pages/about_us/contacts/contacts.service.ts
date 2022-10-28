import {Injectable} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  start() {
    throw new Error('Method not implemented.');
  }

  public currentTab: TabsInterface = <TabsInterface>{};

  public tabs: TabsInterface[] = [
    {
      header: 'Контакты',
      translateCode: '',
      link: 'official-list',
      active: false
    },
    {
      header: 'Реквизиты',
      translateCode: '',
      link: 'unlisted',
      active: false
    }
  ]



  constructor() {
  }

  
 
}
