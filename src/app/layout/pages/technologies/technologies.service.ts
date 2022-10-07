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
export class TechnologiesService {

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
      header: 'Фондовый рынок ASTS+',
      translateCode: '',
      link: 'asts-stock',
      active: false
    },
    {
      header: 'Валютный рынок ASTS+',
      translateCode: '',
      link: 'asts-currency',
      active: false
    },
    {
      header: 'SPECTRA',
      translateCode: '',
      link: 'spectra',
      active: false
    },
    {
      header: 'NEXT',
      translateCode: '',
      link: 'next',
      active: false
    }
  ]

  public tabsSec: TabsInterface[] = [
    {
      header: 'Торговая система',
      translateCode: 'trading-system',
      link: '',
      active: false
    },
    {
      header: 'FIX',
      translateCode: '',
      link: 'fix',
      active: false
    },
    {
      header: 'FAST',
      translateCode: '',
      link: 'fast',
      active: false
    },
  ]

  public distributions: ListFileDescriptionInterface[] = [
    {
      header: 'Терминал для подписки на облигации',
      description: ''
    },
    {
      header: 'Терминал Торговой системы "Подписка"',
      description: 'Версия 1.10, сборка 1, от 11.03.19'
    }
  ]

  public instructions: ListFileDescriptionInterface[] = [
    {
      header: 'Руководство пользователя',
      description: ''
    },
    {
      header: 'Специальная версия торговой системы "Подписка"',
      description: 'версия 1.10'
    },
    {
      header: 'Подключение к резервному серверу торговой системы',
      description: ''
    },
    {
      header: 'Специальная версия ТС для торговли евробондами',
      description: ''
    },
    {
      header: 'Инструкция по включению комиссии брокера в сделки Т+2',
      description: ''
    },
    {
      header: 'Инструкция к порядку совершения сделок с акциями Индекса KASE  \n' +
        'по схеме Т+2',
      description: ''
    },
    {
      header: 'Инструкция к порядку совершения сделок с паевыми инвестиционными фондами',
      description: ''
    },
    {
      header: 'Изменения в версии 2.37',
      description: ''
    },
    {
      header: 'Изменения в версии 2.35',
      description: ''
    },
    {
      header: 'Изменения в версии 2.33',
      description: ''
    },
    {
      header: 'Увеличение и уменьшение клиентской денежной позиции',
      description: ''
    },
    {
      header: 'Активация торгового счета',
      description: ''
    },
    {
      header: 'Загрузка позиций',
      description: ''
    },
    {
      header: 'Инструкция проверки и настройки подключения терминал к торговой системе "Подписка на облигации"',
      description: ''
    }
  ]

  public fixInstructions: ListFileDescriptionInterface[] = [
    {
      header: 'Спецификация публичного интерфейса FIX 4.4',
      description: ''
    },
    {
      header: 'Руководство разработчика',
      description: ''
    },
  ]

  public drivers: ListHeaderDescriptionInterface[] = [
    {
      header: 'Боевая система "Подписка"',
      description: ['SocketUserSSL=Y']
    },
    {
      header: 'По выделенному каналу:',
      description: ['IP: 192.168.111.86', 'Port: 1531']
    },
    {
      header: 'По интернету:',
      description: ['IP: 31.31.217.204', 'Port: 1531=Y']
    },
    {
      header: 'Боевая система "Подписка на облигации"',
      description: ['SocketUserSSL=Y']
    },
    {
      header: 'По выделенному каналу:',
      description: ['IP: 192.168.111.19', 'Port: 1542']
    },
    {
      header: 'По интернету:',
      description: ['IP: 31.31.217.199', 'Port: 1542']
    },
  ]
  public connectionParams: ListHeaderDescriptionInterface[] = [
    {
      header: 'Боевая система',
      description: []
    },
    {
      header: 'По интернету:',
      description: ['79.142.60.230', 'IP основной']
    },
    {
      header: 'По выделенному каналу связи:',
      description: ['192.168.111.41', 'IP основной', '192.168.111.42', 'IP резервный', '9121', 'Port']
    },
    {
      header: '',
      description: ['']
    },
    {
      header: 'По выделенному каналу:',
      description: ['IP: 192.168.111.19', 'Port: 1542']
    },
    {
      header: 'По интернету:',
      description: ['IP: 31.31.217.199', 'Port: 1542']
    },
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
