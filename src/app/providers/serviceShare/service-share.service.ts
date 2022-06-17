import { Injectable } from '@angular/core';
import { Restaurant } from '../../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class ServiceShareService {

  constructor() { }

  private CurrentRestaurantModif:Restaurant

  public getCurrentModifyRestaurant() :Restaurant{
    let tmp = this.CurrentRestaurantModif;
    this.CurrentRestaurantModif = null;
    return tmp;
  }

  public setCurrentModifyRestaurant(restaurant:Restaurant){
    this.CurrentRestaurantModif = restaurant;
  } 
}
