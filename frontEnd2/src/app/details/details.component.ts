import { BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  public userID;
  public items;
  constructor( public service: BlogService,public activae: ActivatedRoute) {}

  ngOnInit(): void {
    this.getID();
    this.service.fetchDetails(this.userID).subscribe((arg) => {
      this.items=arg;
      console.log(this.items.title)
    });
  }
  getID() {
    this.activae.queryParams.subscribe((data) => {
      this.userID = data['id'];
    });
  }
  fetchDetails() {
    console.log(this.items);
  }
}
