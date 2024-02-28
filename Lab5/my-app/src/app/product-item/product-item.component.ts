import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Product} from "../products";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  @Output() removeProduct = new EventEmitter<Product>();
  @Output() likeProduct = new EventEmitter<Product>();

  share(link: string) {
    window.location.href = `https://t.me/share/url?url=${link}`;
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  onRemove(): void {
    this.removeProduct.emit(this.product);
  }

  onLike(): void {
    this.likeProduct.emit(this.product);
  }
}
