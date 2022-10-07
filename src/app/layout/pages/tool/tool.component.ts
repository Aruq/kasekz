import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToolService} from "@layout/pages/tool/tool.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {TabsService} from "@shared/components/tabs/tabs.service";
import {v4 as uuidv4} from "uuid";
import {getPromotionsAreas} from "@shared/export-data/promotions-areas";
import {map} from "rxjs";
import {flatten} from "@shared/export-data/flatten";

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit, OnDestroy {

  chart2: any
  public tabId: string = '';
  public paperType: string = '';
  public paperCode: string = '';
  public paperId: number = 0;

  paramId: string = '';
  paramInstrument: string = '';
  paramTab: string = '';

  toolValue: any = []

  constructor(public toolService: ToolService,
              public tabsService: TabsService,
              public activatedRoute: ActivatedRoute,
              public router: Router) {
  }

  ngOnInit(): void {
    this.tabId = uuidv4();
    this.paperType = this.activatedRoute.snapshot.params['paperType'];
    this.paperCode = this.activatedRoute.snapshot.params['emitterCode'];
    this.paperId = this.activatedRoute.snapshot.params['id'];
    this.toolService.pathTree.push({name: this.paperCode});

    if (this.paperType === 'currency' || this.paperType === 'contracts') {
      this.toolService.getByInstrumentCode(this.paperType, this.paperCode).pipe(map(res => {
        return res.map((item: any) => {
          return flatten(item);
        })
      }))
        .subscribe(data => {
          this.toolValue = data.filter((x: { id: number; }) => x.id == this.paperId)[0];
          console.log(this.toolValue)
        })

    } else {
      this.toolService.getByEmitterCode(this.paperType, this.paperCode).pipe(map(res => {
        return res.map((item: any) => {
          return flatten(item);
        })
      }))
        .subscribe(data => {
          this.toolValue = data.filter((x: { id: number; }) => x.id == this.paperId)[0];
          console.log(this.toolValue)
        })

    }


    if (!this.paperType) {
      this.router.navigate(['/financial-instruments'])
    }
  }

  getValues(instrument: string | null): any {
    // switch (instrument) {
    //   case 'официальный, основная площадка, категория премиум':
    //     this.toolService.loadPromoPremium().subscribe((data) => {
    //       this.toolSpecValue = data;
    //     });
    //     break;
    //   case 'официальный, основная площадка, категория облигации':
    //     this.toolService.loadBonds().subscribe((data) => {
    //       this.toolSpecValue = data;
    //     });
    //     break;
    //   case 'официальный, основная площадка, категория коммерческие облигации':
    //     this.toolService.loadBondsCommerce().subscribe((data) => {
    //       this.toolSpecValue = data;
    //     });
    //     break;
    //   case 'cbInvest':
    //     this.toolService.loadCBInvest().subscribe((data) => {
    //       return data;
    //     });
    //     break;
    //   case 'govSecNatBank':
    //     this.toolService.loadGovSecNatBank().subscribe((data) => {
    //       this.toolSpecValue = data;
    //     });
    //     break;
    //   case 'govSecMinFin':
    //     this.toolService.loadGovSecMinFin().subscribe((data) => {
    //       this.toolSpecValue = data;
    //     });
    //     break;
    //   case 'govSecLocalExec':
    //     this.toolService.loadGovSecLocalExec().subscribe((data) => {
    //       this.toolSpecValue = data;
    //     });
    //     break;
    //   case 'govSecForIssuers':
    //     this.toolService.loadGovSecForIssuers().subscribe((data) => {
    //       this.toolSpecValue = data;
    //     });
    //     break;
    // }
    return []
  }

  getTabCurrentTab(): TabsInterface {
    return this.tabsService.getByKey(this.tabId);
  }

  // getEmitCurrentTab(link: string): void {
  //   this.toolService.setCurrentTab(this.paramInstrument, link);
  // }

  ngOnDestroy() {
  }

  // createChart2() {
  //   this.chart2.remove();
  //   this.chart2 = createChart(document.getElementById("indexes2")!, {
  //     width: document.getElementById('indexes2')!.offsetWidth,
  //     height: 450,
  //     timeScale: {fixLeftEdge: true, fixRightEdge: true},
  //     layout: {backgroundColor: 'rgba(0,0,0,0)', textColor: this.textColor}
  //   });
  //   }

}
