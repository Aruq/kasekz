import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {getPromotionsAreas, promotionsAreas} from "@shared/export-data/promotions-areas";
import {TranslateService} from "@ngx-translate/core";
import {getObjectByLang} from "@shared/export-data/getObjectByLang";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() columns: any[] = [];
  @Input() values: any[] = [];
  @Input() columnsSettings: any[] = [];
  @Input() valuesSettings: any[] = [];
  @Input() tableStyle: string = 'table-version-1';
  @Input() paperType: string = ''

  constructor(private router: Router,
              private translateService: TranslateService) {
  }

  ngOnInit(): void {
  }

  public getNumberOfProperties(value: string) {
    // console.log(value)
    return Array(Object.keys(value).length).fill(null).map((x, i) => i)
  }

  public getNumberOfCols() {
    return Array(this.columns.length).fill(null).map((x, i) => i)
  }

  navigateTo(navigateTo: any, paperType: string, emitterCode: string, instrumentCode: string, id: string) {
    let code = ''
    if (paperType === 'currency' || paperType === 'contracts') {
      code = instrumentCode;
    } else {
      code = emitterCode;
    }
    if (navigateTo === 'ToolSpecification') {
      return `/tool/${paperType}/${code}/${id}`;
    } else if (navigateTo === 'Issuer') {
      return `/issuers/${paperType}/${code}/${id}`;
    }
    return null
  }

  trueOrFalse(value1: string, value2: string, status: string) {
    if ((value1 || value2) && status) {
      return true;
    } else {
      return false;
    }
  }

  getObjectByLang(value: any) {
    return getObjectByLang(value, this.translateService.currentLang);
  }

}
