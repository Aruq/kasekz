
import {Component,OnInit} from '@angular/core';
import {ManagementService} from '@layout/pages/about_us/management/management.service'
import { TabsInterface } from '@shared/interfaces/tabs-interface';
interface director{
    name:string,
    post?:string,
    imageUrl?:string,
    education?:any[],
    experience?:any[],
    more_info?:any[]
 

}
interface board{
    name:string,
    post:string,
    imageUrl:string
  
}
@Component({
    selector:'app-management',
    templateUrl:'./management.component.html',
    styleUrls:['./management.component.scss']
})

export class ManagementComponent implements OnInit{

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
          name: 'Руководство'
        }
      ]
    
directors:director[]=[
    {
        name:'Абдразаков Ельдар Советович',
        post:'Заместитель Председателя Правления',
        imageUrl:"./assets/images/const-svgs/about-us/managers/abdrazakov.jpg"

    },
    {
        name:'Алдамберген Алина Өтемісқызы',
        post:'Председатель Правления',
        imageUrl:"assets/images/const-svgs/about-us/managers/alina_aldambergen.jpg",
        education:[{
          year:'1995',
          edu:'Казахская Государственная Академия Управления по специальности "Финансы и кредит".'
          
        },
        {
          year:'1997',
          edu:'Школа Делового Администрирования им. Уильяма Е. Саймона Университета Рочестера со степенью Магистра делового администрирования (MBA).'
        }
      ],
        experience:[{
          year:'1997–2001',
          work:'Финансовый аналитик, менеджер, главный специалист, заместитель начальника управления структурного финансирования, заместитель начальника управления кредитного анализа и структурирования в ЗАО "ДАБ "ABN AMRO Банк Казахстан"',
        },
        {
          year:'2001–2003',
          work:'Рейтинговый консультант, Старший рейтинговый консультант, подразделение Глобальные финансовые рынки ABN AMRO Bank N.V., Лондон, Великобритания'
        },
        {
          year:'2003–2005',
          work:'Председатель Правления, член совета директоров АО "ООИУПА "ABN AMRO Asset Management"'
        },
        {
          year:'2005–2006',
          work:'Заместитель Председателя Правления АО "ДАБ "ABN AMRO Банк Казахстан"'
        },
        {
          year:'2006–2008',
          work:'Заместитель Председателя Агентства Республики Казахстан по регулированию деятельности регионального финансового центра города Алматы'
        },
        {
          year:'2008–2011',
          work:'Заместитель Председателя Агентства Республики Казахстан  по регулированию и надзору финансового рынка и финансовых организаций'
        },
        {
          year:'2011–2013',
          work:'Заместитель Генерального директора, Генеральный директор ТОО "Самрук-Казына Финанс"'
        },
        {
          year:'2013–2016',
          work:'Заместитель Председателя Правления АО "Национальный управляющий холдинг "Байтерек"'
        },
        {
          year:'2016–н.в.',
          work:'Председатель Правления, член Совета директоров АО "Казахстанская фондовая биржа" (KASE)'
        }
      ],
      more_info:[{
        info:'В разные годы входила в состав советов директоров казахстанских финансовых организаций, в том числе АО "Казахстанская фондовая биржа" (KASE).'},
       { info:'В 2016 году награждена юбилейной медалью "Қазақстан Республикасының тәуелсіздігіне 25 жыл", в 2018 году – орденом "Құрмет".'

      }]

    },
    {
        name:'Дорон Израэли',
        post:'Независимый директор KASE',
        imageUrl:"assets/images/const-svgs/about-us/managers/doron_izraeli.jpg"

    },
    {
        name:'Дронин Александр Владимирович',
        post:'Заместитель Председателя Правления',
        imageUrl:"assets/images/const-svgs/about-us/managers/user.svg"

    },
    {
        name:'Елемесов Аскар Раушанулы',
        post:'Независимый директор KASE',
        imageUrl:"assets/images/const-svgs/about-us/managers/user.svg"

    },
    {
        name:'Марич Игорь Леонидович',
       
        imageUrl:"assets/images/const-svgs/about-us/managers/marich.jpg"

    },
    {
        name:'Молдабекова Алия Мейрбековна',
        post:'Председатель Совета директоров Биржи',
        imageUrl:"assets/images/const-svgs/about-us/managers/user.svg"

    },
    {
        name:'Салимов Ертай Исмаилович',
        post:'Заместитель Председателя Правления',
        imageUrl:"assets/images/const-svgs/about-us/managers/salimov.jpg"

    },
    {
        name:'Хаджиева Мария Жамаловна',
       
        imageUrl:"assets/images/const-svgs/about-us/managers/khadzhiyeva.jpg"

    },
    {
        name:'Ян Виллемс',
        post:'Независимый директор KASE',
        imageUrl:"assets/images/const-svgs/about-us/managers/yan.jpg"

    },
  
]
  boards:board[]=[
    {
    name:"Алдамберген Алина Өтемісқызы",
    post:'Председатель Правления',
    imageUrl:"assets/images/const-svgs/about-us/managers/alina_aldambergen.jpg"
  },
  {
    name:"Мажекенов Ермек Булатович",
    post:'Заместитель Председателя Правления',
    imageUrl:"assets/images/const-svgs/about-us/managers/mazhekenov.png"
  },
  {
    name:"Саржаков Жайнар Наурзбаевич",
    post:'Заместитель Председателя Правления',
    imageUrl:"assets/images/const-svgs/about-us/managers/sarzhakov.png"
  },
  {
    name:"Хорошевская Наталья Юрьевна",
    post:'Заместитель Председателя Правления',
    imageUrl:"assets/images/const-svgs/about-us/managers/horochevskays.jpg"
  },
  {
    name:"Цалюк Андрей Юрьевич",
    post:'Заместитель Председателя Правления',
    imageUrl:"assets/images/const-svgs/about-us/managers/tsalyuk.png"
  }
]

constructor( public managementService :ManagementService){}
ngOnInit():void
{
    this.managementService.start();
}getTabs(): TabsInterface[]{
    return this.managementService.tabs;
  }





   public test(v: string){
     console.log(v);
     this.link = v;



   }
}