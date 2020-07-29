import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { CartComponent } from './cart/cart.component';
import {LocalStorageService} from 'angular-web-storage';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5SliderModule,
    FormsModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
