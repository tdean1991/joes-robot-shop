import { Injectable } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

interface ILineItem {
  product: IProduct,
  qty: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);
  constructor(private http: HttpClient) {
    this.http.get<IProduct[]>('/api/cart').subscribe({
      next: (cart) => this.cart.next(cart)
    })
  }

  getCart(): Observable<IProduct[]> {
    return this.cart.asObservable();
  }
  
  add(product: IProduct) {
    const newCart = [...this.cart.getValue(), product];
    this.cart.next(newCart);
    
    this.http.post('/api/cart', newCart)
      .subscribe(() => {
        console.log(`product ${product.name} added to cart`);
      });
  }

  remove(product: IProduct)
  {
    let newCart = this.cart.getValue().filter((p) => p != product);
    this.cart.next(newCart);
    this.http.post('/api/cart', newCart)
      .subscribe(() => {
        console.log(`product ${product.name} removed from cart`);
      });
  }

}
