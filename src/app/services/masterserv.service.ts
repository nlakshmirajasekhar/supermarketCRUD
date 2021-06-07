import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'charset': 'UTF-8',
    'Access-Control-Allow-Origin': '*'
  })
}
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
     return this.http.post('https://localhost:5001/api/Items/setItems',obj);
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
