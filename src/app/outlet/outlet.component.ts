import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css']
})
export class OutletComponent implements OnInit {

  public itemslist:any=[]=[];
  public itemtemp:any=[]=[];
  constructor(private http:HttpClient) {

    this.getitems().subscribe(
      ress=>
      {
        this.itemslist=ress;
        this.itemtemp=this.itemslist;

      }

    )
    
   }

  ngOnInit(): void {



  }
  public getitems()
  {
    return this.http.get('');
  }


}
