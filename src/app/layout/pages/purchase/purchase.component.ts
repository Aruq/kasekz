
import {Component,OnInit} from '@angular/core';
import {PurchaseService} from '@layout/pages/purchase/purchase.service';
import { TabsInterface } from '@shared/interfaces/tabs-interface';

interface custom{
  plan:string
}
@Component({
    selector:'app-purchase',
    templateUrl:'./purchase.component.html',
    styleUrls:['./purchase.component.scss']
})

export class PurchaseComponent implements OnInit{

 public link: string | undefined; 


getTableValues(arg0: any): any {
throw new Error('Method not implemented.');
}
getTableColumns(arg0: any): any {
throw new Error('Method not implemented.');
}
getTabCurrentTab() {
throw new Error('Method not implemented.');
}
    public pathTree: any = [
        {
          name: 'О Бирже',
          link:'/about-us'
        },
        {
          name: 'План закупок'
        }
      ]
    
customs:custom[]=[{
  plan:'План закупок АО “Казахстанская фондовая биржа” по состоянию на 18 октября 2021 года'
},
{
  plan:'План закупок АО “Казахстанская фондовая биржа” по состоянию на 03 сентября 2021 года'
},
{
  plan:'План закупок АО “Казахстанская фондовая биржа” по состоянию на 18 августа 2021 года'
},
{
  plan:'План закупок АО “Казахстанская фондовая биржа” по состоянию на 04 августа октября 2021 года'
},
{
  plan:'План закупок АО “Казахстанская фондовая биржа” по состоянию на 30 июля 2021 года'
},
{
  plan:'План закупок АО “Казахстанская фондовая биржа” по состоянию на 23 июля 2021 года'
},
{
  plan:'План закупок АО “Казахстанская фондовая биржа” по состоянию на 29 июня 2021 года'
},
{
  plan:'План закупок АО “Казахстанская фондовая биржа” по состоянию на 11 июня 2021 года'
}
]
  
constructor( public purchaseService :PurchaseService){}
ngOnInit():void
{
    this.purchaseService.start();
     }getTabs(): TabsInterface[]{
    return this.purchaseService.tabs;
  }
 
}