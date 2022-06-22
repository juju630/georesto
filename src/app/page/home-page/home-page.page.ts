import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsService } from 'src/app/providers/restaurants/restaurants.service';
import { StubService } from 'src/app/providers/stub.service';

import { Restaurant } from '../../model/restaurant';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  restaurants: Restaurant[] = [];

  constructor(private readonly stub:StubService,
              private router:Router,
              private restaurantsService:RestaurantsService) {}

  ngOnInit() {
    this.initValue();
  }

  initValue(){
    // this.restaurants = this.stub.getStubRestaurant();
    this.restaurantsService.getAllRestaurants().subscribe(resp => {
        this.restaurants = resp;
    })
  }

  getNom(restaurant:Restaurant) :string{
    return restaurant.nom
  }

  detailRestaurant(restaurant:Restaurant){   
    this.router.navigate(['restaurant-detail/'+restaurant.id]);
  }

  calculRestaurantNote(restaurant:Restaurant){
    if(restaurant.nombreNote == 0){
      return 0;
    }
    return restaurant.note / restaurant.nombreNote;
  }
}
