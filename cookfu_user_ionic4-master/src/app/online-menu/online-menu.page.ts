import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-online-menu',
  templateUrl: './online-menu.page.html',
  styleUrls: ['./online-menu.page.scss'],
})
export class OnlineMenuPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

cart() {
    this.route.navigate(['./cart']);
  } 
}
