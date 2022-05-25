import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StubService } from 'src/app/providers/stub.service';

import { Restaurant } from '../../model/restaurant';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  restaurants: Restaurant[] = [];

  constructor(private readonly stub:StubService,
              private router:Router) {}

  ngOnInit() {
    this.initValue();
  }

  initValue(){
    this.restaurants = this.stub.getStubRestaurant();
  }

  getNom(restaurant:Restaurant) :string{
    return restaurant.nom
  }

  detailRestaurant(restaurant:Restaurant){   
    this.router.navigate(['restaurant-detail/'+restaurant.id]);
  }
}
