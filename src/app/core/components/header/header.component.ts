import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '@shared/services/translate-config.service';
import {AboutExchangeValues} from "@core/components/header/values/about-exchange-values";
import {PressCenterValues} from "@core/components/header/values/press-center-values";
import {InformationValues} from "@core/components/header/values/information-values";
import {InvestorsValues} from "@core/components/header/values/investors-values";
import {BiddersValues} from "@core/components/header/values/bidders-values";
import {ListingValues} from "@core/components/header/values/listing-values";
import {MarketsValues} from "@core/components/header/values/markets-values";
import {IndexesValues} from "@core/components/header/values/indexes-values";
import { TabsInterface } from '@shared/interfaces/tabs-interface';
import { RouterLink } from '@angular/router';
import {RouterLinkService} from '@shared/services/router-link.service';


interface MenuList {
  header: string,
  menuList: any,
  active: boolean
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private element: any;
  public languages: ILan[] = [
    { name: 'English', value: 'en' },
    { name: 'Русский', value: 'ru' },
    { name: 'Қазақ', value: 'kz' }
  ];

  public headerMenuList = [
    {
      header: 'Инвесторам',
      menuList: InvestorsValues,
      active: false
    },
    {
      header: 'Участникам торгов',
      menuList: BiddersValues,
      active: false
    },
    {
      header: 'Листинг',
      menuList: ListingValues,
      active: false
    },
    {
      header: 'Информация',
      menuList: InformationValues,
      active: false
    },
    {
      header: 'Пресс-центр',
      menuList: PressCenterValues,
      active: false
    },
    {
      header: 'О Бирже',
      menuList: AboutExchangeValues,
      active: true
    }
  ]

  public headerMenuBigList = [
    {
      header: 'Рынки',
      menuList: MarketsValues
    },
    {
      header: 'Индексы и индикаторы',
      menuList: IndexesValues
    }
  ]

  public currentLang: ILan = this.languages[1];
  public show = '';


  constructor(private translateConfigService: TranslateConfigService, private router: RouterLinkService) {
    translateConfigService.changeLanguage('ru')
  }
  // constructor() {}
  

  ngOnInit(): void {
    // this.getLangChange()
    

  }

  showHeaderMenuList(value: any) {
    if (this.show === '') {
      this.show = value.header;
    } else if (this.show !== value.header && this.show != '') {
      this.show = value.header;
    } else if (this.show === value.header) {
      this.show = '';
    }
   

     console.log(value.active);

     if(value.active === true){this.router.setValue(value.active)}



  }
  

  // getLangChange() {
    // this.translateConfigService.getLangChange().subscribe(res => {
    //   this.currentLang = this.languages.find(f => f.value === res.lang)!;
    // });
  // }

  // public pickLanguage(item: ILan) {
  //   // this.translateConfigService.changeLanguage(item.value);
  // }

}

interface ILan {
  name: string;
  value: string;
}
