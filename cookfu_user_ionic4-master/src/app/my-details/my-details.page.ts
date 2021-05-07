import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.page.html',
  styleUrls: ['./my-details.page.scss'],
})
export class MyDetailsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }


 add_address() {
    this.route.navigate(['./add-address']);
  } 
}
