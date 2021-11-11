import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./authentication/auth.service";
import {AuthGuard} from "./authentication/auth.guard";
import {HttpClientModule} from "@angular/common/http";
import {OAuthModule} from "angular-oauth2-oidc";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [AuthService, AuthGuard],
})
export class CoreModule { }
