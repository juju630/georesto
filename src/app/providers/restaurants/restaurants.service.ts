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
    return this.http.get<Restaurant[]>("https://georesto-api.herokuapp.com/restaurants/");
  }

  getRestaurant(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>("https://georesto-api.herokuapp.com/restaurants/" + id);
  }

  create(restaurant: Restaurant): Observable<any> {
    return this.http.post("https://georesto-api.herokuapp.com/restaurants/", restaurant);
  }

  delete(restaurant:Restaurant): Observable<any> {
    return this.http.delete("https://georesto-api.herokuapp.com/restaurants/"+restaurant.id,)
  }

  update(restaurant:Restaurant): Observable<any>{
    return this.http.put("https://georesto-api.herokuapp.com/restaurants/"+restaurant.id,restaurant);
  }
}
