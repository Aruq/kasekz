import {NgModule} from "@angular/core";
import * as component from './index';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MatMenuModule} from "@angular/material/menu";
import {DragScrollModule} from "ngx-drag-scroll";
import {AngularSvgIconModule} from "angular-svg-icon";

const components : any = [
  component.PathTreeComponent,
  component.TableComponent,
  component.ActualInformationComponent,
  component.FilterButtonComponent,
  component.TabsComponent,
  component.ProspectusComponent,
  component.TabsSecComponent,
  component.TableNewsComponent,
  component.SvgIconComponent,
  component.TradingviewComponent,
  component.TableIconsComponent,
  component.HeaderMenuSmallComponent,
  component.HeaderMenuBigComponent,
  component.DrpButtonV1Component,
  //list
  component.ListHeaderDescriptionComponent,
  component.ListFileDescriptionComponent,
  //pipes
  component.DdMmYyDatePipe
]
@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    DragScrollModule,
    AngularSvgIconModule
  ],
    exports: [
        ...components,
    ]
})
export class SharedModule {}
