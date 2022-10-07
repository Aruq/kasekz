import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";

@Component({
  selector: 'app-prospectus',
  templateUrl: './prospectus.component.html',
  styleUrls: ['./prospectus.component.scss']
})
export class ProspectusComponent implements OnInit {

  @Input() paddingTop: string = '';
  @Input() range = {first: 0, last: 0};
  @Input() NumberFromLastYear: number = 0;
  @Input() customRange: TabsInterface[] = [];
  @Input() maxAutoFill: boolean = false;
  @Input() flipping: boolean = false;
  @Input() text: boolean = true;

  @Output() currentTab: any = new EventEmitter<string>();

  public tabs: TabsInterface[] = []

  constructor() {
  }

  ngOnInit(): void {
    for (let i = this.range.first; i <= this.range.last; i++) {
      this.tabs.push({
        header: i.toString(),
        translateCode: '',
        link: '',
        active: false
      })
    }
  }

  getEmitCurrentTab(tab: TabsInterface): void {
    this.currentTab.emit(tab);
  }
}
