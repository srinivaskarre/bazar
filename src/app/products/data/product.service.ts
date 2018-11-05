import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { Product } from '../product/model/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {    }
   
  getAllProducts(): Observable<Product[]>{
     return this.httpClient.get<Product[]>('./assets/dummyproducts.json')
    //  .subscribe(
    //    result=>(
    //     result.json().response.map((product: Product)=> new Product().deserialize(product))
    //    )
    //  );
  }
}
