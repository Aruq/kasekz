import {Injectable} from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {HttpService} from "@core/http/http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  public currentTab: TabsInterface = <TabsInterface>{};

  public pathTree: any = [
    {
      name: 'Торги'
    }
  ]

  public tabs: TabsInterface[] = [
    {
      header: 'Характеристика ценной бумаги',
      translateCode: '',
      link: 'specifications',
      active: false
    },
    {
      header: 'Торги',
      translateCode: '',
      link: 'bidding',
      active: false
    }
  ]

  constructor(private router: Router,
              private http: HttpClient,
              private httpService: HttpService) {
  }

  start() {

  }

  setCurrentTab(code: string | null, link: string) {
    this.tabs.map(x => x.active = false);
    this.tabs.forEach(tab => {
      if (tab.link === link) {
        tab.active = true;
        this.currentTab = tab;
        this.router.navigate(['tool/' + code]);
      }
    })
  }

  getToolsByName(name: string): Observable<any> {
    return this.httpService.getMethod(`kase.kz/tickers/ru/instrument-type/` + name);
  }

  getAll(name: string): Observable<any> {
    return this.httpService.getMethod(`kase.kz/${name}/all`);
  }

  getByEmitterCode(name: string, code: string) {
    return this.httpService.getMethod(`kase.kz/${name}/code?emitterCode=${code}`);
  }

  getByInstrumentCode(name: string, code: string) {
    return this.httpService.getMethod(`kase.kz/${name}/code?instrumentCode=${code}`);
  }

  getByIsin(name: string, isin: string) {
    return this.httpService.getMethod(`kase.kz/${name}/isin?isin=${isin}`);
  }

  // Equities
  getByNameAndCategoryAndType(name: string, category: string, type: string) {
    return this.httpService.getMethod(`kase.kz/${name}/premium?category=${category}&type=${type}`);
  }

  loadEquities(): Observable<any> {
    return this.getAll('equities');
  }

  loadKaseGlobal(): Observable<any> {
    return this.getAll('global')
  }

  loadFunds(): Observable<any> {
    return this.getAll('funds')
  }

  loadCurrency(): Observable<any> {
    return this.getAll('currency')
  }

  loadBonds(): Observable<any> {
    return this.getAll('bonds')
  }

  loadContracts(): Observable<any> {
    return this.getAll('contracts')
  }

  loadCBInvest() {
    return this.getToolsByName('none');
  }

  loadGovSecNatBank() {
    return this.getToolsByName('9');
  }

  loadGovSecMinFin() {
    return this.getToolsByName('10');
  }

  loadGovSecLocalExec() {
    return this.getToolsByName('11');
  }

  loadGovSecForIssuers() {
    return this.getToolsByName('12');
  }
}
