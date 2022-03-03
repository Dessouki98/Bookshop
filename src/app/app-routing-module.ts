
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SliderComponent} from './slider/slider.component';
import {ShopComponent} from './shop/shop.component';
import {MyCartComponent} from './my-cart/my-cart.component';
import {AboutMeComponent} from './about-me/about-me.component';

const appRoutes = [
  {path: '', component: SliderComponent, pathMatch: 'full'},
  {path: 'shop', component: ShopComponent},
  {path: 'myCart', component: MyCartComponent},
  {path: 'aboutMe', component: AboutMeComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
