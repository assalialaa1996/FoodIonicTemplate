import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { InAppBrowserOptions, InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { APP_CONFIG, AppConfig } from '../app.config';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    private route: Router,
    private navCtrl: NavController,
    public inAppBrowser: InAppBrowser,
    @Inject(APP_CONFIG) public config: AppConfig
  ) { }

  ngOnInit() {
  }



  profile() {
    this.route.navigate(['./profile']);
  }
  review() {
    this.route.navigate(['./review']);
  }
  earnings() {
    this.route.navigate(['./earnings']);
  }
  bank_details() {
    this.route.navigate(['./bank-detail']);
  }
  contact_us() {
    this.route.navigate(['./contact-us']);
  }

  sign_in() {
    this.navCtrl.navigateRoot(['./sign-in']);
  }
  changeLanguage() {
    this.route.navigate(['./managelanguage']);
  }
  developedBy() {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
    this.inAppBrowser.create('https://verbosetechlabs.com/', '_system', options);
  }
}
