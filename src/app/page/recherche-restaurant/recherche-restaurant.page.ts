import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant';
import { RestaurantsService } from 'src/app/providers/restaurants/restaurants.service';

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
}
