import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService, AuthResponseData } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = false;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
  }

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.logIn(form.value.email, form.value.password);
  } else {
      authObs = this.authService.signUp(form.value.email, form.value.password);
  }

    authObs.subscribe(resData => {
    console.log(resData);
    this.isLoading = false;
    
    this.router.navigate(['/home']);
}, errorMessage => {
    console.log(errorMessage);
    this.isLoading = false;
});

    form.reset();
}
}
