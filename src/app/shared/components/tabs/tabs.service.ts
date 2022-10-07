import { Injectable } from '@angular/core';
import {TabsInterface} from "@shared/interfaces/tabs-interface";

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  public inventory: any = [];
  // const result = inventory.find( ({ name }) => name === 'cherries' );

  constructor() { }

  addByKey(id: string, value: TabsInterface) {
    this.inventory.push({
      id: id,
      currentTab: value
    })
  }

  setByKey(id: string, value: TabsInterface) {
    this.deleteByKey(id);
    this.addByKey(id, value);
  }

  getByKey(id: string): TabsInterface {
    return this.inventory.find( (x: { id: string; currentTab: TabsInterface }) => x.id === id).currentTab;
  }

  deleteByKey(id: string) {
    let someArray = this.inventory;
    someArray.forEach(function(el: { id: any; }, i: any) {
      if (el.id == id) someArray.splice(i, 1)
    })
    this.inventory = someArray;
  }

}
