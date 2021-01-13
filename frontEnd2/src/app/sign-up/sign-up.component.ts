import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor() {}
  public signUp_disp = true;
  ngOnInit(): void {}
  
  openLogin() {
    this.signUp_disp = false;
  }
  signUpSubmit() {
    //Other code  //redirect to home
  }
  loginSubmit() {
//redirect to home
  }
}
