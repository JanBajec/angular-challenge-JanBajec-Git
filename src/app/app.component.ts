import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cartTotalAmount: number;

  // changeTotalAmount($event): void {
  //   this.cartTotalAmount = $event;
  // }

}
