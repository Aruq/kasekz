import { Component, OnInit } from '@angular/core';
import {IssuersService} from "@layout/pages/issuers/issuers.service";

@Component({
  selector: 'app-governing-bodies',
  templateUrl: './governing-bodies.component.html',
  styleUrls: ['./governing-bodies.component.scss']
})
export class GoverningBodiesComponent implements OnInit {

  constructor(private issuersService: IssuersService) { }

  ngOnInit(): void {
  }

  getStockholdersCols() {
    return this.issuersService.stockholdersCols
  }

  getStockholdersValues() {
    return this.issuersService.stockholdersValues
  }

  getStockholdersColsSettings() {
    return this.issuersService.stockholdersColsSettings;
  }

  getStockholdersValueSetting() {
    return this.issuersService.stockholdersValuesSettings;
  }

  getStockholdersQuantityCols() {
    return this.issuersService.stockholdersQuantityCols
  }

  getStockholdersQuantityValues() {
    return this.issuersService.stockholdersQuantityValues
  }

  getStockholdersQuantityColsSettings() {
    return this.issuersService.stockholdersQuantityColsSettings;
  }

  getStockholdersQuantityValueSetting() {
    return this.issuersService.stockholdersQuantityValuesSettings;
  }

  getGovernmentCols() {
    return this.issuersService.governmentCols
  }

  getGovernmentValues() {
    return this.issuersService.governmentValues
  }

  getGovernmentColsSettings() {
    return this.issuersService.governmentColsSettings;
  }

  getGovernmentValueSetting() {
    return this.issuersService.governmentValuesSettings;
  }

  getExecutiveAgencyCols() {
    return this.issuersService.governmentCols
  }

  getExecutiveAgencyValues() {
    return this.issuersService.governmentValues
  }

  getExecutiveAgencyColsSettings() {
    return this.issuersService.governmentColsSettings;
  }

  getExecutiveAgencyValueSetting() {
    return this.issuersService.governmentValuesSettings;
  }

}
