import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItempageComponent } from './itempage/itempage.component';
import { ItemtransComponent } from './itemtrans/itemtrans.component';
import {MasterComponent} from './master/master.component';
import { OutletComponent } from './outlet/outlet.component';
import { OutlettraComponent } from './outlettra/outlettra.component';
import { PurchasecpageComponent } from './purchasefolder/purchasecpage/purchasecpage.component';
import { PurchaseviewpageComponent } from './purchasefolder/purchaseviewpage/purchaseviewpage.component';
import {PurchasesComponent} from './purchases/purchases.component';
import {SalesComponent} from './sales/sales.component';
import { SalescpageComponent } from './salesfolder/salescpage/salescpage.component';
import { SalesviewComponent } from './salesfolder/salesview/salesview.component';

const routes: Routes = [
  {
    path:'',component:MasterComponent
  },
  {
    path:'purchases',component:PurchasecpageComponent
  },
  {
    path:'createsales',component:SalescpageComponent
  },
  {
    path:'searchsale',component:SalesviewComponent
  },
  {
    path:'itemtrans',component:ItemtransComponent
  },
  {
    path:'itempage',component:ItempageComponent

  },
  {
    path:'outletpage',component:OutletComponent

  },
  {
    path:'outlettrans',component:OutlettraComponent
  },
  {
    path:'purchasepage',component:PurchasecpageComponent
  },
  {
    path:'purchasesview',component:PurchaseviewpageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
