import {NgModule} from "@angular/core";
import * as component from './index';
import {RouterModule} from "@angular/router";
import {MatMenuModule} from "@angular/material/menu";
import {SharedModule} from "@shared/shared.module";
import {CommonModule} from "@angular/common";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from '@angular/material/divider';
import {AngularSvgIconModule} from "angular-svg-icon";

@NgModule({
  declarations: [
    component.FooterComponent,
    component.HeaderComponent,
    component.PageComponent
  ],
    imports: [
        MatDialogModule,
        RouterModule,
        SharedModule,
        MatMenuModule,
        CommonModule,
        AngularSvgIconModule,
        MatDividerModule
    ]
})
export class CoreModule {
}
