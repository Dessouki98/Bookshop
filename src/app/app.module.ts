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
import { BookItemComponent } from './shop/book-list/book-item/book-item.component';
import { BookListComponent } from './shop/book-list/book-list.component';
import {ShopService} from './shop/shop.service';
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavigatorComponent,
    ShopComponent,
    MyCartComponent,
    AboutMeComponent,
    BookItemComponent,
    BookListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
