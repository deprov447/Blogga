import { BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  public data=[];
  public bgImageVariable:String="";

  constructor(public service: BlogService,public routes:Router) {}

  ngOnInit(): void {
    
    this.service.fetchBlog().subscribe((arg) => {
      this.data=arg;
      
    });
  }
  retriveID(id){
    this.routes.navigate(["/blogDetails"],{
      queryParams:{"id":id}
    })
   
  }
}
