import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenCloseDivAnimService {

  constructor() { }

  init(fieldId: string, buttonId: string, buttonHeight: number) {
    const elem = document.getElementById(fieldId);
    const elem1 = document.getElementById(buttonId);
    if (elem && elem1) {
      elem.style.transition = 'height 0s'
      if (elem.style.height === buttonHeight + 'px') {
        elem.style.height = elem.scrollHeight + 'px';
      } else if (elem.style.height !== buttonHeight + 'px') {
        elem.style.height = elem.scrollHeight + 'px';
        setTimeout(() => {
          elem.style.height = buttonHeight + 'px';
        }, 10)
      }
    }
  }

  setFullSize(fieldId: string, buttonId: string, buttonHeight: number) {
    // // @ts-ignore
    // console.log(elem)
    // // @ts-ignore
    // console.log(elem1)
    const elem = document.getElementById(fieldId);
    const elem1 = document.getElementById(buttonId);
    if (elem && elem1) {
      elem.style.transition = 'height 0.5s'
      if (elem.style.height === buttonHeight + 'px') {
        elem.style.height = elem.scrollHeight + 'px';
      } else if (elem.style.height !== buttonHeight + 'px') {
        elem.style.height = elem.scrollHeight + 'px';
        setTimeout(() => {
          elem.style.height = buttonHeight + 'px';
        }, 10)
      }
    }
  }

  checkSize(fieldId: string, buttonId: string, buttonHeight: number) {
    const elem = document.getElementById(fieldId);
    const elem1 = document.getElementById(buttonId);
    if (elem && elem1) {
      return elem.style.height === buttonHeight + 'px';
    }
    return false
  }
}


// <div *ngFor="let prom of getValuesByTab(); index as i"
// class="open-close-div-anim {{i === 0 ? '' : 'mt-60__mt-16'}}"
//   [id]="'field-'+prom.name">
// <div class="fi-table-header f-nn f-col">
// <div class="f-nc gap-8" [id]="'btn-'+prom.name">
// <span
//   class="font-500 font-16_192 {{openCloseDivAnimService.checkSize('field-'+prom.name, 'btn-'+prom.name, 56) ? 'fc-main_2' : 'fc-main_1'}}">{{prom.name}}</span>
// <div (click)="openCloseDivAnimService.setFullSize('field-'+prom.name, 'btn-'+prom.name, 56)"
// class="{{openCloseDivAnimService.checkSize('field-'+prom.name, 'btn-'+prom.name, 56) ? 'svgs-main_2' : 'rotate-180 svgs-main_1'}}">
//   <svg-icon
// src="assets/images/const-svgs/arrows/arrow-up.svg">
//   </svg-icon>
//   </div>
//   </div>
//   <span
// class="font-300 font-14_196 fc-main_2 font-nowrap">инструментов – 365, эмитентов – 110</span>
// </div>
// <div class="mt-15">
// <app-table [instrument]="prom.code" [columns]="equitiesCols"
//   [values]="getTableValues(prom.code)"></app-table>
//   </div>
//   </div>
