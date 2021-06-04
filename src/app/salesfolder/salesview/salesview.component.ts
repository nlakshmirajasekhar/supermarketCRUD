import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-salesview',
  templateUrl: './salesview.component.html',
  styleUrls: ['./salesview.component.css']
})
export class SalesviewComponent implements OnInit {

  public salesbill:any=[];
  public salesbiltmp:any=[];
  constructor(private salesser:SalesService) { 
    this.salesser.getsales().subscribe(
      res=>{
        var ds=res;
        this.salesbill=ds;
        this.salesbiltmp=this.salesbill;
      console.log(res);
      })


  }

  ngOnInit(): void {
  }

}
