import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Page  principale', url: '/home', icon: 'warning' },
    { title: 'Ajouter un restaurant', url: '/restaurant-form', icon: 'warning' },
    { title: 'Administrer Restaurant', url: '/restaurant-administration', icon: 'warning'},
    { title: 'Rechercher Restaurant', url: '/recherche-restaurant', icon: 'warning'}
  ];
  public labels = [];
  constructor() {}
}
