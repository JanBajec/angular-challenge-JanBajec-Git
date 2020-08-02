import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService: CartService) { }

  // @Input() cartTotalAmount: number;

  ngOnInit() {
    // this.cartTotalAmount = this.cartService.getTotalAmount();
  }

}
