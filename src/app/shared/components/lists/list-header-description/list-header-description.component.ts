import {Component, Input, OnInit} from '@angular/core';
import {
  ListHeaderDescriptionInterface
} from "@shared/components/lists/list-header-description/interfaces/list-header-description-interface";

@Component({
  selector: 'app-list-header-description',
  templateUrl: './list-header-description.component.html',
  styleUrls: ['./list-header-description.component.scss']
})
export class ListHeaderDescriptionComponent implements OnInit {

  constructor() { }

  @Input() data: ListHeaderDescriptionInterface[] = [];

  ngOnInit(): void {
  }

  getData() {
    return this.data;
  }

}
