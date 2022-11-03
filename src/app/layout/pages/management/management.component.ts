
import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import { IndexesValues } from '@core/components/header/values/indexes-values';
import {ManagementService} from '@layout/pages/management/management.service'
import { TabsInterface } from '@shared/interfaces/tabs-interface';
import {ModalPositionService} from "@shared/services/modal-position.service";
import * as e from 'cors';
import { ModalService } from './modal/modal.service';
interface director{
    name:string,
    post?:string,
    imageUrl?:string,
  id:string
  education?:any[],
    experience?:any[],
    more_info?:any[]

}
interface board{
    name:string,
    post:string,
    imageUrl:string,
    id:string,
   
}
@Component({
    selector:'app-management',
    templateUrl:'./management.component.html',
    styleUrls:['./management.component.scss']
})

export class ManagementComponent implements OnInit{

 public link: string | undefined; 

 public screenWidth: any;
 public screenHeight: any;
 public show = false;
 public x = 9999;
 public y = 9999;
 public modalId: string = 'test';

 public boardForModal!: director[];
 @Output() filterValues: any = new EventEmitter<any>();
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
        imageUrl:"./assets/images/const-svgs/about-us/managers/abdrazakov.jpg",
        id:'1'

    },
    {
        name:'Алдамберген Алина Өтемісқызы',
        post:'Председатель Правления',
        imageUrl:"assets/images/const-svgs/about-us/managers/alina_aldambergen.jpg",
        id:'2',
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
        imageUrl:"assets/images/const-svgs/about-us/managers/doron_izraeli.jpg",
        id:'3'

    },
    {
        name:'Дронин Александр Владимирович',
        post:'Заместитель Председателя Правления',
        imageUrl:"assets/images/const-svgs/about-us/managers/user.svg",
        id:'4'

    },
    {
        name:'Елемесов Аскар Раушанулы',
        post:'Независимый директор KASE',
        imageUrl:"assets/images/const-svgs/about-us/managers/user.svg",
        id:'5'

    },
    {
        name:'Марич Игорь Леонидович',
       
        imageUrl:"assets/images/const-svgs/about-us/managers/marich.jpg",
        id:'6'

    },
    {
        name:'Молдабекова Алия Мейрбековна',
        post:'Председатель Совета директоров Биржи',
        imageUrl:"assets/images/const-svgs/about-us/managers/user.svg",
        id:'7'

    },
    {
        name:'Салимов Ертай Исмаилович',
        post:'Заместитель Председателя Правления',
        imageUrl:"assets/images/const-svgs/about-us/managers/salimov.jpg",
        id:'8'

    },
    {
        name:'Хаджиева Мария Жамаловна',
       
        imageUrl:"assets/images/const-svgs/about-us/managers/khadzhiyeva.jpg",
        id:'9'

    },
    {
        name:'Ян Виллемс',
        post:'Независимый директор KASE',
        imageUrl:"assets/images/const-svgs/about-us/managers/yan.jpg",
        id:'10'

    },
  
]
  boards:board[]=[
    {
    name:"Алдамберген Алина Өтемісқызы",
    post:'Председатель Правления',
    imageUrl:"assets/images/const-svgs/about-us/managers/alina_aldambergen.jpg",
    id:'1',
   

  },
  {
    name:"Мажекенов Ермек Булатович",
    post:'Заместитель Председателя Правления',
    imageUrl:"assets/images/const-svgs/about-us/managers/mazhekenov.png",
    id:'2'
  },
  {
    name:"Саржаков Жайнар Наурзбаевич",
    post:'Заместитель Председателя Правления',
    imageUrl:"assets/images/const-svgs/about-us/managers/sarzhakov.png",
    id:'3'
  },
  {
    name:"Хорошевская Наталья Юрьевна",
    post:'Заместитель Председателя Правления',
    imageUrl:"assets/images/const-svgs/about-us/managers/horochevskays.jpg",
    id:'4'
  },
  {
    name:"Цалюк Андрей Юрьевич",
    post:'Заместитель Председателя Правления',
    imageUrl:"assets/images/const-svgs/about-us/managers/tsalyuk.png",
    id:'4'

  }
]

constructor( public managementService :ManagementService,public modalPositionService:ModalPositionService, private modal: ModalService){}
ngOnInit():void
{
  this.screenWidth = window.innerWidth;
  this.screenHeight = window.innerHeight;
  
  

    this.managementService.start();
     }getTabs(): TabsInterface[]{
    return this.managementService.tabs;
  }
 
 


   public test(v: string){
     console.log(v);
     this.link = v;



   }

   modalOn() {
    this.show = !this.show;
    if (this.show) {
      let interval = setInterval(() => {
        let temp = this.modalPositionService.modalOn('button1', 'button1', 682, 582, this.screenWidth, this.screenHeight)
        this.x = temp.x;
        this.y = temp.y;
        if (!this.show) {
          clearInterval(interval);
        }
      }, 0)
    }
    return
  }
  exit(){
    this.show = !this.show; 
    if (this.show) {
      let interval = setInterval(() => {
        let temp = this.modalPositionService.modalOn('button1', 'button1', 682, 582, this.screenWidth, this.screenHeight)
        this.x = temp.x;
        this.y = temp.y;
        if (!this.show) {
          clearInterval(interval);
        }
      }, 0)
    }
    return
  }
  
  getX() {
    return this.x + 'px';
  }

  getY() {
    return this.y + 'px';
  }

  modalOpen(id :string){
     this.modalId = id;

     this.boardForModal = this.directors.filter(e=> e.id === id);
    
     console.log("======");
     console.log(this.boardForModal[0]);
 
     console.log("======"); 
     
     this.modal.open(this.modalId);
  }
  

  modalClose(id: string){
   this.modal.close(id);
  }


  } 

