import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http:HttpClient) { }
  public getsales()
  {
    return this.http.get('');

  }
  public getsalesbyID()
  {
    return this.http.get('');
  }
  public setsales(obj:any)
  {
    return this.http.post('',+obj);
  }
  public delete()
  {
    return this.http.delete('');
  }
}
