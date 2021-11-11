import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../components/home/home.component";
import {FeaturesComponent} from "../components/features/features.component";
import {AuthGuard} from "../core/authentication/auth.guard";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {SigninOidcComponent} from "./signin-oidc/signin-oidc.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  // {
  //   path:'signin-oidc',
  //   component: SigninOidcComponent
  // },
  { path: '**', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
