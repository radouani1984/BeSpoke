import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {FeaturesComponent} from "./components/features/features.component";
import {AuthGuard} from "./core/authentication/auth.guard";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'feature',
    component: FeaturesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {path: '**', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
