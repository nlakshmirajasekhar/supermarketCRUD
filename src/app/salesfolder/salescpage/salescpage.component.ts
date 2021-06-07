import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-salescpage',
  templateUrl: './salescpage.component.html',
  styleUrls: ['./salescpage.component.css']
})
export class SalescpageComponent implements OnInit {

  public addline:any=
  {
    item:'',
    qty:'',
    rate:'',
    uom:'',
    description:'',
    batch:'',
    cost:'',
  }
public linestosave:any=[];

  public addhead:any={
    customer:'',
    address:'',
    zip:'',
    country:'',
    city:'',
    district:'',
    phoneno:'',
    mail:'',
    fax:'',
    invoiceno:'',
    date:'',
    transporter:'Navata',

  }
  public displaylines:any=[]=[];

  constructor(private servcrea:SalesService) { 


  }

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
    // this.clearlines();
  }

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
console.log(obj)

this.servcrea.setsales(obj).subscribe(
 res=> {
   console.log(res);

  }
)


  }



}
