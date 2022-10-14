import { Component, OnInit } from '@angular/core';
import { products } from '../products/products';
import { IProducts } from '../products/IProducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  products: Array<IProducts> = products;
  index: IProducts = {} as IProducts;

  constructor(private cs: CartService) { }
  ngOnInit(): void { 
  }

  addToCart () {
    alert("Your product has been added :)");
    this.cs.addToCart (this.index);
  }
}
