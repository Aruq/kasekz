import { Component, OnInit } from '@angular/core';
import {ListOfIssuersService} from "@layout/pages/list-of-issuers/list-of-issuers.service";

@Component({
  selector: 'app-list-of-issuers',
  templateUrl: './list-of-issuers.component.html',
  styleUrls: ['./list-of-issuers.component.scss']
})
export class ListOfIssuersComponent implements OnInit {

  public searchCode: string = '';

  constructor(public listOfIssuersService: ListOfIssuersService) { }

  ngOnInit(): void {
    this.listOfIssuersService.start();
  }

  getTabs() {
    return this.listOfIssuersService.tabs;
  }

  getOfficialListCols() {
    return this.listOfIssuersService.officialListCols
  }

  getOfficialListValues() {
    return this.listOfIssuersService.getOfficialListValues().filter(x => x.code.toLowerCase().includes(this.searchCode.toLowerCase()));
  }

  getOfficialListColsSettings() {
    return this.listOfIssuersService.officialListColsSettings;
  }

  getOfficialListValueSetting() {
    return this.listOfIssuersService.officialListValuesSettings;
  }

}
