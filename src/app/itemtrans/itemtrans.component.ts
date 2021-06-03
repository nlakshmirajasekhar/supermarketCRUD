import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterservService } from '../services/masterserv.service';

@Component({
  selector: 'app-itemtrans',
  templateUrl: './itemtrans.component.html',
  styleUrls: ['./itemtrans.component.css']
})
export class ItemtransComponent implements OnInit {

  constructor(private router:Router,private serv:MasterservService) { 
    this.serv
  }

  ngOnInit(): void {
  }
public back()
{
  this.router.navigateByUrl('itempage');
}



}
