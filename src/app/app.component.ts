import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Expense Manager';
  isUserLoggedIn = false;

  constructor(private authService: AuthService) {}

  NgOnInit() {
    const storeData = localStorage.getItem('isUserLoggedIn');
    console.log('Store Data:' + storeData);

    if (storeData != null && storeData == 'true') {
      this.isUserLoggedIn = true;
    } else this.isUserLoggedIn = false;
  }
}
