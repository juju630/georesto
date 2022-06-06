import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantAdministrationPageRoutingModule } from './restaurant-administration-routing.module';

import { RestaurantAdministrationPage } from './restaurant-administration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantAdministrationPageRoutingModule
  ],
  declarations: [RestaurantAdministrationPage]
})
export class RestaurantAdministrationPageModule {}
