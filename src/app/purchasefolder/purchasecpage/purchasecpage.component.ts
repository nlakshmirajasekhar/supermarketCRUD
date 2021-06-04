import { Component, OnInit } from '@angular/core';

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
    supplier:'',
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


  constructor() { }

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
    this.clear();
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
console.log(obj)



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
}
