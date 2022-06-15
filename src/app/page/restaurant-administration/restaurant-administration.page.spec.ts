import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaurantAdministrationPage } from './restaurant-administration.page';

<<<<<<< HEAD
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

=======
>>>>>>> master
describe('RestaurantAdministrationPage', () => {
  let component: RestaurantAdministrationPage;
  let fixture: ComponentFixture<RestaurantAdministrationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantAdministrationPage ],
<<<<<<< HEAD
      imports: [IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule]
=======
      imports: [IonicModule.forRoot()]
>>>>>>> master
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantAdministrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
