import { Component, OnInit } from '@angular/core';
import {ListOfMembersService} from "@layout/pages/list-of-members/list-of-members.service";
import {TabsInterface} from "@shared/interfaces/tabs-interface";

interface history{
    img:string;
    year:string;
    info?:any[]
}
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public tabsYears: TabsInterface[] = [];
  public pathTree: any = [
    {
      name: 'О Бирже',
      link:'/about-us'
    },
    {
      name: 'История Биржи'
    },
    
        {name2:'Руководство',
    link:'/board'
  }
  ]
  hist:history[]=[{
    img:'assets/images/const-svgs/about-us/history/history1993.svg',
    year:'1993',
    info:[{
      date:'17 ноября',
      title:'через два дня после введения национальной валюты – тенге была создана валютная Биржа под наименованием «Казахстанская Межбанковская Валютная Биржа». Целью создания новой биржи была организация и развитие национального валютного рынка в связи с введением в обращение национальной валюты'
    },
    {
      date:'19 ноября',
      title:'на торговой площадке прошли первые, исторические валютные торги по паре американский доллар – тенге. Торги были голосовые, с шагом в 1 тиын и проходили методом фиксинга: когда спрос и предложения сравнивались, курс фиксировался.'
    },
    {
      date:'26 ноября',
      title:'прошли первые торги российским рублем.'
    }
  ]
  }
  
]



  constructor() { }

  ngOnInit(): void {
    for (let i = 1993; i < 2023; i++) {
      this.tabsYears.push({
        header: i.toString(),
        translateCode: '',
        link: '',
        active: false
      })

    }
    console.log(this.tabsYears)
  }
   
  
    

}
