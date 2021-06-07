import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterservService } from '../services/masterserv.service';
@Component({
  selector: 'app-itemtrans',
  templateUrl: './itemtrans.component.html',
  styleUrls: ['./itemtrans.component.css']
})
export class ItemtransComponent implements OnInit {

  public it:any={
    Itemno:0,
    Itemname:'jk',
    Grpid:0,
    Uom:'lk'


  }
  constructor(private router:Router,private serv:MasterservService) { 
    this.serv
  }

  ngOnInit(): void {
  }
public back()
{
  this.router.navigateByUrl('itempage');
}
submit()
{
  console.log(this.it);

  this.serv.setitem(this.it).subscribe(
    res=>
    {
     
      console.log(res);
      return;
    }
  )
}


}
