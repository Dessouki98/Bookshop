
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SliderComponent} from './slider/slider.component';

const appRoutes = [
  {path: '', component: SliderComponent},

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
