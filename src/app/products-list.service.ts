import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

  constructor(private http: HttpClient) { }

  private apiListUrl = "https://dummyjson.com/products";

  getList(){
    return this.http.get(this.apiListUrl);
  }
}
