import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MasterservService } from '../services/masterserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css']
})
export class OutletComponent implements OnInit {

  
  public outletlist:any=[]=[];
  public outlettemp:any=[]=[];
  constructor(private getout:MasterservService,private router:Router) {

    this.getout.getout().subscribe(
      ress=>
      {
        console.log(ress);
        this.outletlist=ress;
        this.outlettemp=this.outletlist;

      }

    )
    
   }

  ngOnInit(): void {



  }
create()
{
   this.router.navigateByUrl('outlettrans')

}  

  

}
