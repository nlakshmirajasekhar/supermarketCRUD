import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  makechange(str:string)
  {
    switch(str)
    {
      case 'master':
        this.router.navigateByUrl('');
        break;
      case 'purchases':
        this.router.navigateByUrl('purchases');
        break;
      case 'sales':
        this.router.navigateByUrl('sales');
        break;
    }


  }

}
