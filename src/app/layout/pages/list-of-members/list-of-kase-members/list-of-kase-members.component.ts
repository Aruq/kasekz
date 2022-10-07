import { Component, OnInit } from '@angular/core';
import {ListOfMembersService} from "@layout/pages/list-of-members/list-of-members.service";

@Component({
  selector: 'app-list-of-kase-members',
  templateUrl: './list-of-kase-members.component.html',
  styleUrls: ['./list-of-kase-members.component.scss']
})
export class ListOfKaseMembersComponent implements OnInit {

  constructor(private listOfMembersService: ListOfMembersService) { }

  ngOnInit(): void {
  }

  getTabsListOfKaseMembers() {
    return this.listOfMembersService.tabsListOfKaseMembers;
  }

  getMembersCols() {
    return this.listOfMembersService.membersCols
  }

  getMembersValues() {
    if (this.listOfMembersService.memberValues.records.length > 0) {
      return this.listOfMembersService.memberValues;
    }
    else {
      return {
        orders: '0',
        page: '0',
        records: [
          {
            name: 'Altyn Bank',
            siteLink: 'https://www.altyn-i.kz',
            currency: true,
            stock: false,
            derivatives: true
          },
          {
            name: 'Altyn Bank',
            siteLink: 'https://www.altyn-i.kz',
            currency: true,
            stock: false,
            derivatives: true
          },
          {
            name: 'Altyn Bank',
            siteLink: 'https://www.altyn-i.kz',
            currency: true,
            stock: false,
            derivatives: true
          },
        ],
        size: 0,
        totalPages: 0,
        totalRecords: 0
      }

    }
  }

  getMembersColsSettings() {
    return this.listOfMembersService.membersColsSetting;
  }

  getMembersValueSetting() {
    return this.listOfMembersService.membersValuesSetting;
  }

}
