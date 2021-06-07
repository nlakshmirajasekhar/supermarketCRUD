import { Component, OnInit } from '@angular/core';
import { PurchasesService } from 'src/app/services/purchases.service';

@Component({
  selector: 'app-purchasecpage',
  templateUrl: './purchasecpage.component.html',
  styleUrls: ['./purchasecpage.component.css']
})
export class PurchasecpageComponent implements OnInit {
 
  public addline:any=
  {
    item:'',
    qty:0,
    rate:0,
    uom:0,
    description:'',
    batch:'',
    cost:0,
  }
public linestosave:any=[];

  public addhead:any={
    Supplier:'',
    Zip:0,
    Country:'',
    City:'',
    Mobileno:'',
    Invoiceno:'',
    Purchasedate:'',
    Transporter:'Navata',
    Baseamt:0,
    Taxes:0,
    Discount:0,
    Totamount:0
  }
  public displaylines:any=[]=[];


  constructor(private purchaseser:PurchasesService) { }

  ngOnInit(): void {
  }
  addlines()
  {

    this.displaylines.push(
      {
        item:this.addline.item,
        qty:this.addline.qty,
        rate:this.addline.rate,
        uom:this.addline.uom,
        description:this.addline.description,
        batch:this.addline.batch,
        cost:this.addline.qty*this.addline.rate,
      }
    );
    this.addsum();
    this.clear();
    console.log(this.displaylines);
    console.log(this.addhead);
    
    // console.log(this.displaylines);
    // this.clearlines();
  }
  // clearlines()
  // {
  //    this.addline.item='',
  //    this.addline.qty='',
  //    this.addline.rate='',
  //    this.addline.uom='',
  //    this.addline.description='',
  //    this.addline.batch='',
  //    this.addline.cost=''
    
  
  // }
  savedetails()
  {

    if(this.displaylines.length==0)
    {
      alert('enter details');
    } 

for(var i=0;i<this.displaylines.length;i++)
{
this.linestosave.push({
  transactionid:0,
  lineno:i+1,
  item:this.displaylines.item,
  qty:this.displaylines.qty,
  rate:this.displaylines.rate,
  uom:this.displaylines.uom,
  description:this.displaylines.description,
  batch:this.displaylines.batch,
  cost:this.displaylines.cost,  

})
  }
console.log(this.linestosave);
    var obj={
      lines:this.linestosave,

      header:this.addhead,
      txn:1

    }
console.log(obj);
this.purchaseser.setpurchase(obj).subscribe(
 res=> {
   console.log(res);

  }
)



  }


  deleterow(obj:any)
{
  var ind=this.displaylines.indexOf(obj);
  if(ind>=0)
  {
    this.displaylines.splice(ind,1)
  }



  }
  clear()

  {
    this.addline.item='',
    this.addline.qty=0,
    this.addline.rate=0,
    this.addline.uom=0,
    this.addline.description='',
    this.addline.batch='',
    this.addline.cost=0
  }
  addsum()
  {
    for(var i=0;i<=this.displaylines.length;i++)
    {
    this.addhead.Baseamt=this.addhead.Baseamt+this.displaylines[i].cost;
  }
     this.makedel();

}
makedel()
{
  this.addhead.Totamount=this.addhead.Baseamt-this.addhead.Discount+this.addhead.Taxes;
  

} 
}
