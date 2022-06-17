import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant';
import { RestaurantsService } from 'src/app/providers/restaurants/restaurants.service';
<<<<<<< HEAD
=======
import { GoogleMap } from '@capacitor/google-maps';
import { Device } from '@capacitor/device';

import { environment } from './../../../environments/environment';

>>>>>>> master

@Component({
  selector: 'app-restaurant-detail-page',
  templateUrl: './restaurant-detail-page.page.html',
  styleUrls: ['./restaurant-detail-page.page.scss'],
})
export class RestaurantDetailPagePage implements OnInit {

<<<<<<< HEAD
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
=======
  restaurant: Restaurant = new Restaurant;
  id: number;
  hideMap: Boolean = false;
  constructor(
    private restaurantsService: RestaurantsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.initValue();
    
  }

  initValue() {
    this.restaurantsService.getRestaurant(this.id).subscribe(resp => {
      this.restaurant = resp;
      this.initMap();
    });
  }

  retour() {
>>>>>>> master
    this.router.navigate(['/']);
  }
  async initMap() {
    if(this.restaurant.latitude===undefined || this.restaurant.longitude===undefined){
      this.hideMap=true;
    }
    else{
      console.log(this.restaurant.latitude)
      const apiKey = environment.apiKey;
      const mapRef = document.getElementById('map');
      const newMap = await GoogleMap.create({
        id: 'my-map', // Unique identifier for this map instance
        element: mapRef, // reference to the capacitor-google-map element
        apiKey: apiKey, // Your Google Maps API Key
        config: {
          center: {
            // The initial position to be rendered by the map
            lat: this.restaurant.latitude,
            lng: this.restaurant.longitude,
          },
          zoom: 17, // The initial zoom level to be rendered by the map
        },
      });
      // Add a marker to the map
      const markerId = await newMap.addMarker({
        coordinate: {
          lat: this.restaurant.latitude,
          lng: this.restaurant.longitude,
        }
      });
    }
    
  }
}
