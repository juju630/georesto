import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RestaurantFormPagePage } from './restaurant-form-page.page';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('RestaurantFormPagePage', () => {
  let component: RestaurantFormPagePage;
  let fixture: ComponentFixture<RestaurantFormPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantFormPagePage ],
      imports: [IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantFormPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('init form control', () => {
    component.initFormControl();
    expect(component.formGroup).toBeDefined();
  })
});
