import {Component} from '@angular/core';
import {authConfig} from "./core/authentication/auth.config";
import {AuthService} from "./core/authentication/auth.service";

@Component({
  selector: 'keo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KeoSPA';

  constructor(private authService: AuthService) {

  }
}
