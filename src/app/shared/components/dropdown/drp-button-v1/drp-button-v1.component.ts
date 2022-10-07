import {Component, Input, OnInit} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";

@Component({
  selector: 'app-drp-button-v1',
  templateUrl: './drp-button-v1.component.html',
  styleUrls: ['./drp-button-v1.component.scss']
})
export class DrpButtonV1Component implements OnInit {

  @Input() title: string = '';
  @Input() menuList: TabsInterface[] = [];

  public current: string = '';
  public opened: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.current = this.menuList[0].header;
  }

  setCurrent(value: string) {
    this.current = value
  }

  menuOpened() {
    this.opened = true;
  }

  menuClosed() {
    this.opened = false;
  }

  getClassName() {
    return this.opened ? ' rotate-180' : ' rotate-0'
  }
}
