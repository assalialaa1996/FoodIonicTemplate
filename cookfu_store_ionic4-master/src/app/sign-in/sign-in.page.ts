import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
tab: string = "sign_in";
  constructor(
	 private route: Router,
     private navCtrl: NavController
	) { }

  ngOnInit() {
  }
 goToForgotPassword() {
    this.route.navigate(['./forgot-password']);
  } 
 goToOtp() {
    this.route.navigate(['./otp']);
  } 
	
  goTohome() {
    this.navCtrl.navigateRoot(['./tabs']);
  } 
}
