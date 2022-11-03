
import {Component,OnInit} from '@angular/core';
import {StockholderService} from '@layout/pages/stockholder/stockholder.service';
import { TabsInterface } from '@shared/interfaces/tabs-interface';
import { SrvRecord } from 'dns';

interface stock{
  company:string,
  q_stock:string,
  p_stock:string
}
interface fin{
   year?:any[]
}
interface report{
    year:string,
    name:string,
    weight?:any
}
interface news{
    year:string,
    day:string,
    name:string
}
interface notice{
    year:string,
    day:string,
    name:string
}
interface year{
y:string
}
@Component({
    selector:'app-stockholder',
    templateUrl:'./stockholder.component.html',
    styleUrls:['./stockholder.component.scss']
})

export class StockholderComponent implements OnInit{

 public link: string | undefined; 


getTableValues(arg0: any): any {
throw new Error('Method not implemented.');
}
getTableColumns(arg0: any): any {
throw new Error('Method not implemented.');
}
getTabCurrentTab() {
throw new Error('Method not implemented.');
}
    public pathTree: any = [
        {
          name: 'О Бирже',
          link:'/about-us'
        },
        {
          name: 'План закупок'
        }
      ]
      years:year[]=[{
        y:'2022'
      },
      {
        y:'2021'
      },
      {y:'2020'},{
        y:'2019'
      },
      {y:'2018'},
      {y:'2017'},
      {y:'2016'},
      {y:'2015'},
      {y:'2014'}
    ]
      stocks:stock[]=[{
        company:'Государственное учреждение "Национальный Банк Республики Казахстан"	',
        q_stock:'505 318',
        p_stock:'46,9962'
      },
    {
        company:'Публичное акционерное общество "Московская биржа ММВБ-РТС"	',
        q_stock:'140 864',
        p_stock:'13,1008'
    },
    {
        company:'Акционерное общество "Коммеск-Омир"	',
        q_stock:'82 095',
        p_stock:'7,6351'
    },
    {
        company:'Акционерное общество "Народный сберегательный банк Казахстана"	',
        q_stock:'72 973',
        p_stock:'6,7867'
    },
    {
        company:'Товарищество с ограниченной ответственностью "Bolashaq Trade Group"	',
        q_stock:'53 962',
        p_stock:'5,0186'
    },
    {
        company:'Акционерное общество "Банк ЦентрКредит"		',
        q_stock:'34 171',
        p_stock:'3,178'
    },
    {
        company:'Акционерное общество "Kaspi Bank"	',
        q_stock:'28 435',
        p_stock:'2,6446'
    },
    {
        company:'Акционерное общество "Дочерняя организация Народного Банка Казахстана "Halyk Finance"	',
        q_stock:'26 716',
        p_stock:'2,4847'
    },
    {
        company:'Акционерное общество "ДОЧЕРНИЙ БАНК "КАЗАХСТАН-ЗИРААТ ИНТЕРНЕШНЛ БАНК"		',
        q_stock:'18 000',
        p_stock:'1,6741'
    },
    {
        company:'Акционерное общество "ForteBank"	',
        q_stock:'14 148',
        p_stock:'1,3158'
    },
    {
        company:'Акционерное общество "First Heartland Jusan Bank"	',
        q_stock:'13 266',
        p_stock:'1,2338'
    },
    {
        company:'Товарищество с ограниченной ответственностью "Центр цифровых технологий"	',
        q_stock:'13 119',
        p_stock:'1,2201'
    },
    {
        company:'Акционерное общество "Нурбанк"		',
        q_stock:'13 119',
        p_stock:'0,6758'
    },
    {
        company:'Акционерное общество "Алан Секьюритис"		',
        q_stock:'7 266',
        p_stock:'0,5704'
    },
    {
        company:'Акционерное общество "Банк Развития Казахстана"	',
        q_stock:'6 133',
        p_stock:'0,558'
    },
    {
        company:'Акционерное общество "Евразийский банк"	',
        q_stock:'6 000',
        p_stock:'0,558'
    },
    {
        company:'Акционерное общество "Ситибанк Казахстан"		',
        q_stock:'6 000',
        p_stock:'0,558'
    },
    {
        company:'Дочерний Банк Акционерное Общество "Сбербанк России"		',
        q_stock:'6 000',
        p_stock:'0,558'
    },
    {
        company:'Дочерний банк акционерное общество "Хоум Кредит энд Финанс Банк"	',
        q_stock:'6 000',
        p_stock:'0,4901'
    },
    {
        company:'Товарищество с ограниченной ответственностью "Centrica"		',
        q_stock:'5 270',
        p_stock:'0,4753'
    },
    {
        company:'SHINHAN INVESTMENT CORP.	',
        q_stock:'5 111',
        p_stock:'0,0097'
    },
    {
        company:'Товарищество с ограниченной ответственностью "JRun CK LTD"	',
        q_stock:'104',
        p_stock:'0,0074'
    },
    {
        company:'Акционерное общество "Фридом Финанс"	',
        q_stock:'80',
        p_stock:'0,0023'
    },
    {
        company:'Акционерное общество "CAIFC INVESTMENT GROUP"		',
        q_stock:'25',
        p_stock:'0,0021'
    },
    {
        company:'Акционерное общество "Greenwich Capital Management" ("Гринвич Капитал Менеджмент")	',
        q_stock:'22',
        p_stock:'0,0006'
    },
    {
        company:'Акционерное общество "FALCONRY CAPITAL"	',
        q_stock:'6',
        p_stock:'0,0005'
    },
    {
        company:'Акционерное общество "NGDEM"	',
        q_stock:'5',
        p_stock:'0,0001'
    },
    {
        company:'Акционерное общество "BCC Invest" - дочерняя организация АО "Банк ЦентрКредит"	',
        q_stock:'1',
        p_stock:'0,0001'
    },
    {
        company:'Акционерное общество "Страховая компания "САЛЕМ"		',
        q_stock:'1',
        p_stock:'0,0001'
    },
    {
        company:'Физические лица		',
        q_stock:'12 140',
        p_stock:'1,1291'
    }
]
    fins:fin[]=[{
       year:[{ name:"Консолидированная"
    },
    {
        name:'Отдельная'
    },
    {
        name:'IV кв. 2020'
    },
    {
        name:'III кв. 2020'
    },
    {
        name:'II кв. 2020'
    },
    {
        name:'I кв. 2020'
    }
]
}]
reports:report[]=[{
    year:'2022',
    name:'Годовой отчет ',
    weight:'Вес файла 1,3 Мб'
},
{
    year:'2022',
    name:'Обзор биржевого рынка'
  
}
]
n:news[]=[{
    year:'2022',
    day:'28.12.20',
    name:'KASE информирует об увеличении доли МОЕХ в ее капитале до 13,10 %'
},
{
    year:'2022',
    day:'15.12.20',
    name:'Совет директоров KASE принял решение реализовать ПАО "Московская Биржа ММВБ-РТРС" 95 175 объявленных и 13 329 ранее выкупленных акций Биржи'
},
{
    year:'2022',
    day:'11.12.20',
    name:'АО "Казахстанская фондовая биржа" сообщает о решениях внеочередного общего собрания акционеров, проведенного посредством заочного голосования'
},
{
    year:'2022',
    day:'04.11.20',
    name:'KASE сообщает о заключении соглашения с Национальным Банком Республики Казахстан на привлечение внутридневной ликвидности в национальной валюте'
},
{
    year:'2022',
    day:'29.10.20',
    name:'ИЗВЕЩЕНИЕ: О проведении внеочередного общего собрания акционеров АО "Казахстанская фондовая биржа", решения которого принимаются посредством заочного голосования'
},
{
    year:'2022',
    day:'28.10.20',
    name:'Совет директоров KASE принял решение о размещении 119 000 простых акций KZ1C00001213 (KASE) с учетом реализации акционерами Биржи права преимущественной покупки'
},
{
    year:'2022',
    day:'02.10.20',
    name:'Совет директоров KASE одобрил привлечение внутридневной ликвидности в национальной валюте от Национального Банка Республики Казахстан'
},
{
    year:'2022',
    day:'18.08.20',
    name:'Акционеры KASE определили ТОО "Эрнст энд Янг" для проведения аудита биржи за 2020 год'
},
{
    year:'2022',
    day:'10.08.20',
    name:'Заместителем Председателя Правления KASE избран Мухамеджанов А.Н.'
}
]
note:notice[]=[{
    year:'2022',
    day:'10.08.20',
    name:'Протокол об итогах голосования на годовом общем собрании акционеров KASE от 29 мая 2020 года'
}]
constructor( public stockholderService :StockholderService){}
ngOnInit():void
{
    this.stockholderService.start();
     }getTabs(): TabsInterface[]{
    return this.stockholderService.tabs;
  }
  public test(v: string){
    console.log(v);
    this.link = v;

}
}