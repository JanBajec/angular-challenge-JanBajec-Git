import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {CartService} from '../cart.service';
import {Data} from '../data';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('divFilterState', [
      state('showFilter', style({
        // width: '240px',
        transform: 'translateX(0)'
      })),
      state('hideFilter', style({
        // width: '0px'
        transform: 'translateX(-240px)'
      })),
      transition('showFilter <=> hideFilter', animate(200)),
    ]),
    trigger('divProductsState', [
      state('showFilter', style({
        marginLeft: '260px'
      })),
      state('hideFilter', style({
        marginLeft: '20px'
      })),
      transition('showFilter <=> hideFilter', animate(200)),
    ]),
  ]
})
export class HomeComponent implements OnInit {
  filterState = 'showFilter';

  products: any = [];

  constructor(private dataService: DataService, private cartService: CartService) {
  }

  onHeaderFliterButtonClick() {
    this.filterState === 'showFilter' ? this.filterState = 'hideFilter' : this.filterState = 'showFilter';
  }

  ngOnInit() {
    this.products = this.dataService.getProducts();
    if (window.innerWidth < 768) {
      this.filterState = 'hideFilter';
    } else {
      this.filterState = 'showFilter';
    }
  }

  filterSearch(newProducts: Data[]): void {
    this.products = newProducts;
  }

  sortAlphabetically(newProducts: Data[]): void {
    this.products = newProducts;
  }

  filterByAmount(newProducts: Data[]): void {
    this.products = newProducts;
  }

  getPrice(productId: string): number {
    return this.dataService.getPrice(productId);
  }

}
