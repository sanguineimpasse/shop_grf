import { Component, OnInit } from '@angular/core';
import { product_data } from 'src/data/shared_data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productData = product_data;

  ngOnInit(): void {
    console.log(this.productData);
  }
}
