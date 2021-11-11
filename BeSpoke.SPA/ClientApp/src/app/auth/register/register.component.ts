import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/authentication/auth.service';
import {UserRegistration} from "../../shared/models/UserRegistration";

@Component({
  selector: 'keo-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  success: boolean = false;
  error: string = '';
  userRegistration: UserRegistration = {name: '', email: '', password: ''};
  submitted: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }
}
