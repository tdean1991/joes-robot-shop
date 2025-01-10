import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from './product.model';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'bot-catalog',
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.sass'
})
export class CatalogComponent {
  products: any
  filter: string = '';
  
  ngOnInit()
  {
    this.productSvc.getProducts().subscribe(products => {
      this.products = products;
    })
  }
  constructor(private cartSvc: CartService, private productSvc: ProductService) 
  {
  }  

  addToCart(product: IProduct)
  {
    this.cartSvc.add(product);
  }

  getFilteredProducts()
  {
    return this.filter === '' 
    ? this.products
    : this.products.filter((product:any) => product.category === this.filter);
  }
}
