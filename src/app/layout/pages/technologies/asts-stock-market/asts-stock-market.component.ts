import { Component, OnInit } from '@angular/core';
import {TechnologiesService} from "@layout/pages/technologies/technologies.service";
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {TabsService} from "@shared/components/tabs/tabs.service";

@Component({
  selector: 'app-asts-stock-market',
  templateUrl: './asts-stock-market.component.html',
  styleUrls: ['./asts-stock-market.component.scss']
})
export class AstsStockMarketComponent implements OnInit {

  public tabsSecId: string = '';

  constructor(private technologiesService: TechnologiesService,
              private tabsService: TabsService) { }

  ngOnInit(): void {
  }

  getTabsSec() {
    return this.technologiesService.tabsSec;
  }

  getDistributions() {
    return this.technologiesService.distributions;
  }

  getDrivers() {
    return this.technologiesService.drivers;
  }

  getInstructions() {
    return this.technologiesService.instructions;
  }

  getFixInstructions() {
    return this.technologiesService.fixInstructions;
  }

  getTabCurrentTab(id: string): TabsInterface {
    return this.tabsService.getByKey(id);
  }

}
