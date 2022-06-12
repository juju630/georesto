import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant';
import { RestaurantsService } from 'src/app/providers/restaurants/restaurants.service';
import { GoogleMap } from '@capacitor/google-maps';

import { environment } from './../../../environments/environment';


@Component({
  selector: 'app-restaurant-detail-page',
  templateUrl: './restaurant-detail-page.page.html',
  styleUrls: ['./restaurant-detail-page.page.scss'],
})
export class RestaurantDetailPagePage implements OnInit {




  restaurant: Restaurant = new Restaurant;
  id: number;

  constructor(private restaurantsService: RestaurantsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.initValue();
    this.initMap();
  }

  initValue() {
    this.restaurantsService.getRestaurant(this.id).subscribe(resp => {
      this.restaurant = resp;
      console.log(this.restaurant)
    });
  }

  retour() {
    this.router.navigate(['/']);
  }
  async initMap() {
    const apiKey = environment.apiKey;
    const mapRef = document.getElementById('map');
    const newMap = await GoogleMap.create({
      id: 'my-map', // Unique identifier for this map instance
      element: mapRef, // reference to the capacitor-google-map element
      apiKey: apiKey, // Your Google Maps API Key
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: 45.761954,
          lng: 3.108793,
        },
        zoom: 17, // The initial zoom level to be rendered by the map
      },
    });
    // Add a marker to the map
    const markerId = await newMap.addMarker({
      coordinate: {
        lat: 45.761954,
        lng: 3.108793
      }
    });
  }
}
