import { Component, OnInit } from '@angular/core';
import {IssuersService} from "@layout/pages/issuers/issuers.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private issuersService: IssuersService) { }

  ngOnInit(): void {
  }

  getNewsValues() {
    return this.issuersService.newsValues;
  }

}
