import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing-module';
import { SliderComponent } from './slider/slider.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ShopComponent } from './shop/shop.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { AboutMeComponent } from './about-me/about-me.component';
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavigatorComponent,
    ShopComponent,
    MyCartComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
