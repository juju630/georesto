import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantDetailPagePage } from './restaurant-detail-page.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantDetailPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantDetailPagePageRoutingModule {}
