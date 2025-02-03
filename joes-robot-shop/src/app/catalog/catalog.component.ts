import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from './product.model';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'bot-catalog',
  imports: [CommonModule, ProductDetailsComponent, RouterModule],
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
    });
    this.route.queryParams.subscribe((params) =>
    {
      this.filter = params['filter'] ?? '';
    })
  }
  constructor(
    private cartSvc: CartService, 
    private productSvc: ProductService, 
    private router: Router,
    private route: ActivatedRoute) 
  {
  }  

  addToCart(product: IProduct)
  {
    this.cartSvc.add(product);
    this.router.navigate(['/cart']);
  }

  getFilteredProducts()
  {
    return this.filter === ''
    ? this.products
    : this.products.filter((product:any) => product.category === this.filter);
  }
}
