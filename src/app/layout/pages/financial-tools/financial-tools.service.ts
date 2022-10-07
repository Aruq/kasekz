import { Injectable } from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FinancialToolsService {

  constructor() { }

  public tabs: TabsInterface[] = [
    {
      header: 'Акции',
      translateCode: '',
      link: 'equities',
      active: false
    },
    {
      header: 'KASE GLOBAL',
      translateCode: '',
      link: 'global',
      active: false
    },
    {
      header: 'Паи/ETF',
      translateCode: '',
      link: 'funds',
      active: false
    },
    {
      header: 'ГЦБ',
      translateCode: '',
      link: 'govSec',
      active: false
    },
    {
      header: 'Облигации',
      translateCode: '',
      link: 'bonds',
      active: false
    },
    {
      header: 'Валюты',
      translateCode: '',
      link: 'currency',
      active: false
    },
    {
      header: 'Репо',
      translateCode: '',
      link: 'diploma-winners-of-nominations',
      active: false
    },
    {
      header: 'Фьючерсы',
      translateCode: '',
      link: 'contracts',
      active: false
    },
    {
      header: 'Все инструменты',
      translateCode: '',
      link: 'all',
      active: false
    }
  ]

}
