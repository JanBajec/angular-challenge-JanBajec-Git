import {Component, DoCheck, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {DataService} from '../data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, DoCheck {

  constructor(private cartService: CartService, private dataService: DataService, private router: Router) { }

  cartProducts: any = [];
  totalAmount: number;

  ngOnInit() {
    this.cartProducts = this.getMyCart();
    this.totalAmount = this.getTotalAmount();
  }

  ngDoCheck() {
    this.cartProducts = this.getMyCart();
    this.totalAmount = this.getTotalAmount();
  }

  getMyCart(): any {
    const productIds = this.getProductIds();
    return this.dataService.getProductsById(productIds);
  }

  getProductIds(): string[] {
    return this.cartService.getCart();
  }

  removeFromCart(productId: string): void {
    this.cartService.removeFromCart(productId);
  }

  getPrice(productId: string): number {
    return this.dataService.getPrice(productId);
  }

  getTotalAmount(): number {
    const productIds = this.getProductIds();
    let totalAmount: number = 0;
    if (productIds === null) {return totalAmount; }
    for (const productId of productIds) {
      totalAmount = totalAmount + this.getPrice(productId);
    }
    return totalAmount;
  }

  checkout(): void {
    this.cartService.checkout();
    if (confirm("Your payment was successful! ")) {
      this.router.navigate(['/home']);
    }
  }

  checkifItemInCartExists(): boolean {
    if (this.totalAmount === 0) {return false; } else {return true; }
  }

}
