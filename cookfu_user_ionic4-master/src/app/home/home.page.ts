import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AppConfig, APP_CONFIG } from '../app.config';
import { BuyappalertPage } from '../buyappalert/buyappalert.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private route: Router, private modalController: ModalController) { }


  chef_detail() {
    this.route.navigate(['./chef-detail']);
  }

  filter() {
    this.route.navigate(['./refine']);
  }

  cart() {
    this.route.navigate(['./cart']);
  }
  async buyThisApp() {
    const modal = await this.modalController.create({
      component: BuyappalertPage,
    });
    return await modal.present();
  }

}
