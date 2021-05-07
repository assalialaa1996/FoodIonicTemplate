import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 
 
import { IonicModule } from '@ionic/angular';

import { BankDetailPageRoutingModule } from './bank-detail-routing.module';

import { BankDetailPage } from './bank-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    BankDetailPageRoutingModule
  ],
  declarations: [BankDetailPage]
})
export class BankDetailPageModule {}
