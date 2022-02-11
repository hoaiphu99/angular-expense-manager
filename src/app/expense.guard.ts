import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class ExpenseGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): true | UrlTree {
    console.log('Url: ' + url);
    const val: string = localStorage.getItem('isUserLoggedIn');

    if (val != null && val == 'true') {
      if (url == '/login') {
        this.router.parseUrl('/expenses');
      } else return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
