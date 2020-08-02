import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {CartService} from '../cart.service';
import {Data} from '../data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any = [];

  constructor(private dataService: DataService, private cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.dataService.getProducts();
  }

  filterSearch(newProducts: Data): void {
    this.products = newProducts;
  }

  sortAlphabetically(newProducts: Data): void {
    this.products = newProducts;
  }

  filterByAmount(newProducts: Data): void {
    this.products = newProducts;
  }

}
