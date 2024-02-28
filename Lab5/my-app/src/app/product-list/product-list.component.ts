import { Component, Input, Output, EventEmitter } from '@angular/core';

import {Product} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  @Output() removeProduct = new EventEmitter<Product>();
  @Output() likeProduct = new EventEmitter<Product>();

  onRemove(product: Product): void {
    this.removeProduct.emit(product);
  }

  onLike(product: Product): void {
    this.likeProduct.emit(product);
  }


}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
