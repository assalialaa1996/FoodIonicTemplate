import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { IonicModule } from '@ionic/angular';

import { OrdersStatusPageRoutingModule } from './orders-status-routing.module';

import { OrdersStatusPage } from './orders-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,    
    OrdersStatusPageRoutingModule
  ],
  declarations: [OrdersStatusPage]
})
export class OrdersStatusPageModule {}
 