import { Component, OnInit } from '@angular/core';
import { PurchasesService } from 'src/app/services/purchases.service';

@Component({
  selector: 'app-purchaseviewpage',
  templateUrl: './purchaseviewpage.component.html',
  styleUrls: ['./purchaseviewpage.component.css']
})
export class PurchaseviewpageComponent implements OnInit {


  public purch:any=[];
  public purchtemp:any=[];
  constructor(private purserver:PurchasesService) {

    this.purserver.getpurchases().subscribe(
      res=>
      {
        var des=res;
        this.purch=des;
        this.purchtemp=this.purch;
        console.log(this.purchtemp);
      }
    )


   }

  ngOnInit(): void {
  }

}
