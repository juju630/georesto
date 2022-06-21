import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheRestaurantPage } from './recherche-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheRestaurantPageRoutingModule {}
