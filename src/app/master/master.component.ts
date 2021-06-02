import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MasterservService } from '../services/masterserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
public view0=true;
  public view1=false;
 

  constructor(private serv:MasterservService,private router:Router) { 
   
  }

  ngOnInit(): void {
  }


  getat(str:string){
    switch(str)
    {
      case 'Items':
       this.router.navigateByUrl('itempage');
        break;
      case 'Outlets':
        this.router.navigateByUrl('outletpage');

        break;
      case 'Price LIst':
        this.router.navigateByUrl('itempage');
        break;

       
    }
  
  }
//find items based on the input search





  
}
