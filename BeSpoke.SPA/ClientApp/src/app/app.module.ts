import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {AuthService} from "./core/authentication/auth.service";
import {AuthGuard} from "./core/authentication/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
