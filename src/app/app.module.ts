import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { SalesComponent } from './sales/sales.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OutletComponent } from './outlet/outlet.component';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import {ItemtransComponent} from './itemtrans/itemtrans.component';
import { ItempageComponent } from './itempage/itempage.component';
import { OutlettraComponent } from './outlettra/outlettra.component';
import { PurchasecpageComponent } from './purchasefolder/purchasecpage/purchasecpage.component';
import { PurchaseviewpageComponent } from './purchasefolder/purchaseviewpage/purchaseviewpage.component';
import { SalescpageComponent } from './salesfolder/salescpage/salescpage.component';
import { SalesviewComponent } from './salesfolder/salesview/salesview.component'

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    PurchasesComponent,
    SalesComponent,
    NavbarComponent,
    OutletComponent,
    ItemtransComponent,
    ItempageComponent,
    OutlettraComponent,
    PurchasecpageComponent,
    PurchaseviewpageComponent,
    SalescpageComponent,
    SalesviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
