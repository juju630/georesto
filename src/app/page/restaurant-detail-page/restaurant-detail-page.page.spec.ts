import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurantDetailPagePage } from './restaurant-detail-page.page';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Restaurant } from 'src/app/model/restaurant';
import { RestaurantsService } from 'src/app/providers/restaurants/restaurants.service';

describe('RestaurantDetailPagePage', () => {
  let component: RestaurantDetailPagePage;
  let fixture: ComponentFixture<RestaurantDetailPagePage>;
  let apiService;
  
  const ApiServiceRestaurantMock   = {
    getRestaurant: () => new Restaurant(1,"Restaurant Miam",63660,"Clermont")
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantDetailPagePage ],
      imports: [IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule],
        providers: [
          { provide: RestaurantsService, useValue:ApiServiceRestaurantMock  }
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantDetailPagePage);
    component = fixture.componentInstance;

    apiService = TestBed.inject(RestaurantsService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Load Details from Restaurant', () => {

    const id = "5";

    spyOn(apiService,'getRestaurant');

    component.findRestaurant(id);
    expect(component.restaurant.id).toEqual(1);
    expect(component.restaurant.nom).toBeDefined();

    expect(apiService.getRestaurant).toHaveBeenCalled();
  });

});
