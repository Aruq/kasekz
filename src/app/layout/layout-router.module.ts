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
  {path: 'about_us' , component: component.AboutUsComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRouterModule {
}
