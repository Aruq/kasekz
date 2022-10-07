import {NgModule} from "@angular/core";
import * as component from './index';
import {LayoutRouterModule} from "@layout/layout-router.module";
import {SharedModule} from "@shared/shared.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {AngularSvgIconModule} from "angular-svg-icon";

@NgModule({
  declarations: [
    component.FinancialToolsComponent,

    component.ToolComponent,
    component.ToolBiddingComponent,
    component.ToolSpecificationsComponent,
    component.PaperInfoComponent,
    component.PaperShortInfoComponent,

    component.ListOfIssuersComponent,
    component.IssuersComponent,
    component.SecuritiesComponent,
    component.GoverningBodiesComponent,
    component.InformationDisclosureComponent,
    component.NewsComponent,

    component.ListOfMembersComponent,
    component.ActivityRankingComponent,
    component.DiplomaWinnersOfNominationsComponent,
    component.ListOfKaseMembersComponent,

    component.TechnologiesComponent,
    component.AstsStockMarketComponent,
  ],
  imports: [
    LayoutRouterModule,
    SharedModule,
    CommonModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    AngularSvgIconModule
  ]
})
export class LayoutModule {}
