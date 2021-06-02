import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MasterservService {

  constructor(private http:HttpClient) {

   }
   public getitems()
   {
     return this.http.get('https://bitappsinterns.azurewebsites.net/api/Items/GetItems');
   }
   
}
