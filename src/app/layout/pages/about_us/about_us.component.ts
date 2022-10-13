import { Component, OnInit } from '@angular/core';

interface link {
  title: string,
  link: string
}
interface market{
  type:string,
  title:string,
  link:string
}

@Component({
  selector: 'app-about_us',
  templateUrl: './about_us.component.html',
  styleUrls: ['./about_us.component.scss']
})
export class AboutUsComponent implements OnInit {

  links: link[] = [
    {
      title: 'Миссия и ценности',
      link: "/mission-value"
    },
    {
      title: 'История Биржи',
      link: "/#"
    },
    {
      title: 'Руководство',
      link: "/#"
    },
    {
      title: 'Комитеты и комиссии',
      link: "/#"
    },

    {

      title: 'Участие в профессиональных организациях',
      link: "/#"
    },
    {

      title: 'Корпоративные документы',
      link: "/#"
    },
  ];

  markets:market[]=[

   {
    type:'Срочный рынок',
    title:'На рынке обращаются: фьючерс на индекс KASE, фьючерс валютную пару USD/KZT_TOM, фьючерсы на наиболее ликвидные акции.',
    link:'/#'
   },
   {
    type:'Валютный рынок',
    title:'На рынке ведутся торги следующими валютами: RUB/KZT, USD/KZT, CNY/KZT, EUR/KZT и EUR/USD.',
    link:'/#'
   },
   {
    type:'Денежный рынок',
    title:'Биржа предоставляет услуги автоматического репо с корзиной ГЦБ, автоматического репо с корзиной ОДГУ, автоматического репо с НЦБ, прямого репо с ГЦБ и НЦБ, SWAP_1D, SWAP_2D.',
    link:'/#'
 }

]

  constructor() { }

  ngOnInit(): void {
  }

}







