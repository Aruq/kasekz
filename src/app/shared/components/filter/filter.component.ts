import {AfterViewInit, Component, OnInit} from '@angular/core';
import {OpenCloseDivAnimService} from "@shared/services/open-close-div-anim.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, AfterViewInit {

  constructor(public openCloseDivAnimService: OpenCloseDivAnimService) {
  }

  public open: boolean = false;
  public height: string = '0';

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.openCloseDivAnimService.init('filter-checkboxes', 'filter-btn', 56);
  }

}
