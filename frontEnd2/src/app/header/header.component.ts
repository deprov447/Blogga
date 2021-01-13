import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public nav_display = true;
  public signUp_disp = false;
  constructor() {}

  ngOnInit(): void {}
  
}
