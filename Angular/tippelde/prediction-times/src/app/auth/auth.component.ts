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

    this.isLoading = true;

    if (this.isLoginMode) {
      this.authService.logIn(form.value.email, form.value.password).subscribe(resData => {
        console.log(resData);
      }, error => {
        console.log(error);
      })
      this.router.navigate(['/home']);;
  } else {
      this.authService.signUp(form.value.email, form.value.password).subscribe(resData => {
        console.log(resData);
        this.isLoading = false;
      }, error => {
          console.log(error);
          this.error = 'An error occurred!'
          this.isLoading = false;
        });
  }

    form.reset();
}
}
