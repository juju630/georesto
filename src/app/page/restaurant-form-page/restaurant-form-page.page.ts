import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Restaurant } from 'src/app/model/restaurant';
import { RestaurantsService } from 'src/app/providers/restaurants/restaurants.service';

@Component({
  selector: 'app-restaurant-form-page',
  templateUrl: './restaurant-form-page.page.html',
  styleUrls: ['./restaurant-form-page.page.scss'],
})
export class RestaurantFormPagePage implements OnInit {

  restaurant: Restaurant = new Restaurant();
  deviceCompatible:Boolean = true;

  formGroup:FormGroup;

  constructor(private readonly restaurantService:RestaurantsService) { 
   
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      nom: new FormControl('Defaut',Validators.required),
      ville: new FormControl('',Validators.required),
      codePostal: new FormControl('',Validators.required),
      image: new FormControl('',Validators.required),
    })
  }

  clearForm(){
    this.restaurant = new Restaurant();
  }

  submitRestaurant() {
    if(this.formGroup.valid){
      this.restaurant.nombreNote = 0;
      this.restaurant.note = 0;
      this.restaurantService.create(this.restaurant).subscribe(resp => {
        this.clearForm();
      });
    }else{
      
    }
  }
}
