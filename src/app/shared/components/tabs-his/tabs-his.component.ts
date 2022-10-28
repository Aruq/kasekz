import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {v4 as uuidv4} from 'uuid';
import {TabsService} from "@shared/components/tabs/tabs.service";

@Component({
  selector: 'app-tabs-his',
  templateUrl: './tabs-his.component.html',
  styleUrls: ['./tabs-his.component.scss']
})
export class TabsHisComponent implements OnInit, AfterViewInit {

  @Input() tabs: TabsInterface[] = [];
  @Input() id: string = ''
  @Input() classStyle: string = ''
  @Input() overflow: boolean = false;

  @Output() currentTab: any = new EventEmitter<string>();

  public pivot: any

  constructor(private tabsService: TabsService) {
  }

  ngAfterViewInit(): void {

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
    let temp;
    this.tabs.forEach((tab) => {
      if (tab.header !== value.header) {
        tab.active = false;
      } else if (tab.header === value.header) {
        tab.active = true;
        this.setCurrentTabByKey(tab)
        temp = tab;
      }
    })
    if (temp) {
      this.currentTab.emit(temp);
    }
  }

  clickLeft() {
    let tabsSec = document.getElementById(this.id);
    if (tabsSec) {
      // console.log(element.scrollLeft)
      // console.log(tabsSec.getBoundingClientRect().right)
      // console.log(element.getBoundingClientRect().right)
      // console.log(tabsSec.getBoundingClientRect().left - element.getBoundingClientRect().left)

      for (let i = this.tabs.length - 1; i > -1; i--) {
        console.log(tabsSec.getBoundingClientRect().left)
        // @ts-ignore
        console.log(document.getElementById(this.id + this.tabs[i].header).getBoundingClientRect().left)
        // @ts-ignore
        if (document.getElementById(this.id + this.tabs[i].header).getBoundingClientRect().right < tabsSec.getBoundingClientRect().left) {

          this.pivot = this.tabs[i].header

          this.scrollToBehavior(this.id + this.pivot);
          if (Number.parseInt(this.pivot) < Number.parseInt(this.tabs[0].header)) {
            this.pivot = Number.parseInt(this.pivot) - 1;
          } else {
            this.pivot = this.tabs[0].header;
          }
          return
        }
      }
    }
  }

  clickRight() {
    let tabsSec = document.getElementById(this.id);
    if (tabsSec) {
      // console.log(element.scrollLeft)
      // console.log(tabsSec.getBoundingClientRect().right)
      // console.log(element.getBoundingClientRect().right)
      // console.log(tabsSec.getBoundingClientRect().left - element.getBoundingClientRect().left)

      for (let i = 0; i < this.tabs.length; i++) {
        console.log(tabsSec.getBoundingClientRect().left)
        // @ts-ignore
        console.log(document.getElementById(this.id + this.tabs[i].header).getBoundingClientRect().left)
        // @ts-ignore
        if (document.getElementById(this.id + this.tabs[i].header).getBoundingClientRect().left > tabsSec.getBoundingClientRect().right) {

          this.pivot = this.tabs[i].header

          this.scrollToBehavior(this.id + this.pivot);
          if (Number.parseInt(this.pivot) + 1 < Number.parseInt(this.tabs[this.tabs.length - 1].header)) {
            this.pivot = Number.parseInt(this.pivot) + 1;
          } else {
            this.pivot = this.tabs[this.tabs.length - 1].header;
          }
          return
        }
      }
    }
  }

  scrollToBehavior(value: any) {
    let el = document.getElementById(value);
    setTimeout(() => {
      console.log(el)
      // @ts-ignore
      el.scrollIntoView({block: "nearest"})
    }, 0)
  }

}
