import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-info',
  templateUrl: './orders-info.page.html',
  styleUrls: ['./orders-info.page.scss'],
})
export class OrdersInfoPage implements OnInit {

  constructor(private route: Router,) { }

  ngOnInit() {
  }

 order_status() {
    this.route.navigate(['./orders-status']);
  } 

}
