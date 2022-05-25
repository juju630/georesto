import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home page', url: '/home', icon: 'warning' },
    { title: 'Ajouter un restaurant', url: '/restaurant-form', icon: 'warning' },
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
