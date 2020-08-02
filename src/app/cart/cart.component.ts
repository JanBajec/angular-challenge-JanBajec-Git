import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
import {Data} from '../data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private dataService: DataService, private router: Router) { }

  cartProducts: Data[] = [];
  cartSubtotalAmount: number;

  ngOnInit() {
    this.cartProducts = this.getMyCart();
    this.cartSubtotalAmount = this.getSubtotalAmount();
  }

  @Output() updateCartTotalAmount = new EventEmitter<number>();

  getMyCart(): Data[] {
    const productIds = this.getProductIds();
    return this.dataService.getProductsById(productIds);
  }

  getProductIds(): string[] {
    return this.cartService.getCart();
  }

  removeFromCart(productId: string): void {
    this.cartService.removeFromCart(productId);
    this.cartProducts = this.getMyCart();
    this.cartSubtotalAmount = this.getSubtotalAmount();
    this.updateCartTotalAmount.emit(this.cartSubtotalAmount);
  }

  getPrice(productId: string): number {
    return this.dataService.getPrice(productId);
  }

  getSubtotalAmount(): number {
    return this.cartService.getTotalAmount();
  }

  checkout(): void {
    this.cartService.checkout();
    if (confirm('Your payment was successful! ')) {
      this.router.navigate(['/home']);
    }
    this.cartSubtotalAmount = this.getSubtotalAmount();
    this.updateCartTotalAmount.emit(this.cartSubtotalAmount);
  }

  checkifItemInCartExists(): boolean {
    if (this.cartSubtotalAmount === 0) {return false; } else {return true; }
  }

  submitPromoCode(): void {

  }

}
