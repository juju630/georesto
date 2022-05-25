import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant';
import { StubService } from 'src/app/providers/stub.service';

@Component({
  selector: 'app-restaurant-detail-page',
  templateUrl: './restaurant-detail-page.page.html',
  styleUrls: ['./restaurant-detail-page.page.scss'],
})
export class RestaurantDetailPagePage implements OnInit {

  restaurants: Restaurant[] = [];
  restaurant: Restaurant;
  id:string;
  
  constructor(private readonly stub:StubService,
              private activatedRoute: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.initValue();
    this.findRestaurant();
  }

  initValue(){
    this.restaurants = this.stub.getStubRestaurant();
  }

  findRestaurant(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.restaurants.forEach(rest => {
      if(rest.id.toString() === this.id){
        this.restaurant = rest;
        return;
      }
    })
  }

  retour(){
    this.router.navigate(['/']);
  }
}
