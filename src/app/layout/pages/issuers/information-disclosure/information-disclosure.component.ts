import { Component, OnInit } from '@angular/core';
import {IssuersService} from "@layout/pages/issuers/issuers.service";

@Component({
  selector: 'app-information-disclosure',
  templateUrl: './information-disclosure.component.html',
  styleUrls: ['./information-disclosure.component.scss']
})
export class InformationDisclosureComponent implements OnInit {

  constructor(public issuersService: IssuersService) { }

  ngOnInit(): void {
  }

  getMenuListDocumentType() {
    return this.issuersService.menuListDocumentType;
  }

  getMenuListYear() {
    return this.issuersService.menuListYear;
  }

  getDisclosureCols() {
    return this.issuersService.informationDisclosureCols
  }

  getDisclosureValues() {
    return this.issuersService.informationDisclosureValues
  }

  getDisclosureColsSettings() {
    return this.issuersService.informationDisclosureColsSettings;
  }

  getDisclosureValueSetting() {
    return this.issuersService.informationDisclosureSettings;
  }

  getDisclosureThTd() {
    return this.issuersService.informationDisclosureThTd;
  }

}
