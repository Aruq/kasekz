import {TabsInterface} from "@shared/interfaces/tabs-interface";

export const BoardTabs: TabsInterface[] = [
  {
    header: 'О нас',
    translateCode: 'О нас',
    link: 'about-us',
    active: false,
    
    
  },

  {
    header: 'Акционерам Биржи',
    translateCode: '',
    link: 'stockholder',
    active: false
  },
  {
    header: 'Устойчивое развитие',
    translateCode: '',
    link: 'governance',
    active: false
  },
  {
    header: 'Карьера',
    translateCode: '',
    link: 'career',
    active: false
  },
  {
    header: 'Закупки',
    translateCode: '',
    link: 'purchase',
    active: false
  },
  {
    header: 'Контакты и реквизиты',
    translateCode: '',
    link: 'contacts',
    active: false
  }
]
