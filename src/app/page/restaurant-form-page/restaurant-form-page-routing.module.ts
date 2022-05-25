import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantFormPagePage } from './restaurant-form-page.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantFormPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantFormPagePageRoutingModule {}
