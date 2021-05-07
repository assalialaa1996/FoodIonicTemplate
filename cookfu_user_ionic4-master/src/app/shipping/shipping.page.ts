import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.page.html',
  styleUrls: ['./shipping.page.scss'],
})
export class ShippingPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 add_address() {
    this.route.navigate(['./add-address']);
  }  
 payment() {
    this.route.navigate(['./payment']);
  } 
}
