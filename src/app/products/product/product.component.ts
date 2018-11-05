import { Component, OnInit } from '@angular/core';
import {ProductService} from '../data/product.service';
import {Product} from './model/Product';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private productObesrvable: Observable<Product[]>;
  private products:Product[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
      this.productService.getAllProducts().subscribe(
        data=> this.products=data
      );
      console.log(this.products);
  }

  onTestClick(){
    alert('clcied');
  }

}
