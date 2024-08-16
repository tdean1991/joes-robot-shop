import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  @Input() product!:IProduct;
  @Output() buy = new EventEmitter();
  
  getImageUrl()
  {
    return '/assets/images/robot-parts/' + this.product.imageName;
  }


  getDiscountedClasses() {
    return this.product.discount > 0 ? ['strikethrough'] : [];
  }

  buyButtonClicked()
  {
    this.buy.emit(this.product);
  }
}
