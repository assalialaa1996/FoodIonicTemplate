import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.page.html',
  styleUrls: ['./confirm-order.page.scss'],
})
export class ConfirmOrderPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
	


 checkout() {
    this.route.navigate(['./order-confirmed']);
  } 

}
