import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterservService } from '../services/masterserv.service';

@Component({
  selector: 'app-outlettra',
  templateUrl: './outlettra.component.html',
  styleUrls: ['./outlettra.component.css']
})
export class OutlettraComponent implements OnInit {
  public outletobj:any={
    outletname:'',
    address:'',
    phoneno:'',
    }
  constructor(private router:Router,private ser:MasterservService) { }

  ngOnInit(): void {
  }

  public back()
{
  this.router.navigateByUrl('itempage');
}
submit()
{
  var obj={
  outletobj:this.outletobj,
  trans:1 
  }
  this.ser.setoutlet(obj).subscribe(
   res=> {
     console.log(res);
      
    }
  )
  this.clear();
}
update()
{
  
}

clear()
{
  this.outletobj.outlet='';
  this.outletobj.address='';
  this.outletobj.phoneno='';
}

}
