import { Component, OnInit } from '@angular/core';
import {ListOfMembersService} from "@layout/pages/list-of-members/list-of-members.service";
import {TabsInterface} from "@shared/interfaces/tabs-interface";

@Component({
  selector: 'app-diploma-winners-of-nominations',
  templateUrl: './diploma-winners-of-nominations.component.html',
  styleUrls: ['./diploma-winners-of-nominations.component.scss']
})
export class DiplomaWinnersOfNominationsComponent implements OnInit {

  public tabsYears: TabsInterface[] = [];

  constructor(private listOfMembersService: ListOfMembersService) { }

  ngOnInit(): void {
    for (let i = 2021; i < 2050; i++) {
      this.tabsYears.push({
        header: i.toString(),
        translateCode: '',
        link: '',
        active: false
      })
    }
  }

  getDiplomaValues() {
    return this.listOfMembersService.diplomaValues;
  }

}
