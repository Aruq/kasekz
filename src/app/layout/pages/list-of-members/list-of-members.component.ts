import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListOfMembersService} from "@layout/pages/list-of-members/list-of-members.service";
import {environment} from "@environment/environment";
import {CompatClient, Stomp, StompSubscription} from "@stomp/stompjs";
import {StompClientService} from "@shared/services/stomp-client.service";
import {v4 as uuidv4} from "uuid";
import {TabsService} from "@shared/components/tabs/tabs.service";
import {TabsInterface} from "@shared/interfaces/tabs-interface";

@Component({
  selector: 'app-list-of-members',
  templateUrl: './list-of-members.component.html',
  styleUrls: ['./list-of-members.component.scss']
})
export class ListOfMembersComponent implements OnInit, OnDestroy {

  private stompClient: CompatClient | undefined;

  public tabId: string = '';

  constructor(private listOfMembersService: ListOfMembersService,
              public tabsService: TabsService) { }

  ngOnInit(): void {
    this.listOfMembersService.start();
    this.tabId = uuidv4();
  }

  getTabs() {
    return this.listOfMembersService.tabs;
  }

  getTabCurrentTab(): TabsInterface {
    return this.tabsService.getByKey(this.tabId);
  }

  ngOnDestroy(): void {
    this.listOfMembersService.end();
  }

}
