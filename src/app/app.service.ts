import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsResponse } from './product';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

    getProducts(skip: number, rows: number = 10, sortField?: string, sortOrder?: string, filters?: any): Observable<ProductsResponse> {
      let endpoint = `https://dummyjson.com/products?limit=${rows}&skip=${skip}`;

      // Add sorting and filtering parameters if they exist and are supported by the backend
      if (sortField && sortOrder) {
          endpoint += `&sortField=${sortField}&sortOrder=${sortOrder}`;
      }
      if (filters) {
          endpoint += `&filters=${JSON.stringify(filters)}`;  // Assuming backend accepts filters as a JSON string
      }

      return this.http.get<ProductsResponse>(endpoint);
  }

}
