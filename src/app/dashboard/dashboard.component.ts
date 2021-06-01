import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


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
