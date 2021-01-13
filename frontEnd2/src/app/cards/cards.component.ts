import { BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  public data=[];
  public bgImageVariable:String="";

  constructor(public service: BlogService) {}

  ngOnInit(): void {
    
    this.service.fetchBlog().subscribe((arg) => {
      this.data=arg;
      console.log(this.data)
    });
  }
}
