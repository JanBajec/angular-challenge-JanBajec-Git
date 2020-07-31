import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Options} from 'ng5-slider';
import {Data} from '../data';
import {DataService} from '../data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() filterSearchCart = new EventEmitter<Data[]>();
  @Output() sortAlphabeticallyCart = new EventEmitter<Data[]>();
  @Output() filterByAmountCart = new EventEmitter<Data[]>();

  cartProducts: Data[] = [];

  searchInput = '';
  filterValues = {
    low: 0,
    high: 10000
  };
  options: Options = {
    floor: 0,
    ceil: 10000
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.cartProducts = this.dataService.getProducts();
  }

  onFilterSearch(): void {
    const regex = new RegExp(this.searchInput);
    const newProducts: Data[] = [];
    this.cartProducts = this.dataService.getProducts();
    for (const product of this.cartProducts) {
      if (regex.test(product.cardTitle)) {
        newProducts.push(product);
      }
    }
    this.cartProducts = newProducts;
    this.filterSearchCart.emit(this.cartProducts);
  }

  onSortAlphabetically(ascending: boolean): void {
    if (ascending) {
      this.cartProducts.sort((a, b) => {
        if (a.cardTitle < b.cardTitle) { return -1; }
        if (a.cardTitle > b.cardTitle) { return 1; }
        return 0;
      });
    } else {
      this.cartProducts.sort((a, b) => {
        if (a.cardTitle > b.cardTitle) { return -1; }
        if (a.cardTitle < b.cardTitle) { return 1; }
        return 0;
      });
    }
    this.sortAlphabeticallyCart.emit(this.cartProducts);
  }

  onFilterByAmount(): void {
    const newProducts: Data[] = [];
    this.cartProducts = this.dataService.getProducts();
    for (const product of this.cartProducts) {
      const listOfPlans = product.listOfPlans;
      let amount = 0;
      for (const plan of listOfPlans) {
        if (plan.price.currency === 'EUR') {
          amount = plan.price.amount;
        } else if (plan.price.currency === 'USD') {
          amount = plan.price.amount * 0.85; // 1USD = 0,85EUR
        }
      }
      if (amount > this.filterValues.low && amount < this.filterValues.high) {
        newProducts.push(product);
      }
    }
    this.cartProducts = newProducts;
    this.filterByAmountCart.emit(this.cartProducts);
  }

}
