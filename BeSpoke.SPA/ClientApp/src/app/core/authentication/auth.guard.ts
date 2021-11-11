import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";
import {map} from "rxjs/operators";
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authenticationService: AuthService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

     const isLogged = this.authenticationService.isLoggedIn();

     if(isLogged) return true;

    // this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
    this.authenticationService.login({});
    return false;
    // return currentUser$.pipe(map(user => {
    //   if (!_.isEmpty(user)) return true;
    //   this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
    //   return false;
    // }));
  }

}
