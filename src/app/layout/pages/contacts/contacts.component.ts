
import {Component,OnInit} from '@angular/core';

import { TabsInterface } from '@shared/interfaces/tabs-interface';
import { url } from 'inspector';
import { title } from 'process';
import { ContactService } from './contacts.service';
interface requisite{
    title:string;
    property?:any[]
}
interface detail{
    title:string;
    info?:any[]
}
interface contact{
    img:string;
    info:any[]
}

@Component({
    selector:'app-contacts',
    templateUrl:'./contacts.component.html',
    styleUrls:['./contacts.component.scss']
})

export class ContactsComponent implements OnInit{

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
          name: 'Контакты и реквизиты'
        }
      ]
    requisites:requisite[]=[{
        title:'Контактные данные',
        property:[{
            name:'Фактический и зарегистрированный адрес:',
            info:'Республика Казахстан, А15G7M6, г. Алматы, ул. Байзакова, 280, Северная башня Многофункционального комплекса "Almaty Towers", 8-й этаж'
        },
        {
            name:'Электронная почта:',
            href:'kase@kase.kz',
            href1:'info@kase.kz'
   
        },
        {
            name:'Телефоны:',
            tel:'(+7 727) 237 53 00',
            tel1:'(+7 727) 237 53 11'
        },
        {
            name:'Официальный сайт:',
            href:'kase.kz'
        }]},
        {title:'Акции Биржи',
    property:[{
        name:'Количество объявленных акций Биржи',
        info:'5 000 000'
    },
    {
        name:'Количество размещенных акций Биржи',
        info:'1 075 231'
    },
    {
        name:'Виды выпущенных акций Биржи',
        info:'Простые акции;"Золотая акция" владельцем, которой является Национальный Банк Республики Казахстан (дает право на наложение вето на решение органов общества)'

}]

    },
    
    {title:'Общие сведения',
        property:[{
            name:'Полное наименование:',
            info:'Акционерное общество "Казахстанская фондовая биржа"'
        },
        {
            name:'Сокращенное наименование:',
            info:'АО "Казахстанская фондовая биржа"'
        },
        {
            name:'Аббревиатура:',
            tel:'KASE'
        },
        {
            name:'Вид юридического лица:',
            info:'Коммерческая организация'
        },
        {
            name:'Организационно-правовая форма:',
           info:'Акционерное общество'
        }
    ]
},
    {
        title:'Банковские реквизиты',
        property:[{
            name:'SWIFT BIC:',
            info:'KICE KZ KX'
        },{
            name:'Код ОКПО:',
            info:'30088469'
        },{
            name:'БИН:',
            info:'931240000220'
        },{
            name:'РНН:',
            info:'600200049149, ', 
            href:'Свидетельство о постановке на учет по НДС',
            info1:' серия 60001 №0078118 от 01 августа 2012 года'
        }]

    }
]

details:detail[]=[
    {
        title:'Контактные данные',
        info:[{
            name:'Фактический и зарегистрированный адрес:',
            info:'Республика Казахстан, А15G7M6, г. Алматы, ул. Байзакова, 280, Северная башня Многофункционального комплекса "Almaty Towers", 8-й этаж'
        },
        {
            name:'Электронная почта:',
            info:'kase@kase.kz',
            info1:'info@kase.kz'
   
        },
        {
            name:'Телефоны:',
            info:'(+7 727) 237 53 00',
            info1:'(+7 727) 237 53 11'
        },
        {
            name:'Официальный сайт:',
            info:'kase.kz'
        }]
    }
]
contacts:contact[]=[
    { img:"./assets/images/const-svgs/about-us/contacts.png",
    info:[{
        name:'За получением информации по различным вопросам деятельности KASE просим обращаться по следующим контактам:',
      
    },{
        name:'Телефон:',
        inside:'+7 (727) 237 53 00'
    },{
        name:'Факс:',
        inside:'+7 (727) 296 64 02'
    },{
        name:'Информация по результатам торгов иностранными валютами (автоответчик):',
        inside:'+7 (727) 296 64 03'
    },{
        name:'Техническая поддержка информационных систем Биржи:',
        inside:'+7 (727) 237 60 17'
    },{
        name:'E-mail:',
        mail:'support@kase.kz'
    },{
        name:'Предоставление резюме для соискателей:',
        mail:'resume@kase.kz',
        mail1:'hr@kase.kz'
    },{
        name:'Биржевой рынок:',
        inside:'+7 (727) 237 53 23'
    }
]

}]



      constructor( public contactService :ContactService){}
      viewMode: string | undefined;
      ngOnInit():void
      {
        this.viewMode = "tab1";
        console.log(this.viewMode);
          this.contactService.start();
           }
           getTabs(): 
           TabsInterface[]{
          return this.contactService.tabs;
        }
       
      
      
    
      
         public test(v: string){
           console.log(v);
           this.link = v;
      
      
      
         }
      }