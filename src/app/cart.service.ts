import { Injectable } from '@angular/core';
import { IProducts } from './products/IProducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array<IProducts> = [];
  // all functions that can be used
  constructor() { }
  addToCart (product: IProducts) {
    this.items.push(product);
  }
  getItems () {
    return this.items;
  }
  clearCart () {
    this.items = [];
    return this.items;
  }
}
