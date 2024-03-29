import {Injectable} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";
@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  

  public currentTab: TabsInterface = <TabsInterface>{};

  public tabs: TabsInterface[] = [
    {
      header: 'Совет директоров',
      translateCode: '',
      link: 'official-list',
      active: false
    },
    {
      header: 'Правление',
      translateCode: '',
      link: 'unlisted',
      active: false
    }
  ]



  constructor() {
  }

  
 
}
