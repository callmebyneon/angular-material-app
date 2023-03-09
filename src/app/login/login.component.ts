import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(
    private fb: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  login() {
    // this.username.setValue('');
    // this.password.setValue('');
    this.location.go('/dashboard');
  }

  getErrorMessage() {
    if (this.username.hasError('required') || this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return ''
  }

}
