import {Component, Input, OnInit} from '@angular/core';
import {NewsInterface} from "@shared/components/table-news/interfaces/news-interface";
import {NewsValuesSettings} from "@shared/components/table-news/table/news-values-settings";
import {NewsColsSettings} from "@shared/components/table-news/table/news-cols-settings";
import {NewsCols} from "@shared/components/table-news/table/news-cols";

@Component({
  selector: 'app-table-news',
  templateUrl: './table-news.component.html',
  styleUrls: ['./table-news.component.scss']
})
export class TableNewsComponent implements OnInit {
  @Input() columns: any[] = NewsCols
  @Input() values: NewsInterface[] = []

  constructor() { }

  ngOnInit(): void {
  }

  getNewsColsSettings() {
    return NewsColsSettings;
  }

  getNewsValueSetting() {
    return NewsValuesSettings;
  }

  getNewsThTdSetting() {
    return NewsValuesSettings;
  }

}
