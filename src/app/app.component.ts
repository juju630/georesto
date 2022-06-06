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
    { title: 'Administrer Restaurant', url: '/restaurant-administration', icon: 'warning'}
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
