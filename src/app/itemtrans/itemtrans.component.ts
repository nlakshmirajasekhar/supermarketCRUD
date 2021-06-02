import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itemtrans',
  templateUrl: './itemtrans.component.html',
  styleUrls: ['./itemtrans.component.css']
})
export class ItemtransComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
public back()
{
  this.router.navigateByUrl('itempage');
}

}
