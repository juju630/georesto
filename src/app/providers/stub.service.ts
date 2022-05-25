import { Injectable } from '@angular/core';
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'any'
})
export class StubService {

  constructor() { }


  getStubRestaurant() :Restaurant[]{
    let restaurants = [];
    restaurants.push(new Restaurant(1,"A"));
    restaurants.push(new Restaurant(2,"B"));
    restaurants.push(new Restaurant(3,"C"));
    restaurants.push(new Restaurant(4,"D"));
    restaurants.push(new Restaurant(5,"E"));
    return restaurants;
  }
}
