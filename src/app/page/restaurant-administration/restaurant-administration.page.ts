import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Restaurant } from 'src/app/model/restaurant';
import { RestaurantsService } from 'src/app/providers/restaurants/restaurants.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceShareService } from '../../providers/serviceShare/service-share.service';

@Component({
  selector: 'app-restaurant-administration',
  templateUrl: './restaurant-administration.page.html',
  styleUrls: ['./restaurant-administration.page.scss'],
})
export class RestaurantAdministrationPage implements OnInit {

  restaurants:Restaurant[] = [];

  constructor(private restaurantService:RestaurantsService,
    private alertController:AlertController,
    private route:Router,
    private serviceShare:ServiceShareService) { }

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
      buttons: [{
        text:'OK',
        handler: () => {
          this.restaurantService.delete(restaurant).subscribe( resp => {this.initRestaurant();})
        }
      },{
        text:'Cancel'
      }]
      
    });
    await alert.present();
    
  }

  deleteRestaurant(restaurant:Restaurant){
    this.presentAlert(restaurant);
    this.initRestaurant();
  }

  modifyRestaurant(restaurant:Restaurant){
    this.serviceShare.setCurrentModifyRestaurant(restaurant);
    this.route.navigate(['/restaurant-form',restaurant]);
  }

  openSlider(item, index){
    let a = Array.prototype.slice.call( item.el.children )
      a.map((val)=>{
        if(val.id == 'slidingItem'+index){
          if(val.attributes.class.textContent.includes("active")){
            val.close();
          }
          else{
            val.open();
          }
        }
      });
  }
}
