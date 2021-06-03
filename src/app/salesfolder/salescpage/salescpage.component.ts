import { Component, OnInit } from '@angular/core';

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

}
