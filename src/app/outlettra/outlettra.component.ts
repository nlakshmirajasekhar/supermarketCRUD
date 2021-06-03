import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outlettra',
  templateUrl: './outlettra.component.html',
  styleUrls: ['./outlettra.component.css']
})
export class OutlettraComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public back()
{
  this.router.navigateByUrl('itempage');
}

}
