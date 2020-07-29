import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {CartService} from '../cart.service';
import {ActivatedRoute} from '@angular/router';
import {LocalStorageService} from 'angular-web-storage';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  product: any;

  constructor(private dataService: DataService, private cartService: CartService, private route: ActivatedRoute, private local: LocalStorageService) {}

  ngOnInit() {
    this.route.params.subscribe(params => this.product = this.dataService.getProductById(params._id));
  }

  addToCart(productId: string): void {
    this.cartService.addToCart(productId);
  }

  checkifProductAlreadyExistInCart(productId: string): boolean {
    return this.cartService.checkIfAlreadyInCart(productId);
  }


}
