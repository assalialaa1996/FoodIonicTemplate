import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'; 
import { Router } from '@angular/router'; 
import { CouponPage } from '../coupon/coupon.page';  
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(
	 private route: Router, 
    private modalController: ModalController
	) { }

  ngOnInit() {
  }

  coupon_code(){
    this.modalController.create({component:CouponPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  } 
  shipping() {
    this.route.navigate(['./shipping']);
  } 
}
