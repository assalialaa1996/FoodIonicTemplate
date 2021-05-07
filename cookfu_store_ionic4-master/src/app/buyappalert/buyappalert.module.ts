import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyappalertPageRoutingModule } from './buyappalert-routing.module';

import { BuyappalertPage } from './buyappalert.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    BuyappalertPageRoutingModule
  ],
  declarations: [BuyappalertPage]
})
export class BuyappalertPageModule {}
