import { Component, OnInit } from '@angular/core';
import {TechnologiesService} from "@layout/pages/technologies/technologies.service";
import {v4 as uuidv4} from "uuid";
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {TabsService} from "@shared/components/tabs/tabs.service";

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  public tabId: string = '';

  constructor(private technologiesService: TechnologiesService,
              private tabsService: TabsService) { }

  ngOnInit(): void {
    this.tabId = uuidv4();
  }

  getEmitCurrentTab(link: string): void {
    this.technologiesService.setCurrentTab(link);
  }

  getTabs() {
    return this.technologiesService.tabs;
  }

  getTabCurrentTab(): TabsInterface {
    return this.tabsService.getByKey(this.tabId);
  }

  getPathTree() {
    return this.technologiesService.pathTree;
  }

}
