import { Component, OnInit } from '@angular/core';
import {ListOfMembersService} from "@layout/pages/list-of-members/list-of-members.service";
import {TabsInterface} from "@shared/interfaces/tabs-interface";

interface history{
    img:string;
    year:string;
    info:string
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
    }
  ]
  hist:history[]=[{
    img:'assets/images/const-svgs/about-us/history/history1994.jpg',
    year:'1994',
    info:'Первый аукцион государственных ценных бумаг, эмитентом которых было Министерство финансов Республики Казахстан '
  }
  
]



  constructor() { }

  ngOnInit(): void {
    for (let i = 1994; i < 2022; i++) {
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
