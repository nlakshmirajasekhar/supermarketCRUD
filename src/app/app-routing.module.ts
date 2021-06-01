import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MasterComponent} from './master/master.component';
import {PurchasesComponent} from './purchases/purchases.component';
import {SalesComponent} from './sales/sales.component'
const routes: Routes = [
  {
    path:'',component:DashboardComponent
  },
  {
    path:'purchases',component:MasterComponent
  },
  {
    path:'sales',component:SalesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
