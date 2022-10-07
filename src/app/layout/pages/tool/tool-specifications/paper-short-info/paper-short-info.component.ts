import {Component, Input, OnInit} from '@angular/core';
import {getObjectByLang} from "@shared/export-data/getObjectByLang";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-paper-short-info',
  templateUrl: './paper-short-info.component.html',
  styleUrls: ['./paper-short-info.component.scss']
})
export class PaperShortInfoComponent implements OnInit {

  @Input() data: any;

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
  }

  getObjectByLang(value: any) {
    return getObjectByLang(value, this.translateService.currentLang);
  }


}
