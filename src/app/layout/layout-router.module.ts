import {RouterModule, Routes} from "@angular/router";
import * as component from './index';
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', redirectTo: 'financial-instruments', pathMatch: 'full'},
  {path: 'financial-instruments', component: component.FinancialToolsComponent},
  {path: 'tool', component: component.ToolComponent},
  {path: 'tool/:paperType/:emitterCode/:id', component: component.ToolComponent},
  // {path: 'tool/:instrument', component: component.ToolComponent},
  // {path: 'tool', component: component.ToolComponent},
  {path: 'issuers', component: component.ListOfIssuersComponent},
  {path: 'issuers/:paperType/:emitterCode/:id', component: component.IssuersComponent},
  {path: 'list-of-members', component: component.ListOfMembersComponent},
  {path: 'technologies', component: component.TechnologiesComponent},
  {path: 'about-us' , component: component.AboutUsComponent},
  {path: 'mission-value' , component: component.MissionValueComponent},
  {path:'management', component:component.ManagementComponent},
  {path:'board',component:component.BoardComponent},
  {path:'participation', component:component.ParticipationComponent},
  {path:'corparate-documents', component:component.CorparateDocumentsComponent},
  {path:'contacts',component:component.ContactsComponent},
  {path:'purchase', component:component.PurchaseComponent},
  {path:'stockholder', component:component.StockholderComponent},
  {path:'career', component:component.CareerComponent},
  {path:'history', component:component.HistoryComponent},
  {path:'governance', component:component.SocialComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRouterModule {
}
