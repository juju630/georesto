import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './../../model/restaurant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  getAllRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>("http://localhost:3000/restaurants");
  }

  getRestaurant(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>("http://localhost:3000/restaurants/" + id);
  }

  create(restaurant: Restaurant): Observable<any> {
    return this.http.post("http://localhost:3000/restaurants/", restaurant);
  }
}
