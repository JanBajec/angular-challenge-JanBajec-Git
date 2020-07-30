import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {CartService} from '../cart.service';
import {Options} from 'ng5-slider';
import {Data} from "../data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any = [];
  searchInput = '';

  value = 0;
  highValue = 10000;
  options: Options = {
    floor: 0,
    ceil: 10000
  };

  constructor(private dataService: DataService, private cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.dataService.getProducts();
  }

  filterSearch(): void {
    const regex = new RegExp(this.searchInput);
    const newProducts: Data[] = [];
    this.products = this.dataService.getProducts();
    for (const product of this.products) {
      if (regex.test(product.cardTitle)) {
        newProducts.push(product);
      }
    }
    this.products = newProducts;
  }

  sortAlphabetically(ascending: boolean): void {
    if (ascending) {
      this.products.sort((a, b) => {
        if (a.cardTitle < b.cardTitle) { return -1; }
        if (a.cardTitle > b.cardTitle) { return 1; }
        return 0;
      });
    } else {
      this.products.sort((a, b) => {
        if (a.cardTitle > b.cardTitle) { return -1; }
        if (a.cardTitle < b.cardTitle) { return 1; }
        return 0;
      });
    }
  }

  filterByAmount(): void {
    const newProducts: Data[] = [];
    this.products = this.dataService.getProducts();
    for (const product of this.products) {
      const listOfPlans = product.listOfPlans;
      let amount = 0;
      for (const plan of listOfPlans) {
        if (plan.price.currency === 'EUR') {
          amount = plan.price.amount;
        } else if (plan.price.currency === 'USD') {
          amount = plan.price.amount * 0.85; // 1USD = 0,85EUR
        }
      }
      if (amount > this.value && amount < this.highValue) {
        newProducts.push(product);
      }
    }
    this.products = newProducts;
  }

}
