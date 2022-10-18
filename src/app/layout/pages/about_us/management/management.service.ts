import {Injectable} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {OfficialListCols} from "@layout/pages/list-of-issuers/official-list-table/official-list-cols";
import {OfficialListValuesInterface} from "@layout/pages/list-of-issuers/interfaces/official-list-values-interface";
import {
  OfficialListColsSettings
} from "@layout/pages/list-of-issuers/official-list-table/official-list-cols-settings";
import {
  OfficialListValuesSettings
} from "@layout/pages/list-of-issuers/official-list-table/official-list-values-settings";

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
