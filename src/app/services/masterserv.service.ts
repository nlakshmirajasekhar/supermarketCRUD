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
     return this.http.get('https://localhost:5001/api/Items/GetItems');
   }
   public setitem(obj:any)
   {
     return this.http.post('',+obj);
   }
   public getout()
   {
     return this.http.get("https://localhost:5001/api/outlet/GetOutlets")
   }
   public setoutlet(obj:any)
   {
     return this.http.post('',+obj);
   }
   public deloutlet(obj:any)
   {
     return this.http.delete('');
   }
}
