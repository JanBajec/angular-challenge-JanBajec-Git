import {Injectable} from '@angular/core';
import {LocalStorage, LocalStorageService} from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(public local: LocalStorageService) {}

  public products: string[] = [];

  addToCart(productId: string): void {
    this.products = this.getCart();
    if (this.products === null) {this.products = []; }
    this.products.push(productId);
    this.local.set('products', this.products);
  }

  getCart(): any {
    return this.local.get('products');
  }

  checkIfAlreadyInCart(productId: string): boolean {
    this.products = this.getCart();
    if (this.products === null ) {return false; }
    for (const product of this.products) {
      if (productId === product) {return true; }
    }
    return false;
  }

  checkout(): void {
    // to do
    this.local.clear();
  }

  removeFromCart(productId: string): void {
    this.products = this.getCart();
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i] === productId) { delete this.products[i]; }
    }
    this.local.set('products', this.products);
  }
}
