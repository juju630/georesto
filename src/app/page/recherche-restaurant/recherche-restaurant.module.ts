import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheRestaurantPageRoutingModule } from './recherche-restaurant-routing.module';

import { RechercheRestaurantPage } from './recherche-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheRestaurantPageRoutingModule
  ],
  declarations: [RechercheRestaurantPage]
})
export class RechercheRestaurantPageModule {}
