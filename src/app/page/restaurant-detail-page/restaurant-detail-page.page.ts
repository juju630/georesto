import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant';
import { RestaurantsService } from 'src/app/providers/restaurants/restaurants.service';

@Component({
  selector: 'app-restaurant-detail-page',
  templateUrl: './restaurant-detail-page.page.html',
  styleUrls: ['./restaurant-detail-page.page.scss'],
})
export class RestaurantDetailPagePage implements OnInit {

  restaurant: Restaurant = new Restaurant;
  id:number;
  
  constructor(private restaurantsService:RestaurantsService,
              private activatedRoute: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.initValue();
  }

  initValue(){
    this.restaurantsService.getRestaurant(this.id).subscribe(resp => {
      
      this.restaurant = resp;
      console.log(this.restaurant)
    });
  }

  retour(){
    this.router.navigate(['/']);
  }
}
