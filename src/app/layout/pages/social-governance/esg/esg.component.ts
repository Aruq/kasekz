import { Component, OnInit } from '@angular/core';
import {SocialService} from "@layout/pages/social-governance/social.service";
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {TabsService} from "@shared/components/tabs/tabs.service";
interface title{
    title:string
}
interface info{
    code:string,
    company:string,
    isin:string,
    view:string
}
@Component({
  selector: 'app-esg',
  templateUrl: './esg.component.html',
  styleUrls: ['./esg.component.scss']
})
export class EsgComponent implements OnInit {
   titles:title[]=[{
    title:'Торговый код'
   },
   {
    title:'Компания'
   },
   {
    title:'ISIN'
   },
   {
    title:'Вид'
   }
]
 
   ins:info[]=[
    {
    code:'KEGCb4',
    company:'KEGOC',
    isin:'KZ2C00007797',
    view:'облигации'
   },
   {
    code:'BRKZb25',
    company:'Банк Развития Казахстана',
    isin:'KZ2C00008605',
    view:'облигации'
   },
   {
    code:'EABRb21',
    company:'ЕАБР',
    isin:'KZ2D00008083',
    view:'облигации'
   },
   {
    code:'ASDBe5',
    company:'АБР',
    isin:'XS2251962499',
    view:'международные облигации'
   },
   {
    code:'ASDBe4',
    company:'АБР',
    isin:'XS2251962903',
    view:'международные облигации'
   },
   {
    code:'FRMPb3',
    company:'Фонд "Даму"',
    isin:'KZ2C00008068',
    view:'облигации'
   },
   {
    code:'EABRb25',
    company:'КЕАБР',
    isin:'KZ2D00008174',
    view:'облигации'
   },
   {
    code:'ASDBe9',
    company:'АБР',
    isin:'XS2444205756',
    view:'международные облигации'
   },
   {
    code:'ASDBe6',
    company:'АБР',
    isin:'XS2294363416',
    view:'международные облигации'
   }
]
  public tabsSecId: string = '';

  constructor(private socialService: SocialService,
              private tabsService: TabsService) { }

  ngOnInit(): void {
  }

  getTabsSec() {
    return this.socialService.tabsSec;
  }

 

  getTabCurrentTab(id: string): TabsInterface {
    return this.tabsService.getByKey(id);
  }


}
