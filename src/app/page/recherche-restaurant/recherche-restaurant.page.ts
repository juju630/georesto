import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant';
import { RestaurantsService } from 'src/app/providers/restaurants/restaurants.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-recherche-restaurant',
  templateUrl: './recherche-restaurant.page.html',
  styleUrls: ['./recherche-restaurant.page.scss'],
})
export class RechercheRestaurantPage implements OnInit {

  researchInputName:string = undefined;
  researchInputNote:number = undefined;


  restaurants:Restaurant[];
  displayRestaurant:Restaurant[];

  // pour la recherche

  validRestaurantName:Restaurant[] = [];
  validRestaurantNote:Restaurant[] = [];

  constructor( 
    private restaurantService:RestaurantsService,
    private router:Router,
    ) {}

  ngOnInit() {
    this.loadAllRestaurant();
    
  }

  loadAllRestaurant(){
    this.restaurantService.getAllRestaurants().subscribe(resp => {
      this.restaurants = resp;
      this.displayRestaurant = this.restaurants;
      this.printCurrentPosition();
    })
  }

  clearFilter(){
    this.displayRestaurant = this.restaurants;
    this.researchInputName = undefined;
    this.researchInputNote = undefined
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

  Rechercher(){
    if(this.researchInputName === undefined && this.researchInputNote === undefined){
      return;
    }

    this.validRestaurantName = [];
    this.validRestaurantNote = [];
    this.displayRestaurant = [];

    if(this.researchInputName != undefined){
      console.log("nom");
      this.rechercherNom();
    }
    if(this.researchInputNote != undefined){
      console.log("note");
      this.rechercherNote();
    }

    this.researchInputName = undefined;
    this.researchInputNote = undefined;

    this.validRestaurantName.forEach(restName => {
      this.displayRestaurant.push(restName);
    })
    this.validRestaurantNote.forEach(restNote => {
      this.displayRestaurant.push(restNote);
    })

  }

  rechercherNom(){
    const regEx = new RegExp(this.researchInputName);
    this.restaurants.forEach(rest => {
      if(rest.nom.match(regEx)){
        this.validRestaurantName.push(rest);
      }
    });
  }

  rechercherNote(){
    this.restaurants.forEach(rest => {
      if(this.calculRestaurantNote(rest) >= this.researchInputNote){
        this.validRestaurantNote.push(rest);
      }
    });
  }

  async printCurrentPosition() {
    let coordinates = await Geolocation.getCurrentPosition();
    let coords = {lat : coordinates.coords.latitude, lng: coordinates.coords.longitude};
    this.restaurants.forEach(rest => {
      let x = coords.lat - rest.latitude;
      let y = coords.lng - rest.longitude;
      console.log(rest.latitude + " / " + rest.longitude)
      console.log(coords.lat + " / " + coords.lng)
      console.log(Math.sqrt(x*x + y*y))
    })
    console.log('Current position:', coordinates);
  };

}
