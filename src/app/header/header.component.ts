import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService: CartService) {  }

  ngOnInit() {  }

  @Output() filterButtonClick = new EventEmitter();

  onFilterButton(): void {
    this.filterButtonClick.emit();
  }

}
