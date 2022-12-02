import { Component, Inject, OnInit } from '@angular/core';
import {SocialService} from "@layout/pages/social-governance/social-governance.service";
import { TabsService } from '@shared/components/tabs/tabs.service';
import { TabsInterface } from '@shared/interfaces/tabs-interface';
import {v4 as uuidv4} from "uuid";
import{esg} from '@layout/pages/social-governance/table-cols/esg'
import { ToolService } from '../tool/tool.service';
import {flatten} from "@shared/export-data/flatten";
import { map } from 'rxjs';
@Component({
  selector: 'app-social-governance',
  templateUrl: './social-governance.component.html',
  styleUrls: ['./social-governance.component.scss']
})
export class SocialComponent implements OnInit {

  public tabId: string = '';
  public esgValues:any[]=[];
  public esg:any[]=esg;
  public filterValues: any = [];
  constructor(private socialService: SocialService,
              private tabsService: TabsService,   private toolService: ToolService) { }

  ngOnInit(): void {
    this.connect();
    this.tabId = uuidv4();
    Object.defineProperty(Array.prototype, 'flat', {
      value: function(depth = 1) {
        return this.reduce(function (flat: any, toFlatten: any) {
          return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
        }, []);
      }
    });

    this.toolService.loadEquities().pipe(map((res) => {
      return res.map((item: any) => {
        return flatten(item);
      })
    })).subscribe((data) => {
      this.esgValues = data;
       console.log(data)
    });
   
  }
  connect() {
    throw new Error('Method not implemented.');
  }
  convert() {
  }

  getEmitCurrentTab(link: string): void {
    this.socialService.setCurrentTab(link);
  }

  getTabs() {
    return this.socialService.tabs;
  }

  getTabCurrentTab(): TabsInterface {
    return this.tabsService.getByKey(this.tabId);
  }
  getTabsSec() {
    return this.socialService.tabsSec;
  }

  getPathTree() {
    return this.socialService.pathTree;
  }
  getEmitFilterValues(values: any[]): void {
    console.log(values)
    this.filterValues = values;
  }
 
}
