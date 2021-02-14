import { BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public nav_display = true;
  public signUp_disp = false;
  constructor(public service:BlogService) {}

  ngOnInit(): void {
    console.log("A")
    this.service.checkLogin().subscribe((arg)=>{
      
      console.log(arg)
    })
  }
  logOut(){
      this.service.logOut().subscribe((arg)=>{
        console.log("Log out")
      })
  }
  checkLogin(){

  }
  
}
