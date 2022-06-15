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

  restaurants: Restaurant[] = [];
  restaurant: Restaurant = new Restaurant;
  id:string;
  
  constructor(private readonly restaurantService: RestaurantsService,
              private activatedRoute: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.findRestaurant(this.id);
    
  }


  findRestaurant(id:string){
    this.restaurantService.getRestaurant(Number(this.id)).subscribe(resp => {
      this.restaurant = resp;
    })
  }

  retour(){
    this.router.navigate(['/']);
  }
}
