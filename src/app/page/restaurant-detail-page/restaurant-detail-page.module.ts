import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantDetailPagePageRoutingModule } from './restaurant-detail-page-routing.module';

import { RestaurantDetailPagePage } from './restaurant-detail-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantDetailPagePageRoutingModule
  ],
  declarations: [RestaurantDetailPagePage]
})
export class RestaurantDetailPagePageModule {}
