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
import { SidenavComponent } from './sidenav/sidenav.component';
import { ItempageComponent } from './itempage/itempage.component'

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    PurchasesComponent,
    SalesComponent,
    NavbarComponent,
    OutletComponent,
    ItemtransComponent,
    SidenavComponent,
    ItempageComponent
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
