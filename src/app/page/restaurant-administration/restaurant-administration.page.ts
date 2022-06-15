import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Restaurant } from 'src/app/model/restaurant';
import { RestaurantsService } from 'src/app/providers/restaurants/restaurants.service';

@Component({
  selector: 'app-restaurant-administration',
  templateUrl: './restaurant-administration.page.html',
  styleUrls: ['./restaurant-administration.page.scss'],
})
export class RestaurantAdministrationPage implements OnInit {

  restaurants:Restaurant[] = [];

  constructor(private restaurantService:RestaurantsService,
    private alertController:AlertController) { }

  ngOnInit() {
    this.initRestaurant();
  }

  initRestaurant(){
    this.restaurantService.getAllRestaurants().subscribe( resp => {
      this.restaurants = resp;
    })
  }

  async presentAlert(restaurant:Restaurant){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Suppression',
      message: 'Voulez-vous supprimer ce restaurant ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Valider',
          handler: () => {
            console.log('Valider Clicked');
            this.restaurantService.delete(restaurant).subscribe(resp => {
              this.initRestaurant();
            })
          }
        }
      ]
    });
    await alert.present();
  }

  deleteRestaurant(restaurant:Restaurant){
    this.presentAlert(restaurant);
  }


}
