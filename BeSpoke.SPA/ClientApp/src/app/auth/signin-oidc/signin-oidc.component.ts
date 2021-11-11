import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'keo-signin-oidc',
  templateUrl: './signin-oidc.component.html',
  styleUrls: ['./signin-oidc.component.scss']
})
export class SigninOidcComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['home']);
  }

}
