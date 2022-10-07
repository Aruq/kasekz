import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {Router} from "@angular/router";
import {TabsService} from "@shared/components/tabs/tabs.service";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, OnDestroy {
  @Input() tabs: TabsInterface[] = [];
  @Input() id: string = ''
  @Output() currentTab: any = new EventEmitter<string>();

  constructor(public router: Router,
              public tabsService: TabsService) {
  }

  ngOnInit(): void {
    this.tabsService.addByKey(this.id, this.tabs[0]);
    this.clickTab(this.tabs[0]);
  }

  emitCurrentTab(value: TabsInterface) {
    this.currentTab.emit(value);
  }

  setCurrentTabByKey(value: TabsInterface) {
    this.tabsService.setByKey(this.id, value);
  }

  getCurrentTabByKey(): TabsInterface {
    return this.tabsService.getByKey(this.id);
  }

  clickTab(value: TabsInterface) {
    let temp: any;
    this.tabs.forEach((tab) => {
      if (tab.header !== value.header) {
        tab.active = false;
      } else if (tab.header === value.header) {
        tab.active = true;
        this.setCurrentTabByKey(tab)
        // console.log(this.getCurrentTabByKey())
        temp = tab;
      }
    })
    if (temp) {
      this.currentTab.emit(temp.link);
    }
  }

  ngOnDestroy(): void {
    this.tabsService.deleteByKey(this.id);
  }

}
