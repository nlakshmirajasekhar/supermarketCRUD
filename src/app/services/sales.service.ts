import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http:HttpClient) { }
  public getsales()
  {
    return this.http.get('https://localhost:5001/api/sales/getSalesbyid');

  }
  public getsalesbyID(id:number)
  {
    return this.http.get('https://localhost:5001/api/sales/salesbyID'+id);
  }
  public setsales(obj:any)
  {
    return this.http.post('https://localhost:5001/api/sales/postsalesdata',+obj);
  }
  public delete(id:number)
  {
    return this.http.delete('https://localhost:5001/api/sales/deletesalesbillno'+id);
  }
    public getsalesbyitem(id:number)
    {
      return this.http.get('https://localhost:5001/api/sales/salesbyitem'+id);

    }
    public updateitem(obj:any)
    {
      return this.http.get('https://localhost:5001/api/sales/salesbyitem',obj);

    }




  }

