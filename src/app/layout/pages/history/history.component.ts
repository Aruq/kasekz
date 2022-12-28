import { Component, OnInit } from '@angular/core';
import {ListOfMembersService} from "@layout/pages/list-of-members/list-of-members.service";
import {TabsInterface} from "@shared/interfaces/tabs-interface";

interface history{
    img?:any;
    year:string;
    info?:any[]
}
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  public tabId: string = '';
  public tabs: TabsInterface[] = [];

public s: any

  public pathTree: any = [
    {
      name: 'О Бирже',
      link:'/about-us'
    },
    {
      name: 'История Биржи'
    },
    
        {name2:'Руководство',
    link:'/management'
  }
  ]
  hist:history[]=[{
    img:'assets/images/const-svgs/about-us/history/history-1993.jpg',
    year:'1993',
    info:[{
     date:'17 ноября',
      title:'через два дня после введения национальной валюты – тенге была создана валютная Биржа под наименованием “Казахстанская Межбанковская Валютная Биржа”. Целью создания новой биржи была организация и развитие национального валютного рынка в связи с введением в обращение национальной валюты'
    },
    {
     date:'19 ноября',
      title:'Первые на торговой площадке прошли первые, исторические валютные торги по паре американский доллар – тенге. Торги были голосовые, с шагом в 1 тиын и проходили методом фиксинга: когда спрос и предложения сравнивались, курс фиксировался.'
    },
    {
      date:'26 ноября',
      title:'прошли первые торги российским рублем.'
    }
  ]},
  {
  img:'assets/images/const-svgs/about-us/history/history-1994.jpg',
  year:'1994',
  info:[{
    title:'Первый аукцион государственных ценных бумаг, эмитентом которых было Министерство финансов Республики Казахстан '
  }
]
},
  
  {
  img:'assets/images/const-svgs/about-us/history/history-1995.jpg',
  year:'1995',
  info:[{
    
    title:'•	Изменение наименование биржи на «Казахстанская межбанковская валютно-фондовая биржа» (КМВФБ)'
  },
  {
    title:'•	Получение лицензии Национальной комиссии Республики Казахстан по ценным бумагам № 1 на организацию торгов государственными казначейскими векселями. 14 ноября прошли первые торги этими ценными бумагами. '},{
    title:'•	Установление корреспондентских отношений с иностранными банками. '
  }
]
  },
  {
 img:'assets/images/const-svgs/about-us/history/history-1996.jpg',
  year:'1996',
  info:[{
    
    title:'•	Изменение наименования на «Казахстанская фондовая биржа» (KASE)'
  },
  {
    title:'•	Получение неограниченной лицензии Национальной Комиссии по ценным бумагам на организацию торгов с ценными бумагами'
  },
  {
    title:'	•	Первые торги с производными ценными бумагами (фьючерс на курс тенге в доллару США)'
  }
]
},
  {
   img:'assets/images/const-svgs/about-us/history/history-1997.jpg',
   year:'1997',
   info:[{
     
     title:'•	Первые торги листинговыми акциями, государственными пакетами акций, нелистинговыми ценными бумагами'
   },

 ]
 },{
  img:'assets/images/const-svgs/about-us/history/history-1998.jpg',
  year:'1998',
  info:[{
    title:'	•	Запуск на KASE системы «прямых» сделок'  
  },
{
  title:'	•	Первые торги суверенными еврооблигациями Казахстана'
}]
 },
 {
  img:'assets/images/const-svgs/about-us/history/history-1999.jpg',
  year:'1999',
  info:[{
    title:'•	Первые торги муниципальными облигациями и листинговыми облигациями'  
  },
{
  title:'•	Первые торги муниципальными облигациями и листинговыми облигациями'
}]
 },
 {
  img:'assets/images/const-svgs/about-us/history/history-2000.jpg',
  year:'2000',
  info:[{
    title:'•	Запуск индикатора KASE_Shares'  
  },
{
  title:'	•	Запуск серии индикаторов ставок казахстанского межбанковского рынка депозитов – KIBOR, KIBID, KIMEAN'
},
{title:'	•	Первые размещения корпоративных облигаций'}]
 },
 {
  img:'assets/images/const-svgs/about-us/history/history-2001.jpg',
  year:'2001',
  info:[{
    title:'	•	Запуск рынка «автоматического» репо с ГЦБ'  
  },
{
  title:'•	Запуск рынка облигаций международных финансовых организаций (МФО)'
},
{title:'•	Запуск серии индикаторов корпоративных облигаций – KASE_BC, KASE_BP, KASE_BYY'},
{
  title:'	•	Запуск первого индикатора рынка операций репо – TONIA'
},
{title:'•	Первый рекорд – объем всех операций превысил один триллион тенге'}
]
 },
 {
  img:'assets/images/const-svgs/about-us/history/history-2002.jpg',
  year:'2002',
  info:[{
    title:'•	Первые торги векселями'  
  },
{
  title:'•	Запуск рынка «автоматического» репо с негосударственными ценными бумагами'
}]
 }, {
  img:'assets/images/const-svgs/about-us/history/history-2003.jpg',
  year:'2003',
  info:[{
    title:'	•	Запуск проекта «eTrade.kz» (система интернет-трейдинга)'  
  },
]
 },
 {
  img:'assets/images/const-svgs/about-us/history/history-2004.jpg',
  year:'2004',
  info:[{
    title:'•	Первые торги негосударственными ценными бумагами иностранных эмитентов'  
  },
]
 },
 {
  img:'assets/images/const-svgs/about-us/history/history-2005.jpg',
  year:'2005',
  info:[{
    title:'	•	Первое размещение на KASE долгосрочных государственных облигаций, купон по которым индексируется к уровню инфляции'  
  },
]
 },
 {
  img:'assets/images/const-svgs/about-us/history/history-2006.jpg',
   year:'2006',
   info:[{
     
     title:'•	Первые торги иностранными корпоративными облигациями'
   },
   {
     title:'•	IPO АО «Разведка Добыча «КазМунайГаз»'
   },
   {
     title:'•	IPO АО «Казахтелеком»'
   }
 ]
 },
 {
  img:'assets/images/const-svgs/about-us/history/history-2007.jpg',
   year:'2007',
   info:[{
     
     title:'•	Создание на KASE специальной торговой площадки регионального финансового центра города Алматы (для привлечения иностранных эмитентов и инвесторов) '
   },
   {
     title:'•	Запуск нового индекса на рынке акций - Индекса KASE, который продолжил числовой ряд индекса KASE_Shares'
   },
   {
     title:'	•	Коммерциализация KASE '
   },
   {
    title:'•	Начало публикации индикатора среднего значения по ставкам размещения денег на казахстанском рынке межбанковских депозитов KazPrime-3M'
   }
 ]
 },
 {
  img:'assets/images/const-svgs/about-us/history/history-2008.jpg',
   year:'2008',
   info:[{
     
     title:'•	Первые торги иностранными корпоративными облигациями'
   },
   {
     title:'•	IPO АО «Разведка Добыча «КазМунайГаз»'
   },
   {
     title:'•	IPO АО «Казахтелеком»'
   }
 ]
 },
 {
  img:'assets/images/const-svgs/about-us/history/history-2009.jpg',
   year:'2009',
   info:[{
     
     title:'•	Разработки и ввод в действие новых Листинговых правил '
   },
   {
     title:'•	Восстановление единства рынка через объединение основной торговой площадки KASE и СТП РФЦА'
   },
   
 ]
 },
 {
  img:'assets/images/const-svgs/about-us/history/history-2010.jpg',
   year:'2010',
   info:[{
     
     title:'•	Запуск нового индикатора рынка операций репо - TWINA '
   },
   {
     title:'•	Ввод платежей системы переоценки обязательств и компенсационных платежей на рынке “прямого” репо'
   },
   {
     title:'•	Запуск обновленного рынка деривативов с использованием новой системы риск- менеджмента (открытие торгов расчетными фьючерсами на курс доллара США к тенге и на значение Индекса KASE) '
   }
 ]
 },
 {
  img:'assets/images/const-svgs/about-us/history/history-2011.jpg',
   year:'2011',
   info:[{
     
     title:'•	Включение KASE в список участников Dow Jones FEAS Titans 50 и S&P/OIC COVCTC 50 Shariah '
   },
   {
     title:'•	Запуск системы торгов ценными бумагами по схеме (гросс) расчетов Т+0 с полным предварительным обеспечением '
   },
   {
     title:'•	Создание новой многофункциональной системы интернет-трейдинга “Strade”  '
   }
 ]
 },
 {
  img:'assets/images/const-svgs/about-us/history/history-2012.jpg',
   year:'2012',
   info:[{
     
     title:'	•	Получение KASE лицензий на осуществление клиринговой деятельности по сделкам с финансовыми инструментами и осуществление отдельных видов банковских операций (открытие и ведение банковских счетов юридических лиц)'
   },
   {
     title:'	•	Создание в структуре KASE клиринговой палаты '
   },
   {
     title:'•	IPO AO “Ksell”'
   },{
    title:'•	IPO AO “КазТрансОйл” в рамках Программы “Народное IPO”'
   }
 ]
 }, {
  img:'assets/images/const-svgs/about-us/history/history-2013.jpg',
   year:'2013',
   info:[{
     
     title:'	•	Получение статуса полного члена Всемирной федерации бирж (WFE) '
   },
   {
     title:'	•	Создание автоматизированной банковской системы в рамках получения KASE лицензии на ведение банковской деятельности '
   },
 ]
 },
 {
  img:'assets/images/const-svgs/about-us/history/history-2014.jpg',
   year:'2014',
   info:[{
     
     title:'•	Открытие торгов валютной парой казахстанских тенге / китайских юань '
   },
   {
     title:'	•	Запуск индикаторов доходности операций валютного свопа SWAP-1D и SWAP-2D'
   },
   {
     title:'	•	Запуск индикатора биржевого рынка коротких денег MM Index (money market index) '
   },{
    title:'	•	IPO AO “KEGOS” в рамках Программы “Народное IPO” '
   }
 ]
 },
 {
  img:'assets/images/const-svgs/about-us/history/history-2015.jpg',
   year:'2015',
   info:[{
     
     title:'•	Введен в эксплуатацию торговый терминал NEXT для валютного рынка KASE '
   },
   {
     title:'•	Перевод торгов акциями Индекса KASE на схему расчетов Т+2 '
   },
   {
     title:'	•	Присоединение к инициативе ООН “Устойчивые фондовые биржи” '
   },{
    title:'	•	IPO AO “БАСТ”'
   },{
    title:'•	Присоединение к Инициативе ООН "Устойчивые фондовые биржи"'
   }
 ]
 },
 {
  img:'assets/images/const-svgs/about-us/history/history-2016.jpg',
   year:'2016',
   info:[{
     
     title:'	•	IPO AO “Актюбинский завод металлоконструкций” '
   },
   {
     title:'	•	Начало реализации новой стратегии развития KASE '
   },
   {
     title:'	•	Обновление бренда KASE'
   },{
    title:'	•	Запуск программы обучения “Фондовый рынок: новые горизонты для предпринимательства '
   },{
    title:'	•	Первые размещение коммерческих облигаций на KASE (АО “ПАВЛОДАРЭНЕРГО”, АО “СевКазЭнерго”, ТОО “Исткомтранс”) '
   }
 ]
 }, {
  img:'assets/images/const-svgs/about-us/history/history-2017.jpg',
   year:'2017',
   info:[{
     
     title:'	•	Получение Казахстаном статуса Frontier в рейтингах MCSI и FTSE'
   },
   {
     title:'•	Трансформация официального списка KASE и внедрение площадки для МСБ, также коммерческих облигаций'
   },
   {
     title:'•	Запуск площадок KASE Startup и KASE Private market'
   }
 ]
 },{
  img:'assets/images/const-svgs/about-us/history/history-2018.jpg',
   year:'2018',
   info:[{
     
     title:'	•	Утверждение Стратегии развития Биржи на 2019 – 2021 годы'
   },
   {
     title:'	•	Подписание соглашения о стратегическом партнерстве с Московской биржей (МОЕХ). Соглашение предусматривает приобретение торгово-клиринговых систем MOEX, запуск Центрального контрагента на всех биржевых рынках и приобретение МОЕХ до 20% уставного капитала KASE'
   },
   {
     title:'•	Перевод инструментов рынка ГЦБ на схему расчетов Т+2'
   },{
    title:'•	Запуск ETF на Индекс KASE'
   },{
    title:'•	Обновление методики построения кривой доходности по ГЦБ'
   },{
    title:'	•	Предоставление брокерам права участия в биржевых торгах на валютных рынке'
   },{
    title:'•	Запуск торгов длинными валютными свопами'
   },{
    title:'•	Запуск сквозной сессии на рынке иностранных валют: время окончания валютных торгов изменено с 15:30 на 17:00 часов'
   }
 ]
 },{
  img:'assets/images/const-svgs/about-us/history/history-2019.jpg',
   year:'2019',
   info:[{
     
     title:'	•	Запуск торгов ЦБ с расчетами в долларах США'
   },
   {
     title:'	•	Запуск торгов ЦБ с расчетами в долларах США'
   },
   {
     title:'	•	Запуск услуг центрального контрагента по ликвидным ценным бумагам'
   }
 ]
 },{
  img:'assets/images/const-svgs/about-us/history/history-2020.jpg',
   year:'2020',
   info:[{
     
     title:'•	Внедрение второго этапа ASTS+ на фондовом рынке'
   },
   {
     title:'•	Внедрение ASTS+ на валютном рынке'
   },
   {
     title:'•	Внедрение центрального контрагента на всех рынках'
   },{
    title:'•	Неттинг на фондовом рынке и репо'
   },{
    title:'•	Мультиинструментальное обеспечение сделок'
   },{
    title:'•	Расчетный цикл от Т+0 до Т+2 '
   },{
    title:'	•	Доля MOEX в уставном капитале Биржи составила 13,1%'
   },{
    title:'•	Внедрение обновленной методики расчета индикаторов рынка денег, основанной на лучшей международной практике'
   },{
    title:'•	Внедрение коротких продаж в рамках операций репо'
   },{
    title:'•	Внедрение стандартов экологичности ведения бизнеса'
   }
 ]
 },{
  img:'assets/images/const-svgs/about-us/history/history-2021.jpg',
   year:'2021',
   info:[{
     
     title:'•	Автоматизация процедур листинга, принятия в члены Биржи и аккредитации аудиторских организаций'
   },
   {
     title:'•	Внедрение SPECTRA на рынке деривативов'
   },
   {
     title:'•	Запуск торгов по омнибус счетам'
   },{
    title:'•	Внедрение клиринговых сертификатов участников (КСУ)'
   },{
    title:'•	Утверждение Стратегии развития Биржи на 2021-2023 годы'
   },{
    title:'	•	Внедрение отдельной площадки в структуре официального списка Биржи для частного размещения '
   },
 ]
 },

]







  HistoryService: any;
  tabsService: any;


  viewMode: string | undefined;

  constructor() { }
  

  test(e: any){
     console.log('eeeee')
     console.log(e);
     console.log('eeeee')

     this.s = e
  }

  ngOnInit(): void {
    this.viewMode = "tab1";
    console.log(this.viewMode);
    for (let i = 1993; i < 2023; i++) {
      this.tabs.push({
        header: i.toString(),
        translateCode: '',
        link: '',
        active: false
      })

    }
    console.log(this.tabs)
  }
   

  

  getTabCurrentTab(): TabsInterface {
     console.log(this.tabId)
    return this.tabsService.getByKey(this.tabId);
  }
 }






  
  
    


function uuidv4(): any {
  throw new Error('Function not implemented.');
}

function constructor() {
  throw new Error('Function not implemented.');
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

function getTabs() {
  throw new Error('Function not implemented.');
}

function getTabCurrentTab() {
  throw new Error('Function not implemented.');
}

