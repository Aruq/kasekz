import {Component, OnInit} from '@angular/core';
import {IssuersService} from "@layout/pages/issuers/issuers.service";
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {TabsService} from "@shared/components/tabs/tabs.service";
import {v4 as uuidv4} from "uuid";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-issuers',
  templateUrl: './issuers.component.html',
  styleUrls: ['./issuers.component.scss']
})
export class IssuersComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute,
              public issuersService : IssuersService,
              public tabsService: TabsService) { }

  public tabId: string = '';
  public paperType: string = '';
  public emitterCode: string = '';

  ngOnInit(): void {
    this.paperType = this.activatedRoute.snapshot.params['paperType'];
    this.emitterCode = this.activatedRoute.snapshot.params['emitterCode'];
    this.issuersService.pathTree.push({name: this.emitterCode})
    this.tabId = uuidv4();
    window.scrollTo({top: 0})
  }

  getPathTree() {
    return this.issuersService.pathTree;
  }

  getTabs(): TabsInterface[] {
    return this.issuersService.tabs;
  }

  getTabCurrentTab(): TabsInterface {
    return this.tabsService.getByKey(this.tabId);
  }

  getTabsSec() {
    return this.issuersService.tabsSec;
  }

  getIssuersInfoCols() {
    return this.issuersService.issuersInfoCols
  }

  getIssuersInfoValues() {
    return this.issuersService.issuersInfoValues;
  }

  getIssuersInfoColsSettings() {
    return this.issuersService.issuersInfoColsSettings;
  }

  getIssuersInfoValueSetting() {
    return this.issuersService.issuersInfoValuesSettings;
  }

  getIssuersInfoThTdSetting() {
    return this.issuersService.issuersInfoThTd;
  }

}
