import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItempageComponent } from './itempage/itempage.component';
import { ItemtransComponent } from './itemtrans/itemtrans.component';
import {MasterComponent} from './master/master.component';
import { OutletComponent } from './outlet/outlet.component';
import {PurchasesComponent} from './purchases/purchases.component';
import {SalesComponent} from './sales/sales.component'
const routes: Routes = [
  {
    path:'',component:MasterComponent
  },
  {
    path:'purchases',component:PurchasesComponent
  },
  {
    path:'sales',component:SalesComponent
  },
  {
    path:'itemtrans',component:ItemtransComponent
  },
  {
    path:'itempage',component:ItempageComponent

  },
  {
    path:'outletpage',component:OutletComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
