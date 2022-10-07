import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterButtonService {

  public filterValues: any = [];

  constructor() { }
}
