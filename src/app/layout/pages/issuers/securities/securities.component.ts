import { Component, OnInit } from '@angular/core';
import {IssuersService} from "@layout/pages/issuers/issuers.service";

@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.scss']
})
export class SecuritiesComponent implements OnInit {

  constructor(private issuersService: IssuersService) { }

  ngOnInit(): void {
  }

  getSecuritiesCols() {
    return this.issuersService.securitiesCols
  }

  getSecuritiesValues() {
    return this.issuersService.securitiesValues
  }

  getSecuritiesColsSettings() {
    return this.issuersService.securitiesColsSettings;
  }

  getSecuritiesValueSetting() {
    return this.issuersService.securitiesValuesSettings;
  }
}
