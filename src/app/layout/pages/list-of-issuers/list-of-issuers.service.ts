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
export class ListOfIssuersService {

  public currentTab: TabsInterface = <TabsInterface>{};

  public tabs: TabsInterface[] = [
    {
      header: 'Официальный список',
      translateCode: '',
      link: 'official-list',
      active: false
    },
    {
      header: 'Нелистинговые',
      translateCode: '',
      link: 'unlisted',
      active: false
    }
  ]

  public officialListCols: any[] = OfficialListCols;
  public officialListValues: OfficialListValuesInterface[] = [];
  public officialListColsSettings = OfficialListColsSettings;
  public officialListValuesSettings = OfficialListValuesSettings

  constructor() {
  }

  start() {
    // test data
    for (let i = 0; i < 23; i++) {
      this.officialListValues.push({
        code: 'AAFD',
        company: 'АзияАгроФуд',
        quantityTools: '1',
        website: 'www.asiaagrofood.kz',
        capitalizationKztBillion: '0,00',
      })
    }
  }

  getOfficialListValues() {
    return this.officialListValues;
  }
}
