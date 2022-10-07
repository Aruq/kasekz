import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {ModalPositionService} from "@shared/services/modal-position.service";

export interface checkboxes {
  checkboxes: {}
}

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})
export class FilterButtonComponent implements OnInit {

  public screenWidth: any;
  public screenHeight: any;
  public show = false;
  public x = 9999;
  public y = 9999;
  @Output() filterValues: any = new EventEmitter<any>();

  public mainSite = {
    header: 'Основная площадка',
    translateCode: '',
    types: [
      {
        header: 'Акции',
        translateCode: '',
        categories: [
          {
            header: 'Категория “Премиум”',
            code: 'официальный, основная площадка, категория премиум',
            translateCode: '',
            active: false
          },
          {
            header: 'Категория “Стандарт”',
            code: 'официальный, основная площадка, категория стандарт',
            translateCode: '',
            active: false
          },
        ]
      },
      {
        header: 'Долговые ценные бумаги',
        translateCode: '',
        categories: [
          {
            header: 'категория “Облигации”',
            code: 'официальный, основная площадка, категория облигации',
            translateCode: '',
            active: false
          },
          {
            header: 'категория “Коммерческие облигации”',
            code: 'официальный, основная площадка, категория коммерческие облигации',
            translateCode: '',
            active: false
          },
        ]
      },

    ],
  }

  public alternativeSite = {
    header: 'Альтернативная площадка',
    translateCode: '',
    types: [
      {
        header: '',
        translateCode: '',
        categories: [
          {
            header: 'Акции',
            code: 'Акции альтернативной площадки',
            translateCode: '',
            active: false
          }
        ]
      },
      {
        header: 'Долговые ценные бумаги',
        translateCode: '',
        categories: [
          {
            header: 'Категория “Коммерческие облигации”',
            code: 'Категория "Коммерческие облигации" альтернативной площадки',
            translateCode: '',
            active: false
          },
          {
            header: 'Облигации',
            code: 'Категория "Облигации" альтернативной площадки',
            translateCode: '',
            active: false
          },
        ]
      },

    ],
  }

  public otherInstruments = {
    header: 'Другие инструменты',
    translateCode: '',
    types: [
      {
        header: 'Государственные ценные бумаги',
        translateCode: '',
        categories: [
          {
            header: 'Национальный банк РК',
            code: 'govSecNatBank',
            translateCode: '',
            active: false
          },
          {
            header: 'Министерство финансов РК',
            code: 'govSecMinFin',
            translateCode: '',
            active: false
          },
          {
            header: 'Местные исполнительные органы',
            code: 'govSecLocalExec',
            translateCode: '',
            active: false
          },
          {
            header: 'Иностранные эмитенты',
            code: 'govSecForIssuers',
            translateCode: '',
            active: false
          },
          {
            header: 'KASE Global',
            code: 'KASE Global',
            translateCode: '',
            active: false
          },
          {
            header: 'Ценные бумаги инвестиционных фондов',
            code: 'Ценные бумаги инвестиционных фондов',
            translateCode: '',
            active: false
          },
          {
            header: 'Ценные бумаги МФО',
            code: 'Категория "Облигации" альтернативной площадки',
            translateCode: '',
            active: false
          },
          {
            header: 'Производные ценные бумаги',
            code: 'Производные ценные бумаги',
            translateCode: '',
            active: false
          },
          {
            header: 'Нелистинговые ценные бумаги',
            code: 'Нелистинговые ценные бумаги',
            translateCode: '',
            active: false
          },
          {
            header: 'Иностранные валюты',
            code: 'Иностранные валюты',
            translateCode: '',
            active: false
          },
          {
            header: 'Операции автоматического репо',
            code: 'Операции автоматического репо',
            translateCode: '',
            active: false
          },
          {
            header: 'Фьючерсы',
            code: 'Фьючерсы',
            translateCode: '',
            active: false
          },
          {
            header: 'Производные ценные бумаги',
            code: 'Производные ценные бумаги',
            translateCode: '',
            active: false
          }
        ]
      }
    ],
  }

  constructor(public modalPositionService: ModalPositionService) {
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  chooseAll() {
    this.mainSite.types.map(x => x.categories.map(y => y.active = true));
    this.alternativeSite.types.map(x => x.categories.map(y => y.active = true));
    this.otherInstruments.types.map(x => x.categories.map(y => y.active = true));
  }

  clearAll() {
    this.mainSite.types.map(x => x.categories.map(y => y.active = false));
    this.alternativeSite.types.map(x => x.categories.map(y => y.active = false));
    this.otherInstruments.types.map(x => x.categories.map(y => y.active = false));
    let array = [...this.mainSite.types, ...this.alternativeSite.types, ...this.otherInstruments.types]
      .flatMap(({categories}) => categories)
      .filter(x => x.active);
    this.filterValues.emit(array);
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

  submit() {
    let array = [...this.mainSite.types, ...this.alternativeSite.types, ...this.otherInstruments.types]
      .flatMap(({categories}) => categories)
      .filter(x => x.active);
    this.filterValues.emit(array);
  }

  getX() {
    return this.x + 'px';
  }

  getY() {
    return this.y + 'px';
  }

}
