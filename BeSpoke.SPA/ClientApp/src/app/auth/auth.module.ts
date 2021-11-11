import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SigninOidcComponent } from './signin-oidc/signin-oidc.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    SigninOidcComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ]
})
export class AuthModule {
}
