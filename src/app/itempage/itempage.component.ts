import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterservService } from '../services/masterserv.service';

@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.component.html',
  styleUrls: ['./itempage.component.css']
})
export class ItempageComponent implements OnInit {
  public items:any;
  public searchitem:string='f';
public itemnamet:string='';
public uomt:string='';
public itemprice:string='';
  public tmp:any;

  constructor(private serv:MasterservService,private router:Router) {
    this.serv.getitems().subscribe(
      res=>
      {
        var details=res;
        this.items=details;
        this.tmp=this.items;
        console.log(this.items);
      }
    );
   }

  ngOnInit(): void {
  }
  public finditem()
{
  this.tmp=this.items.filter(a=>a.materialName.includes(this.searchitem));
  console.log(this.tmp);

}
public trans()
{
  
  this.router.navigateByUrl('itemtrans');

}

}
