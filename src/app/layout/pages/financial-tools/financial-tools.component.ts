import {Component, OnDestroy, OnInit} from '@angular/core';
import {equitiesCols} from "./table-cols/equities-cols";
import {Stomp, StompSubscription, CompatClient} from '@stomp/stompjs'
import {environment} from "@environment/environment";
import {HttpClient} from "@angular/common/http";
import {v4 as uuidv4} from "uuid";
import {FinancialToolsService} from "@layout/pages/financial-tools/financial-tools.service";
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {TabsService} from "@shared/components/tabs/tabs.service";
import {OpenCloseDivAnimService} from "@shared/services/open-close-div-anim.service";
import {ToolService} from "@layout/pages/tool/tool.service";
import {first, map, Observable} from "rxjs";
import {fundsCols} from "@layout/pages/financial-tools/table-cols/funds-cols";
import {bondsCols} from "@layout/pages/financial-tools/table-cols/bonds-cols";
import {currencyCols} from "@layout/pages/financial-tools/table-cols/currency-cols";
import {contractsCols} from "@layout/pages/financial-tools/table-cols/contracts-cols";
import {kaseGlobalCols} from "@layout/pages/financial-tools/table-cols/kaseGlobal-cols";
import {flatten} from "@shared/export-data/flatten";

@Component({
  selector: 'app-financial-tools',
  templateUrl: './financial-tools.component.html',
  styleUrls: ['./financial-tools.component.scss']
})
export class FinancialToolsComponent implements OnInit, OnDestroy {

  public pathTree: any = [
    {
      name: 'Инвесторам'
    },
    {
      name: 'Финансовые инструменты'
    }
  ]

  public equitiesValues: any[] = [];
  public bondsValues: any = [];
  public fundsValues: any[] = [];
  public currencyValues: any = [];
  public globalValues: any = [];
  public contractsValues: any = [];

  public equitiesColumns: any[] = equitiesCols;
  public bondsColumns: any[] = bondsCols;
  public fundsColumns: any[] = fundsCols;
  public currencyColumns: any[] = currencyCols;
  public globalColumns: any[] = kaseGlobalCols;
  public contractsColumns: any[] = contractsCols;

  public promotionCols: any[] = equitiesCols;
  public bondsCols: any[] = equitiesCols;

  public tabId: string = '';
  public filterValues: any = [];
  private subscriptions: Observable<any>[] = [];

  private stompClient: CompatClient | undefined
  private received_messages: any = [];

  public searchCode: string = '';

  constructor(private http: HttpClient,
              private tabsService: TabsService,
              private toolService: ToolService,
              private financialToolsService: FinancialToolsService) {
  }

  ngOnInit() {
    this.connect();
    this.tabId = uuidv4();
    // const flatten = (ob: any) => {
    //   let result: any = {};
    //   for (const i in ob) {
    //     if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
    //       const temp: any = flatten(ob[i]);
    //       for (const j in temp) {
    //         result[j] = temp[j];
    //       }
    //     }
    //     else {
    //       result[i] = ob[i];
    //     }
    //   }
    //   return result;
    // };
    Object.defineProperty(Array.prototype, 'flat', {
      value: function(depth = 1) {
        return this.reduce(function (flat: any, toFlatten: any) {
          return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
        }, []);
      }
    });

    this.toolService.loadEquities().pipe(map(res => {
      return res.map((item: any) => {
        return flatten(item);
      })
    })).subscribe((data) => {
      this.equitiesValues = data;
      // console.log(data)
    });
    this.toolService.loadBonds().pipe(map(res => {
      return res.map((item: any) => {
        return flatten(item);
      })
    })).subscribe((data) => {
      this.bondsValues = data;
      // console.log(data)
    });
    this.toolService.loadFunds().pipe(map(res => {
      return res.map((item: any) => {
        return flatten(item);
      })
    })).subscribe((data) => {
      this.fundsValues = data;
      // console.log(data)
    });
    this.toolService.loadCurrency().pipe(map(res => {
      return res.map((item: any) => {
        return flatten(item);
      })
    })).subscribe((data) => {
      this.currencyValues = data;
      console.log(data)
    });
    this.toolService.loadKaseGlobal().pipe(map(res => {
      return res.map((item: any) => {
        return flatten(item);
      })
    })).subscribe((data) => {
      this.globalValues = data;
      // console.log(data)
    });
    this.toolService.loadContracts().pipe(map(res => {
      return res.map((item: any) => {
        return flatten(item);
      })
    })).subscribe((data) => {
      this.contractsValues = data;
      // console.log(data)
    });
  }



  convert() {
  }

  connect() {
    // let socket = environment.sockjs_url;
    // this.stompClient = Stomp.client(socket);
    // this.stompClient.heartbeat.outgoing = 5000;
    // this.stompClient.heartbeat.incoming = 5000;
    // this.stompClient.reconnect_delay = 5000;
    // const _this = this;
    // this.stompClient.connect(
    //   {}, function (frame: any) {
    //     _this.subscription = _this.stompClient?.subscribe("/topic/data", tick => {
    //       _this.received_messages.push(JSON.parse(tick.body));
    //     })
    //   }
    // )
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
  }

  getTabs(): TabsInterface[] {
    return this.financialToolsService.tabs;
  }

  getTabCurrentTab(): TabsInterface {
    return this.tabsService.getByKey(this.tabId);
  }

  getEmitFilterValues(values: any[]): void {
    console.log(values)
    this.filterValues = values;
  }

  getAllInstruments() {
    let array = [...this.equitiesValues, ...this.bondsValues, ...this.fundsValues, ...this.currencyValues, ...this.globalValues];
    return array.filter(x => this.filterValues.find((y: { code: string; }) => y.code === x.code));
  }

  getTableColumns(value: string): any {
    switch (value) {
      case 'equities':
        return this.equitiesColumns;
      case 'global':
        return this.globalColumns;
      case 'bonds':
        return this.bondsColumns;
      case 'funds':
        return this.fundsColumns;
      case 'currency':
        return this.currencyColumns;
      case 'contracts':
        return this.contractsColumns;
    }
  }

  getTableValues(value: string): any[] {
    let values = [];
    switch (value) {
      case 'equities':
        values = this.equitiesValues;
        break;
      case 'global':
        values = this.globalValues;
        break;
      case 'bonds':
        values = this.bondsValues;
        break;
      case 'funds':
        values = this.fundsValues;
        break;
      case 'currency':
        values = this.currencyValues;
        break;
      case 'contracts':
        values = this.contractsValues;
        break;
    }
    if (this.searchCode) {
      return values.filter((x: { secCode: string; }) => x.secCode.toLowerCase().includes(this.searchCode.toLowerCase()));
    }
    // if (this.promotionValues) {
    //   return this.promotionValues;
    // }
    return values;
  }

  ngOnDestroy() {
      this.disconnect();
  }
}
