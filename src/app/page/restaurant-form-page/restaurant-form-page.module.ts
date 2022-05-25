import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantFormPagePageRoutingModule } from './restaurant-form-page-routing.module';

import { RestaurantFormPagePage } from './restaurant-form-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantFormPagePageRoutingModule
  ],
  declarations: [RestaurantFormPagePage]
})
export class RestaurantFormPagePageModule {}
