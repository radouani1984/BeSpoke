import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core/authentication/auth.service";

@Component({
  selector: 'keo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  loginForm: FormGroup  = undefined;
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username : ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  submit = () => {
    const userCredentials = this.loginForm.value;
    this.authService.login(userCredentials);
  }

}
