import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Restaurant } from 'src/app/model/restaurant';
import { Device } from '@capacitor/device';
import { RestaurantsService } from 'src/app/providers/restaurants/restaurants.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceShareService } from 'src/app/providers/serviceShare/service-share.service';

@Component({
  selector: 'app-restaurant-form-page',
  templateUrl: './restaurant-form-page.page.html',
  styleUrls: ['./restaurant-form-page.page.scss'],
})
export class RestaurantFormPagePage implements OnInit {

  restaurant: Restaurant;
  deviceCompatible:Boolean = true;
  SwitchDisplayImg:Boolean = true;

  updateRestaurant:Boolean = false;

  formGroup:FormGroup;

  constructor(private readonly restaurantService:RestaurantsService,
    private _toastService: ToastController,
    private serviceShare: ServiceShareService
    ) {}

  ngOnInit() {
    this.initFormControl();
    this.getDevice();

    let restauTmp:Restaurant = this.serviceShare.getCurrentModifyRestaurant();
    this.remplirForm(restauTmp);
  }

  ngOnDestroy(){

  }

  remplirForm(restaurant:Restaurant){
    if(restaurant == undefined){
      this.restaurant = new Restaurant;
    }else{
      this.restaurant = restaurant;
      this.updateRestaurant = true;
    }
  }

  async getDevice(){
    const info = await Device.getInfo();
    switch(info.operatingSystem){
      case 'android':
      case 'ios':
        this.deviceCompatible = false;
        break;
      default:
        this.deviceCompatible = true;
    }
  }

  initFormControl(){
    this.formGroup = new FormGroup({
      nom: new FormControl('Defaut',Validators.required),
      ville: new FormControl('',Validators.required),
      codePostal: new FormControl('',Validators.required),
      image: new FormControl('',Validators.required),
    })
  }

  SwitchDisplayForImg(){
    this.SwitchDisplayImg = this.restaurant.imageUrl === "" || this.restaurant.imageUrl === null;
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

  clearForm(){
    this.remplirForm(undefined);
  }

  submitRestaurant() {
    if(this.formGroup.valid){
      if(this.updateRestaurant){
        this.restaurantService.update(this.restaurant).subscribe(resp => {
          this.clearForm();
          this.presentToast(" Modification du Restaurant réussi ",true);
        })
      }else{
        this.restaurant.nombreNote = 0;
        this.restaurant.note = 0;
        this.restaurantService.create(this.restaurant).subscribe(resp => {
          this.clearForm();
          this.presentToast(" Création du restaurant réussi ",true);
        });
      }
      
    }else{
      this.presentToast(" Erreur, veuillez remplir le formulaire ",false);
    }
  }
}
