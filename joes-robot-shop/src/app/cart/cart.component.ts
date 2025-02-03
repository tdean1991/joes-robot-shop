import { Component, OnInit } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bot-cart',
  imports: [ CommonModule ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.sass'
})
export class CartComponent implements OnInit {
  private cart: IProduct[] = [];
  constructor(private cartService: CartService) {}
  
  ngOnInit() 
  {
    this.cartService.getCart().subscribe(
      {
        next: (cart) => (this.cart = cart),
      }
    )
  }

  get cartItems()
  {
    return this.cart;
  }

  getTotalPrice() {
    return this.cart.reduce((prev, next) => {
          let discount = next.discount && next.discount > 0 ? 1 - next.discount: 1;
          return prev + next.price * discount;
        }, 0);
  }

  getImageUrl(product: IProduct)
  {
    return '/assets/images/robot-parts/' + product.imageName;
  }

  removeButtonClicked(product: IProduct)
  {
    this.cartService.remove(product)
  }

  
}
