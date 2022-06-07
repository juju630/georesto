import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantAdministrationPage } from './restaurant-administration.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantAdministrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantAdministrationPageRoutingModule {}
