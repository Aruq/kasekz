
import {Component,OnInit} from '@angular/core';
interface organization{
    imageUrl:string,
    name:string,
    info:string
}


@Component({
    selector:'app-participaton',
    templateUrl:'./participation.component.html',
    styleUrls:['./participation.component.scss']
})

export class ParticipationComponent implements OnInit{
    ngOnInit(): void {
        throw new Error('Method not implemented.');
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
    public pathTree: any = [
        {
          name: 'О Бирже',
          link:'/about-us'
        },
        {
          name: 'Участие в профессиональных организациях'
        }
      ]


      organizations:organization[]=[
        {
            imageUrl:'assets/images/const-svgs/about-us/participation/wfe.jpeg',
            name:'Член Всемирной федерации бирж (WFE)',
            info:'WFE объединяет более 60-ти бирж мира,на которых сконцентрирован почти весь биржевой оборот мирового фондового рынка.'
        },
        {
            imageUrl:'assets/images/const-svgs/about-us/participation/feas.png',
            name:'Член Федерации евро-азиатских фондовых бирж (FEAS)',
            info:'FEAS объединяет около 45-ти профессиональных организаций биржевой индустрии, функционирующих на развивающихся фондовых рынках Европы и Азии.'
        },
        {
            imageUrl:'assets/images/const-svgs/about-us/participation/afk.jpeg',
            name:'Член Ассоциации финансистов Казахстана (АФК)',
            info:'Крупнейшее профессиональное объединение на финансовом рынке Республики Казахстан, насчитывающее около 250-ти членов.'
        },
        {
            imageUrl:'assets/images/const-svgs/about-us/participation/mab.svg',
            name:'Член Международной ассоциации бирж стран Содружества Независимых Государств (МАБ СНГ)',
            info:'МАБ СНГ объединяет около 20-ти бирж и депозитариев постсоветских государств.'
        },
        {
            imageUrl:'assets/images/const-svgs/about-us/participation/fisd.png',
            name:'Член Международной ассоциации распространителей и потребителей финансовой информации (SIIA/FISD)',
            info:'WFE объединяет более 60-ти бирж мира,на которых сконцентрирован почти весь биржевой оборот мирового фондового рынка.'
        },
        {
            imageUrl:'assets/images/const-svgs/about-us/participation/oic.png',
            name:'Участник Биржевого форума стран Организации Исламского Сотрудничества (ОИС)',
            info:'Платформа для обсуждения деятельности по международному сотрудничеству среди представителей компаний и институтов ОИС и предлагает участникам возможность обмениваться опытом. '
        }
      ]
    }
    
