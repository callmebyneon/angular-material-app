import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('boxSlide', [
      state('out', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      state('in', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('out <=> in', [
        animate('0.2s')
      ]),
    ])
  ]
})
export class LoginComponent implements OnInit {
  slideState = 'out';

  hide = true;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(
    private fb: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.slideState = 'in';
  }

  login() {
    this.slideState = 'out';
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
