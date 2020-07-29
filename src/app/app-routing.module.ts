import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DetailsComponent} from './details/details.component';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
    {
      path: 'details/:_id',
      component: DetailsComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'cart',
      component: CartComponent
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
