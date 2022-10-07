import {Component, Input, OnInit} from '@angular/core';
import {
  ToolSpecificationsInterface
} from "@layout/pages/tool/tool-specifications/interfaces/tool-specifications-interface";
import {TranslateService} from "@ngx-translate/core";
import {getObjectByLang} from "@shared/export-data/getObjectByLang";

@Component({
  selector: 'app-paper-info',
  templateUrl: './paper-info.component.html',
  styleUrls: ['./paper-info.component.scss']
})
export class PaperInfoComponent implements OnInit {

  @Input() data: any;

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.data)
    }, 1000)
  }

  getObjectByLang(value: any) {
    return getObjectByLang(value, this.translateService.currentLang);
  }

}
