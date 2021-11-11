import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "./auth.config";
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private user: any = {}
  // private authenticatedUserSubject = new BehaviorSubject({});
  // user$ = this.authenticatedUserSubject.asObservable();

  constructor(private httpClient: HttpClient, private oauthService: OAuthService) {
    this.oauthService.setStorage(sessionStorage)
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.oauthService.setupAutomaticSilentRefresh();
  }

  login(userCredentials: any) {
    this.oauthService.initLoginFlow();
  }
  isLoggedIn() {
    return this.oauthService.hasValidAccessToken();
  }
}
