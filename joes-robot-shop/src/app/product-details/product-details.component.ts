import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.sass'
})
export class ProductDetailsComponent 
{
  @Input()
  product!: IProduct;
  @Output() buy = new EventEmitter()

  getDiscountedClasses()
  {
    return this.product.discount > 0 ? ['strikethrough'] : [];
  }

  buyButtonClicked()
  {
    this.buy.emit();
  }  

  getImageUrl()
  {
    if (!this.product) return '';
    return '/assets/images/robot-parts/' + this.product.imageName;
  }

}
