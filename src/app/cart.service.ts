import {Injectable} from '@angular/core';
import {LocalStorage, LocalStorageService} from 'angular-web-storage';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(public local: LocalStorageService, private dataService: DataService) {}

  public productIds: string[] = [];
  totalAmount: number;

  addToCart(productId: string): void {
    this.productIds = this.getCart();
    if (this.productIds === null) {this.productIds = []; }
    this.productIds.push(productId);
    this.local.set('products', this.productIds);
  }

  getCart(): any {
    return this.local.get('products');
  }

  checkIfAlreadyInCart(productId: string): boolean {
    this.productIds = this.getCart();
    if (this.productIds === null ) {return false; }
    for (const product of this.productIds) {
      if (productId === product) {return true; }
    }
    return false;
  }

  checkout(): void {
    // to do
    this.local.clear();
    this.totalAmount = this.getTotalAmount();
  }

  removeFromCart(productId: string): void {
    this.productIds = this.getCart();
    for (let i = 0; i < this.productIds.length; i++) {
      if (this.productIds[i] === productId) { delete this.productIds[i]; }
    }
    this.local.set('products', this.productIds);
    this.totalAmount = this.getTotalAmount();
  }

  getTotalAmount(): number {
    const productIds = this.getCart();
    let totalAmount: number = 0;
    if (productIds === null) {return totalAmount; }
    for (const productId of productIds) {
      totalAmount = totalAmount + this.dataService.getPrice(productId);
    }
    return totalAmount;
  }
}
