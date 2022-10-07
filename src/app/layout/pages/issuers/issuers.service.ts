import { Injectable } from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {IssuersInfoInterface} from "@layout/pages/issuers/interfaces/issuers-info-interface";
import {IssuersInfoCols} from "@layout/pages/issuers/issuers-table/issuers-info-cols";
import {IssuersInfoColsSettings} from "@layout/pages/issuers/issuers-table/issuers-info-cols-settings";
import {IssuersInfoValuesSettings} from "@layout/pages/issuers/issuers-table/issuers-info-values-settings";
import {SecuritiesCols} from "@layout/pages/issuers/securities/securities-table/securities-cols";
import {SecuritiesInterface} from "@layout/pages/issuers/securities/interfaces/securities-interface";
import {SecuritiesColsSettings} from "@layout/pages/issuers/securities/securities-table/securities-cols-settings";
import {SecuritiesValuesSettings} from "@layout/pages/issuers/securities/securities-table/securities-values-settings";
import {
  InformationDisclosureCols
} from "@layout/pages/issuers/information-disclosure/table/information-disclosure-cols";
import {
  InformationDisclosureInterface
} from "@layout/pages/issuers/information-disclosure/interfaces/information-disclosure-interface";
import {
  InformationDisclosureColsSettings
} from "@layout/pages/issuers/information-disclosure/table/information-disclosure-cols-settings";
import {
  InformationDisclosureValuesSettings
} from "@layout/pages/issuers/information-disclosure/table/information-disclosure-values-settings";
import {StockholdersCols} from "@layout/pages/issuers/governing-bodies/stockholders-table/stockholders-cols";
import {StockholdersInterface} from "@layout/pages/issuers/governing-bodies/interfaces/stockholders-interface";
import {
  StockholdersColsSettings
} from "@layout/pages/issuers/governing-bodies/stockholders-table/stockholders-cols-settings";
import {
  StockholdersValuesSettings
} from "@layout/pages/issuers/governing-bodies/stockholders-table/stockholders-values-settings";
import {
  StockholdersQuantityCols
} from "@layout/pages/issuers/governing-bodies/stockholders-quantity-table/stockholders-quantity-cols";
import {
  StockholdersQuantityInterface
} from "@layout/pages/issuers/governing-bodies/interfaces/stockholders-quantity-interface";
import {
  StockholdersQuantityColsSettings
} from "@layout/pages/issuers/governing-bodies/stockholders-quantity-table/stockholders-quantity-cols-settings";
import {
  StockholdersQuantityValuesSettings
} from "@layout/pages/issuers/governing-bodies/stockholders-quantity-table/stockholders-quantity-values-settings";
import {GovernmentCols} from "@layout/pages/issuers/governing-bodies/government-table/government-cols";
import {GovernmentInterface} from "@layout/pages/issuers/governing-bodies/interfaces/government-interface";
import {GovernmentColsSettings} from "@layout/pages/issuers/governing-bodies/government-table/government-cols-settings";
import {
  GovernmentValuesSettings
} from "@layout/pages/issuers/governing-bodies/government-table/government-values-settings";
import {ExecutiveAgencyCols} from "@layout/pages/issuers/governing-bodies/executive-agency-table/executive-agency-cols";
import {ExecutiveAgencyInterface} from "@layout/pages/issuers/governing-bodies/interfaces/executive-agency-interface";
import {
  ExecutiveAgencyColsSettings
} from "@layout/pages/issuers/governing-bodies/executive-agency-table/executive-agency-cols-settings";
import {
  ExecutiveAgencyValuesSettings
} from "@layout/pages/issuers/governing-bodies/executive-agency-table/executive-agency-values-settings";
import {NewsInterface} from "@shared/components/table-news/interfaces/news-interface";

@Injectable({
  providedIn: 'root'
})
export class IssuersService {

  public pathTree: any = [
    {
      name: 'Эмитенты'
    }
  ]

  public tabsSec: TabsInterface[] = [
    {
      header: 'Профиль',
      translateCode: '',
      link: '',
      active: false
    },
    {
      header: 'Контактные данные',
      translateCode: '',
      link: '',
      active: false
    }
  ]

  public tabs: TabsInterface[] = [
    {
      header: 'Ценные бумаги',
      translateCode: '',
      link: 'securities',
      active: false
    },
    {
      header: 'Органы управления',
      translateCode: '',
      link: 'governing-bodies',
      active: false
    },
    {
      header: 'Раскрытие информации',
      translateCode: '',
      link: 'information-disclosure',
      active: false
    },
    {
      header: 'Новости',
      translateCode: '',
      link: 'news',
      active: false
    }
  ]

  public issuersInfoCols: any[] = IssuersInfoCols;
  public issuersInfoValues: IssuersInfoInterface[] = [
    {
      finIndic: 'Уставный капитал',
      dateFirst: '97 530,00 млн KZT',
      dateSecond: '97 530,00 млн KZT'
    },
    {
      finIndic: 'Собственный капитал',
      dateFirst: '403 831,00 млн KZT',
      dateSecond: '403 831,00 млн KZT'
    },
    {
      finIndic: 'Совокупные активы',
      dateFirst: '3 203 816,00 млн KZT',
      dateSecond: '3 203 816,00 млн KZT'
    },
    {
      finIndic: 'Совокупные обязательства',
      dateFirst: '2 799 985,00 млн KZT',
      dateSecond: '2 799 985,00 млн KZT'
    },
    {
      finIndic: 'Чистая прибыль',
      dateFirst: '173 064,00 млн KZT',
      dateSecond: '173 064,00 млн KZT'
    },
    {
      finIndic: 'Балансовая стоимость простой акции',
      dateFirst: '2 053,00 млн KZT',
      dateSecond: '2 053,00 млн KZT'
    },
    {
      finIndic: 'ROA',
      dateFirst: '5,40 %',
      dateSecond: '5,40 %'
    },
    {
      finIndic: 'ROE',
      dateFirst: '42,86 %',
      dateSecond: '42,86 %'
    },
  ]
  public issuersInfoColsSettings = IssuersInfoColsSettings;
  public issuersInfoValuesSettings = IssuersInfoValuesSettings;
  public issuersInfoThTd = {
    th: {
      classList: 'font-10_16 font-300'
    },
    td: {
      classList: 'font-14_22 font-300'
    }
  }

  // securities
  public securitiesCols: any[] = SecuritiesCols;
  public securitiesValues: SecuritiesInterface[] = [
    {
      symbol: 'KSPI',
      isin: 'KZKD00000519',
      board: 'Основная',
      sector: 'акции',
      category: 'стандарт',
      trades: '12.07.18',
      index: ''
    },
    {
      symbol: 'KSPId',
      isin: 'KZK100000258',
      board: 'Смешанная',
      sector: 'производные ценные бумаги',
      category: '',
      trades: '04.03.21',
      index: ''
    }
  ]
  public securitiesColsSettings = SecuritiesColsSettings;
  public securitiesValuesSettings = SecuritiesValuesSettings;

  // governing bodies
  public stockholdersCols: any[] = StockholdersCols;
  public stockholdersValues: StockholdersInterface[] = [
    {
      holderName: 'Фонды Baring Vostok',
      ordinarySharesPcs: '57 502 056\t',
      ordinarySharesPer: '29,92',
      privilegeShares: '',
      totalSharesPcs: '29,92',
      totalSharesPer  : '28,82',
    },
    {
      holderName: 'Ким В.К.',
      ordinarySharesPcs: '46 380 152',
      ordinarySharesPer: '24,13',
      privilegeShares: '',
      totalSharesPcs: '24,13',
      totalSharesPer  : '23,25',
    },
    {
      holderName: 'Ломтадзе М.',
      ordinarySharesPcs: '44 774 453\t',
      ordinarySharesPer: '23,30',
      privilegeShares: '',
      totalSharesPcs: '23,30',
      totalSharesPer  : '22,44',
    }
  ]
  public stockholdersColsSettings = StockholdersColsSettings;
  public stockholdersValuesSettings = StockholdersValuesSettings;

  public stockholdersQuantityCols: any[] = StockholdersQuantityCols;
  public stockholdersQuantityValues: StockholdersQuantityInterface[] = [
    {
      quantityPcs: 'Объявленные',
      ordinarySharesPcs: '57 502 056',
      preferenceShares: ''
    },
    {
      quantityPcs: 'Размещенные',
      ordinarySharesPcs: '199 500 000',
      preferenceShares: ''
    },
    {
      quantityPcs: 'Выкупленные',
      ordinarySharesPcs: '7 312 777',
      preferenceShares: ''
    },
    {
      quantityPcs: 'В обращении',
      ordinarySharesPcs: '192 187 223',
      preferenceShares: ''
    }
  ]
  public stockholdersQuantityColsSettings = StockholdersQuantityColsSettings;
  public stockholdersQuantityValuesSettings = StockholdersQuantityValuesSettings;

  public governmentCols: any[] = GovernmentCols;
  public governmentValues: GovernmentInterface[] = [
    {
      fullName: 'Ким Вячеслав Константинович',
      jobTitle: 'Председатель совета директоров',
      dateOfElection: ''
    },
    {
      fullName: 'Ломтадзе Михаил Нугзарович ',
      jobTitle: 'Генеральный директор, член Совета директоров',
      dateOfElection: ''
    },
    {
      fullName: 'Николай Зиновьев',
      jobTitle: 'Член Совета директоров',
      dateOfElection: ''
    },
    {
      fullName: 'Дуг Гарднер',
      jobTitle: 'Независимый член Совета директоров',
      dateOfElection: ''
    },
    {
      fullName: 'Шимон Гутковски',
      jobTitle: 'Независимый член Совета директоров',
      dateOfElection: ''
    },
    {
      fullName: 'Алина Правджик',
      jobTitle: 'Независимый член Совета директоров',
      dateOfElection: ''
    }
  ]
  public governmentColsSettings = GovernmentColsSettings;
  public governmentValuesSettings = GovernmentValuesSettings;

  public executiveAgencyCols: any[] = ExecutiveAgencyCols;
  public executiveAgencyValues: ExecutiveAgencyInterface[] = [
    {
      fullName: 'Ким Вячеслав Константинович',
      jobTitle: 'Председатель совета директоров',
      dateOfElection: ''
    },
    {
      fullName: 'Ломтадзе Михаил Нугзарович ',
      jobTitle: 'Генеральный директор, член Совета директоров',
      dateOfElection: ''
    },
    {
      fullName: 'Николай Зиновьев',
      jobTitle: 'Член Совета директоров',
      dateOfElection: ''
    },
    {
      fullName: 'Дуг Гарднер',
      jobTitle: 'Независимый член Совета директоров',
      dateOfElection: ''
    },
    {
      fullName: 'Шимон Гутковски',
      jobTitle: 'Независимый член Совета директоров',
      dateOfElection: ''
    },
    {
      fullName: 'Алина Правджик',
      jobTitle: 'Независимый член Совета директоров',
      dateOfElection: ''
    }
  ]
  public executiveAgencyColsSettings = ExecutiveAgencyColsSettings;
  public executiveAgencyValuesSettings = ExecutiveAgencyValuesSettings;

  // information disclosure
  public informationDisclosureCols: any[] = InformationDisclosureCols;
  public informationDisclosureValues: InformationDisclosureInterface[] = [
    {
      docName: 'Отчет по обзору консолидированной финансовой отчетности за январь-сентябрь 2020 года',
      dateRec: '26.11.20'
    },
    {
      docName: 'Сведения об аффилиированных лицах по состоянию на 01 октября 2020 года',
      dateRec: '27.10.20'
    },
    {
      docName: 'Отчет по обзору консолидированной финансовой отчетности за январь-июнь 2020 года',
      dateRec: '01.09.20'
    },
    {
      docName: 'Годовой отчет за 2019 год',
      dateRec: '30.08.20'
    },
    {
      docName: 'Сведения об аффилиированных лицах по состоянию на 01 июля 2020 года',
      dateRec: '29.07.20'
    },
    {
      docName: 'Аудиторский отчет по консолидированной финансовой отчетности за 2019 год',
      dateRec: '01.07.20'
    },
    {
      docName: 'Пояснительная записка к консолидированной финансовой отчетности за январь–март 2020 года',
      dateRec: '29.05.20'
    },
    {
      docName: 'Финансовая отчетность за январь–март 2020 года (консолидированная)',
      dateRec: '01.07.20'
    },
  ]
  public informationDisclosureColsSettings = InformationDisclosureColsSettings;
  public informationDisclosureSettings = InformationDisclosureValuesSettings;
  public informationDisclosureThTd = {
    th: {
      classList: 'font-12_168 font-500'
    },
    td: {
      classList: 'font-14_20 font-300'
    }
  }

  public menuListDocumentType: TabsInterface[] = [
    {
      header: 'Отчетность',
      translateCode: 'Отчетность',
      link: 'Отчетность',
      active: false
    },
    {
      header: 'asd',
      translateCode: 'asd',
      link: 'asd',
      active: false
    }
  ]
  public menuListYear: TabsInterface[] = [
    {
      header: '2020',
      translateCode: '2020',
      link: '2020',
      active: false
    },
    {
      header: 'asd',
      translateCode: 'asd',
      link: 'asd',
      active: false
    }
  ]

  // news
  public newsValues: NewsInterface[] = [
    {
      dateTime: '23.09.21 09:09',
      title: 'Акционеры АО "Kaspi Bank" приняли решение о выплате дивидендов по простым и привилегированным акциям за второй квартал 2021 года',
    },
    {
      dateTime: '23.09.21 09:09',
      title: 'АО "Kaspi Bank" сообщило о подтверждении агентством S&P Global Ratings рейтинговых оценок банка, прогноз "Позитивный"',
    },
    {
      dateTime: '23.09.21 09:09',
      title: 'С 16 сентября ценные бумаги девяти наименований будут включены в Список Т+',
    },
    {
      dateTime: '23.09.21 09:09',
      title: '/ПОВТОР/ KASE СФОРМИРОВАЛА СПИСКИ ЦЕННЫХ БУМАГ ПЕРВОГО, ВТОРОГО И ТРЕТЬЕГО КЛАССОВ ЛИКВИДНОСТИ НА СЕНТЯБРЬ 2021 ГОДА',
    },
    {
      dateTime: '23.09.21 09:09',
      title: 'KASE СФОРМИРОВАЛА СПИСКИ ЦЕННЫХ БУМАГ ПЕРВОГО, ВТОРОГО И ТРЕТЬЕГО КЛАССОВ ЛИКВИДНОСТИ НА СЕНТЯБРЬ 2021 ГОДА',
    },
    {
      dateTime: '23.09.21 09:09',
      title: 'KASE СФОРМИРОВАЛА СПИСКИ ЦЕННЫХ БУМАГ ПЕРВОГО, ВТОРОГО И ТРЕТЬЕГО КЛАССОВ ЛИКВИДНОСТИ НА СЕНТЯБРЬ 2021 ГОДА',
    },
    {
      dateTime: '23.09.21 09:09',
      title: 'АО "Kaspi Bank" сообщило о выплате 17-го купона по своим облигациям KZ2C00001964 (CSBNb12)',
    }
  ]

  public currentTab: TabsInterface = <TabsInterface>{};

  constructor() { }

  start() {}
}
