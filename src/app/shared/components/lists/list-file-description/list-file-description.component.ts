import {Component, Input, OnInit} from '@angular/core';
import {
  ListFileDescriptionInterface
} from "@shared/components/lists/list-file-description/interfaces/list-file-description-interface";

@Component({
  selector: 'app-list-file-description',
  templateUrl: './list-file-description.component.html',
  styleUrls: ['./list-file-description.component.scss']
})
export class ListFileDescriptionComponent implements OnInit {

  constructor() { }

  @Input() data: ListFileDescriptionInterface[] = [];

  ngOnInit(): void {
  }

  getData() {
    return this.data;
  }

}
