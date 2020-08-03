import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LabelType, Options} from 'ng5-slider';
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

  filterProducts: Data[] = [];

  searchProductNames: string[] = [];

  searchInput = '';
  filterValues = {
    low: 0,
    high: 10000
  };
  options: Options = {
    floor: 0,
    ceil: 10000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '$' + value;
        case LabelType.High:
          return '$' + value;
        default:
          return '$' + value;
      }
    }
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.filterProducts = this.dataService.getProducts();
    // this.searchProductNames = this.dataService.getAllNames();
  }

  onFilterSearch(): void {
    const regex = new RegExp(this.searchInput);
    const newProducts: Data[] = [];
    this.filterProducts = this.dataService.getProducts();
    for (const product of this.filterProducts) {
      if (regex.test(product.cardTitle)) {
        newProducts.push(product);
      }
    }
    this.filterProducts = newProducts;
    this.filterSearchCart.emit(this.filterProducts);
  }

  onSortAlphabetically(ascending: boolean): void {
    if (ascending) {
      this.filterProducts.sort((a, b) => {
        if (a.cardTitle < b.cardTitle) { return -1; }
        if (a.cardTitle > b.cardTitle) { return 1; }
        return 0;
      });
    } else {
      this.filterProducts.sort((a, b) => {
        if (a.cardTitle > b.cardTitle) { return -1; }
        if (a.cardTitle < b.cardTitle) { return 1; }
        return 0;
      });
    }
    this.sortAlphabeticallyCart.emit(this.filterProducts);
  }

  onFilterByAmount(): void {
    const newProducts: Data[] = [];
    this.filterProducts = this.dataService.getProducts();
    for (const product of this.filterProducts) {
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
    this.filterProducts = newProducts;
    this.filterByAmountCart.emit(this.filterProducts);
  }

  checkIfSearchInputEmpty(): boolean {
    return this.searchInput === '' || this.searchProductNames === null;
  }

  onClikAutocomplete(searchName: string): void {
    this.searchInput = searchName;
    this.onFilterSearch();
    this.searchProductNames = null;
  }

  autocomplete(): void {
    const regex = new RegExp(this.searchInput);
    const newProductNames: string[] = [];
    this.filterProducts = this.dataService.getProducts();
    for (const product of this.filterProducts) {
      if (regex.test(product.cardTitle)) {
        newProductNames.push(product.cardTitle);
      }
    }
    this.searchProductNames = newProductNames;
  }

}
