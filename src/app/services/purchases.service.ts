import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

  constructor(private http:HttpClient) { }
 public getpurchases()
 {
   return this.http.get('https://localhost:5001/api/Purchases/getpurchasesbyID');
 }
 public getpurchasebyID(id:number)
 {
   return this.http.get('https://localhost:5001/api/purchases/purchasesbyitem'+id);

 }
 public setpurchase(obj:any)
 {
   return this.http.post('https://localhost:5001/api/purchases/postpurchasesdata',obj)
 }
 public deletepurchase(id:number)
 {
   
   return this.http.delete('https://localhost:5001/api/purchases/Deletepurchase'+id);
 }
 public purchasebyID(id:number)
 {
   return this.http.get("https://localhost:5001/api/purchases/purchaseByID"+id);
 }
}
