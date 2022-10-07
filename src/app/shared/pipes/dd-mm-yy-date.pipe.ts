import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'DdMmYyDate'
})
export class DdMmYyDatePipe extends DatePipe implements PipeTransform {

  override transform(value: any, args?: any): any {
    if (value === '-') {
      return value;
    }
    return super.transform(value, 'dd.MM.y');
  }
}
