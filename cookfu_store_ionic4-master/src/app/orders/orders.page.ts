import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';
import { ModalController } from '@ionic/angular';
import { BuyappalertPage } from '../buyappalert/buyappalert.page';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  tab: string = "new_orders";
  constructor(private route: Router,
    @Inject(APP_CONFIG) public config: AppConfig,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  order_info() {
    this.route.navigate(['./orders-info']);
  }
  async buyThisApp() {
    const modal = await this.modalController.create({
      component: BuyappalertPage,
    });
    return await modal.present();
  }
}
