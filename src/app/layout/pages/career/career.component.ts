
import {Component,OnInit} from '@angular/core';

interface vacancie{
    title:string;
    date:string;
    name:string;
    tab:string;
    artifact?:any[];
    resp?:string,
    req?:string,
    requ?:any[]
}


@Component({
    selector:'app-career',
    templateUrl:'./career.component.html',
    styleUrls:['./career.component.scss']
})

export class CareerComponent implements OnInit{

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
          name: 'Карьера'
        }
      ]
      vacancies:vacancie[]=[{
        title:"Менеджер по закупкам",
        date:'Новое',
        name:'Отдел разработки IT продуктов',
        tab:'tab1',
        resp:'Обязанности:',
        req:'Требования к кандидату:',
        artifact:[{
            resp_a:'организация и проведение закупок с учетом потребностей Биржи в соответствии с применимыми нормативными правовыми актами Республики Казахстан и ВНД Биржи;'},
            {resp_a:'подготовка и составление плана закупок на основании утвержденного бюджета Биржи на соответствующий год;'},
            {resp_a:'мониторинг исполнения утвержденного плана закупок'}
           
        ],
        requ:[{ resp_b:'высшее юридическое / финансовое / экономическое образование;'},
        {resp_b:'стаж работы по направлению закупок не менее трех лет;'},
        {resp_b:'навыки делового общения;'},
        {resp_b:'умение вести переговоры;'},
        {resp_b:'ответственность, знания ПК и программ Microsoft Office.'
}]
    },
    {
        title:"Начальник",
        date:'3 дня назад',
        name:'Отдел рисков центрального контрагента Клиринговой палаты',
        tab:'tab2'
    },
    {
        title:"Главный специалист (разработчик С#) ",
        date:'3 дня назад',
        name:'Отдел автоматизации бизнес-процессов',
        tab:'tab3'
    },
    {
        title:"Ведущий/главный специалист",
        date:'3 дня назад',
        name:'Отдел автоматизации бизнес-процессов',
        tab:'tab4'
    },
    {
        title:"Специалист",
        date:'3 дня назад',
        name:'Отдел продвижения информационных продуктов',
        tab:'tab5'
    },
    {
        title:"Специалист",
        date:'9 дней назад',
        name:'Отдел информации',
        tab:'tab6'
    },
    {
        title:"Ведущий специалист",
        date:'9 дней назад',
        name:'Отдел новостей',
        tab:'tab7'
    },
    {
        title:"Главный специалист",
        date:'9 дней назад',
        name:'Департамент стратегии и международного сотрудничества',
        tab:'tab8'
    },
    {
        title:"Специалист (Системный администратор)",
        date:'9 дней назад',
        name:'Отдел системного администрирования',
        tab:'tab9'
    },
    {
        title:"Аудитор",
        date:'9 дней назад',
        name:'Служба внутреннего аудита',
        tab:'tab10'
    },
    {
        title:"Главный специалист",
        date:'9 дней назад',
        name:'Отдел локальных ценных бумаг',
        tab:'tab11'
    },
    {
        title:"Аналитик",
        date:'9 дней назад',
        name:'Отдел анализа',
        tab:'tab12'
    },
    {
        title:"Графический дизайнер",
        date:'9 дней назад',
        name:'Отдел маркетинга и PR',
        tab:'tab13'
    ,

    
 } ]
     

constructor( ){}
viewMode: string | undefined;
ngOnInit():void
{
    this.viewMode = "tab1";
  }
  public test(v: string){
    console.log(v);
    

}
}