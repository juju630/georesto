import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/model/restaurant';

@Component({
  selector: 'app-restaurant-form-page',
  templateUrl: './restaurant-form-page.page.html',
  styleUrls: ['./restaurant-form-page.page.scss'],
})
export class RestaurantFormPagePage implements OnInit {

  restaurant: Restaurant = new Restaurant();

  constructor() { }

  ngOnInit() {
    
  }

  logForm() {
    console.log(this.restaurant)
  }
}
