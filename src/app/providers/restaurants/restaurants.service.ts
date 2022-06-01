import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from 'src/app/model/restaurant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http : HttpClient) { }

  getAllRestaurants(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>("http://localhost:3000/restaurants");
  }
}
