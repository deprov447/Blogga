import { loginFormat } from './loginFormat';
import { BlogService } from './../blog.service';
import { signFormat } from './signFormat';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(public service: BlogService) {}
  public signUp_disp = true;
  public signFormat = new signFormat();
  public loginFormat = new loginFormat();

  ngOnInit(): void {}

  openLogin() {
    this.signUp_disp = false;
  }
  signUpSubmit() {
    this.service.signUp(this.signFormat).subscribe((arg) => console.log(arg));

    //Other code  //redirect to home
  }
  loginSubmit() {
    this.service.login(this.loginFormat).subscribe((arg)=>{
      console.log(arg);
    })
  }
}
