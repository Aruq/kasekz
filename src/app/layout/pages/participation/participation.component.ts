
import {Component,OnInit} from '@angular/core';
import * as e from 'cors';
import { url } from 'inspector';
interface organization{
    imageUrl:string,
    name:string,
    info:string,
    url:string,
    id:string
}


@Component({
    selector:'app-participaton',
    templateUrl:'./participation.component.html',
    styleUrls:['./participation.component.scss']
})

export class ParticipationComponent implements OnInit{
    ngOnInit(){
    }

getTableValues(arg0: any): any {
throw new Error('Method not implemented.');
}
getTableColumns(arg0: any): any {
throw new Error('Method not implemented.');
}
getTabCurrentTab() {
throw new Error('Method not implemented.');
}
onNavigate(url:string){
     this.modalId=url;
 
    window.open(this.modalId ,"_blank");


}

 
public modalId: string = 'test';
public b!: organization[];

    public pathTree: any = [
        {
          name: 'О Бирже',
          link:'/about-us'
        },
        {
          name: 'Участие в профессиональных организациях'
        },
        {name2:'Корпоративные документы',
        link:'/corparate-documents'
      }
      ]


      organizations:organization[]=[
        {
            imageUrl:'assets/images/const-svgs/about-us/participation/wfe.svg',
            name:'Член Всемирной федерации бирж (WFE)',
            info:'WFE объединяет более 60-ти бирж мира,на которых сконцентрирован почти весь биржевой оборот мирового фондового рынка.',
            url:'https://www.world-exchanges.org/membership-events',
            id:'1'
        },
        {
            imageUrl:'assets/images/const-svgs/about-us/participation/feas.svg',
            name:'Член Федерации евро-азиатских фондовых бирж (FEAS)',
            info:'FEAS объединяет около 45-ти профессиональных организаций биржевой индустрии, функционирующих на развивающихся фондовых рынках Европы и Азии.',
            url:'https://feas.org/default.aspx?TabId=169&MemberID=13',
            id:'2'
        },
        {
            imageUrl:'assets/images/const-svgs/about-us/participation/afk.svg',
            name:'Член Ассоциации финансистов Казахстана (АФК)',
            info:'Крупнейшее профессиональное объединение на финансовом рынке Республики Казахстан, насчитывающее около 250-ти членов.',
            url:'https://www.siia.net/Divisions/FISD-Financial-Information-Services-Association/About/FISD-Member-Companies',
            id:'3'
        },
        {
            imageUrl:'assets/images/const-svgs/about-us/participation/mab.svg',
            name:'Член Международной ассоциации бирж стран Содружества Независимых Государств (МАБ СНГ)',
            info:'МАБ СНГ объединяет около 20-ти бирж и депозитариев постсоветских государств.',
            url:'https://mab-sng.org',
            id:'4'
        },
        {
            imageUrl:'assets/images/const-svgs/about-us/participation/fisd.svg',
            name:'Член Международной ассоциации распространителей и потребителей финансовой информации (SIIA/FISD)',
            info:'WFE объединяет более 60-ти бирж мира,на которых сконцентрирован почти весь биржевой оборот мирового фондового рынка.',
            url:'https://afk.kz/ru/o-nas/reestr-chlenov-afk.html',
            id:'5'
        },
        {
            imageUrl:'assets/images/const-svgs/about-us/participation/oic.svg',
            name:'Участник Биржевого форума стран Организации Исламского Сотрудничества (ОИС)',
            info:'Платформа для обсуждения деятельности по международному сотрудничеству среди представителей компаний и институтов ОИС и предлагает участникам возможность обмениваться опытом. ',
            url:'https://www.oicexchanges.org/en/members/stock-exchanges-of-oic-member-states',
            id:'6'
        }
      ]
       constructor(){}
      
    }
   
