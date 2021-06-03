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
    qty:'',
    rate:'',
    uom:'',
    description:'',
    batch:'',
    cost:'',
  }


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
    this.addline.cost=this.addline.qty*this.addline.rate;

    this.displaylines.push(this.addline);
    console.log(this.displaylines);
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

}
