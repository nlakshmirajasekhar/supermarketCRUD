import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router) { }

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
  console.log(obj);
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
