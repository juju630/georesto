import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Restaurant } from './../../model/restaurant';

import { RechercheRestaurantPage } from './recherche-restaurant.page';

describe('RechercheRestaurantPage', () => {
  let component: RechercheRestaurantPage;
  let fixture: ComponentFixture<RechercheRestaurantPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheRestaurantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RechercheRestaurantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(' should calcul', () => {
    let resto:Restaurant = new Restaurant();
    resto.nombreNote = 2;
    resto.note = 20;
    expect(component.calculRestaurantNote(resto)).toEqual(10);
  })
});
