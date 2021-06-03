import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  constructor(private http:HttpClient) { }
 public getpurchases()
 {
   return this.http.get('');
 }
 public getpurchasebyID()
 {
   return this.http.get('');

 }
 public setpurchase(obj:any)
 {
   return this.http.post('',+obj)
 }
 public deletepurchase()
 {
   return this.http.delete('');
 }
}
