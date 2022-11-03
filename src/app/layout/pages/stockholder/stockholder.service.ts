import {Injectable} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";
@Injectable({
  providedIn: 'root'
})
export class StockholderService {
  start() {
    throw new Error('Method not implemented.');
  }

  public currentTab: TabsInterface = <TabsInterface>{};

  public tabs: TabsInterface[] = [
    {
      header: 'Список акционеров',
      translateCode: '',
      link: 'official-list',
      active: false
    },
    {
      header: 'Информация для акционеров ',
      translateCode: '',
      link: 'unlisted',
      active: false
    }
  ]



  constructor() {
  }

  
 
}
