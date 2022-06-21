import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant';
import { RestaurantsService } from 'src/app/providers/restaurants/restaurants.service';
import { GoogleMap } from '@capacitor/google-maps';
import { AlertController, ToastController } from '@ionic/angular';
import { environment } from './../../../environments/environment';


@Component({
  selector: 'app-restaurant-detail-page',
  templateUrl: './restaurant-detail-page.page.html',
  styleUrls: ['./restaurant-detail-page.page.scss'],
})
export class RestaurantDetailPagePage implements OnInit {

  restaurant: Restaurant = new Restaurant;
  id: number;
  hideMap: Boolean = false;

  constructor(
    private restaurantsService: RestaurantsService,
    private activatedRoute: ActivatedRoute,
    private _toastService: ToastController,
    private alertController:AlertController,
    private router: Router) { }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.initValue();
  }

  initValue() {
    this.restaurantsService.getRestaurant(this.id).subscribe(resp => {
      this.restaurant = resp;
      this.initMap();
    });
  }

  calculRestaurantNote(restaurant:Restaurant){
    if(restaurant.nombreNote == 0){
      return 0;
    }
    return restaurant.note / restaurant.nombreNote;
  }

  retour() {
    this.router.navigate(['/']);
  }
  async initMap() {
    if(this.restaurant.latitude===undefined || this.restaurant.longitude===undefined){
      this.hideMap=true;
    }
    else{
      console.log(this.restaurant.latitude)
      const apiKey = environment.apiKey;
      const mapRef = document.getElementById('map');
      const newMap = await GoogleMap.create({
        id: 'my-map', // Unique identifier for this map instance
        element: mapRef, // reference to the capacitor-google-map element
        apiKey: apiKey, // Your Google Maps API Key
        config: {
          center: {
            // The initial position to be rendered by the map
            lat: this.restaurant.latitude,
            lng: this.restaurant.longitude,
          },
          zoom: 17, // The initial zoom level to be rendered by the map
        },
      });
      // Add a marker to the map
      const markerId = await newMap.addMarker({
        coordinate: {
          lat: this.restaurant.latitude,
          lng: this.restaurant.longitude,
        }
      });
    }
  }

  async displayNoteAlert(){
    const alert = await this.alertController.create({
      header: 'Notation',
      subHeader: 'Notation',
      message: "Veuillez donner une note au restaurant",
      inputs: [
        {
          name: 'note',
          placeholder: 'Number',
          type:'number',
          min:0,
          max:10,
        }
      ],
      buttons: [{
        text: 'Confirmer',
        handler: data => {
          if(data.note > 10 || data.note < 0){
            this.presentToast(" Veuillez rentrer une note valide ",false);
          }else{    
            this.restaurant.nombreNote ++;
            this.restaurant.note = Number(this.restaurant.note)+ Number(data.note);
            this.restaurantsService.update(this.restaurant).subscribe(resp => {
              this.presentToast(" Note prise en compte ",true);
            })
          }
        }
      },{
        text: 'Annuler'
      }]
    })
    alert.present();
  }

  async presentToast(msg:string, isValid:boolean){
    if(isValid){
      const toast = await this._toastService.create({
        message : msg,
        duration:4000,
        icon: 'checkmark-circle-outline',
      })
      toast.present();
    }else{
      const toast = await this._toastService.create({
        message : msg,
        duration:4000,
        icon: 'close-circle-outline',
      })
      toast.present();
    }
  }
}
