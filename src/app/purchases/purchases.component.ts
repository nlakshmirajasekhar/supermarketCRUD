import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getat(str:string)
  {
    switch(str)
    {
      case 'create':
        this.router.navigateByUrl('purchasepage');
        break;
      case 'search':
        this.router.navigateByUrl('purchasesview')
    }
    
    
  }
}
